import { Webhook } from "svix";
import User from "../models/User.js";

// API controller function to manage Clerk user with the database

export const clerkWebhooks = async (req, res) => {
  try {
    // Create a Svix instance with Clerk webhook secret
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // IMPORTANT: Use rawBody instead of JSON.stringify(req.body)
    const payload = req.body;
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    // Verify the webhook signature
    whook.verify(JSON.stringify(payload), headers);

    // Getting data from request body
    const { data, type } = payload;

    // Switch case
    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          name: data.first_name + " " + data.last_name,
          image: data.image_url,
          resume: "",
        };
        await User.create(userData);
        console.log("✅ User Created Successfully");
        return res.status(201).json({ success: true, message: "User created" });
      }
      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email_address,
          name: data.first_name + " " + data.last_name,
          image: data.image_url,
        };
        await User.findByIdAndUpdate(data.id, userData);
        console.log("✅ User Updated Successfully");
        return res.status(200).json({ success: true, message: "User updated" });
      }
      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        console.log("✅ User Deleted Successfully");
        return res.status(200).json({ success: true, message: "User deleted" });
      }
      default:
        return res
          .status(200)
          .json({ success: true, message: "No action taken" });
    }
  } catch (error) {
    console.error("❌ Webhook Error:", error.message);
    res.status(400).json({ success: false, message: "Webhooks Error" });
  }
};
