
# Project & Task Management App 🗂️✅

A full-featured Project and Task Management system where users can create, manage, and track multiple projects and tasks. The application supports user roles (Admin and Member), real-time status updates, prioritization, and commenting on tasks — all through a clean and responsive UI.

## 🚀 Live Demo
👉 [Check it out here](https://projectandtaskmanagement.netlify.app/)

---


## ✨ Features

### 🔐 Authentication
- Admin and Member roles.
- User session stored securely in browser's `sessionStorage`.

### 📁 Project Management
- Admins can create new projects.
- Clickable project cards to enter task view.
- Responsive layout to manage projects easily.

### 📋 Task Management
- Tasks are categorized as:
  - **Pending**
  - **In Progress**
  - **Finished**
- Sort tasks by:
  - **Priority**
  - **Creation Date**
- Add tasks (admin only) using a clean form UI.
- Comments can be added to tasks to track progress or share feedback.

### 💬 Task Commenting
- Add contextual comments to any task.
- View and manage all task-specific discussion.

### 📊 Sorting & Filtering
- Intelligent sorting based on task priority or time created.
- Tasks are auto-grouped based on status.

### 🧑 User Info
- Logged-in users can view their profile (User ID, Email, Name, Role).

---

## 🛠️ Tech Stack

| Category        | Tech Used                    |
|----------------|------------------------------|
| Frontend       | React, TailwindCSS           |
| State Management | React Context API          |
| Backend        | Node.js, Express             |
| Database       | MongoDB                      |
| Deployment     | Netlify (Frontend)           |

---

## 📂 Folder Structure (Frontend)

```
├── components
│   ├── ProceedCard.jsx
│   ├── Header.jsx
│   ├── ProjectCard.jsx
│   ├── Loader.jsx
│   ├── TaskCard.jsx
│   ├── ProjectOrTaskForm.jsx
│   ├── SortingStatus.jsx
│   └── CommentForm.jsx
├── context
│   └── GlobalContext.jsx
├── pages
│   ├── ProceedPage.jsx
│   ├── LoginSignUp.jsx
│   ├── Home.jsx
│   ├── Tasks.jsx
│   └── User.jsx
├── utils
│   ├── constant.js
│   └── fetchFunction.js
```

---

## 🧑‍💻 How to Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/project-task-management.git
   cd project-task-management
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app at `http://localhost:port`

> 💡 Ensure you have the backend server (API) running as well for full functionality.

---

## 📬 Contact

If you'd like to contribute, report a bug, or have feedback, feel free to reach out!

---


_Developed with ❤️ by Krushna D_
