[![React](https://img.shields.io/badge/react-20232A.svg?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/node.js-339933.svg?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/mongodb-47A248.svg?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/express.js-000000.svg?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![Cloudinary](https://img.shields.io/badge/cloudinary-3448C5.svg?style=flat&logo=cloudinary&logoColor=white)](https://cloudinary.com/)
[![Multer](https://img.shields.io/badge/multer-333333.svg?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/package/multer)
[![Clerk](https://img.shields.io/badge/clerk-F44C57.svg?style=flat&logo=clerk&logoColor=white)](https://clerk.dev/)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-06B6D4.svg?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)<br>
[![JWT](https://img.shields.io/badge/JWT-000000.svg?style=flat&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=flat&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/)
[![Vercel](https://img.shields.io/badge/vercel-000000.svg?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)



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



