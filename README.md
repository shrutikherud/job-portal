# 💼 Job Portal Web Application

A full-stack Job Portal web application built using the **MERN** stack (MongoDB, Express.js, React, Node.js), enabling job seekers to apply for jobs and companies (recruiters) to post and manage job listings. It also integrates **Firebase**, **Cloudinary**, **Multer**, and **JWT authentication**.

---

## 📌 Features

### 👤 User (Job Seeker)
- Register/Login via **Clerk Authentication**
- View job listings
- Apply for jobs by uploading resume and filling application form
- View their applied jobs and application status

### 🧑‍💼 Company (Recruiter)
- Login with secure credentials (JWT)
- Dashboard to:
  - Add new jobs
  - Manage posted jobs
  - View applicants and their resumes

---

## 🛠️ Tech Stack

| Technology       | Purpose                            |
|------------------|-------------------------------------|
| React.js         | Frontend UI                         |
| Node.js          | Backend runtime                     |
| Express.js       | Backend framework                   |
| MongoDB          | NoSQL Database                      |
| Mongoose         | MongoDB ORM                         |
| Multer           | File upload middleware              |
| Cloudinary       | Cloud image management              |
| Clerk            | User Authentication (for job seekers) |
| JWT              | Authentication (for recruiters)     |
| Tailwind CSS     | Styling                             |
| React Router     | Navigation                          |
| Axios            | API Communication                   |

---

## 🧠 How It Works

### 🔐 Authentication
- **Clerk** is used for **User Authentication** (job seekers).
- **JWT Tokens** are used to authenticate **Recruiters**, stored in local storage.

### 📤 Resume Uploading
- Resume file is uploaded using **Multer**
- Stored in **Firebase Storage**
- Resumes can be viewed by recruiters via links

### 🧾 Job Management (Company)
- Recruiter logs in using hardcoded credentials (later extendable)
- They can:
  - Add job listings (title, description, location, etc.)
  - View and delete jobs
  - View applications per job

### 📄 Applications (User)
- User applies to a job (fills form, uploads resume)
- The application is saved in the **applications** collection
- Users can track the jobs they applied for

---

### 🛠️ Setup Instructions
✅ Prerequisites:
- Node.js & npm
- MongoDB Atlas account
- Clerk project (for user auth)
- Cloudinary account

---

## 🔮 Future Enhancements

- 🤖 AI-powered chatbot for user assistance.
- 📅 Smart interview scheduling with reminders.
- 🌙 Toggleable dark mode for better UX.



