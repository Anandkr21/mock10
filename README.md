# mock10

# Chat App (RN)

## `**Instructions**`

- Read the entire question carefully for at least 15 mins, understand it and then code it.
- Don’t jump directly into the code.
- Commit your code every hour with a proper commit message to your repository (we will monitor every commit)
- Use **Node, Express, MongoDB** for the backend.
- Use **HTML, CSS, JavaScript** for the frontend.
- Use **Socket.io** for real-time chat functionality.
- Implement user authentication and email verification using **Nodemailer**.

## `**Problem Statement**`

- The task is to build a fullstack real-time group chat application with user authentication and email verification using Node, Express, MongoDB, HTML, CSS, JavaScript, [Socket.io](http://socket.io/), and Nodemailer.
- Your app should have the following functionalities
    - User registration with email verification using **nodemailer** or any external packages of your choice.
    - User login with authentication using **Json Web Tokens (JWT)**
    - Real-time chat functionality with [**Socket.io**](http://socket.io/)
    - Ability to send and receive messages in real-time

---

## ****`Frontend`****

- Your frontend should be created using HTML, CSS and JS and should have the following pages
    - Signup Page
    - Login Page
    - Chat Page

---

## `**User Registration**`

- Users should be able to register with the following details:
    - Username
    - Email
    - Password
- Hash the password using **bcrypt** or **argon2** before storing it in the database.
- After registration, an email should be sent to the user's email address for verification.

---

## **`Email Verification`**

- After registration, an email should be sent to the user's email address for verification.
- The email should contain a verification link that the user can click to verify their email address.
- When the user clicks the verification link, their email address should be marked as verified in the database.

---

## **`User Login`**

- Users should be able to login with their email and password.
- Users should only be able to login if they have their email verified, give appropriate alerts if they have not.
- User authentication should be done using **Json Web Token (JWT)**
- After successful login, users should be redirected to the chat screen.

---

## ****`Real-time Chat Functionality`****

- Users should be able to send and receive messages in real-time using [Socket.io](http://socket.io/).
- When a user sends a message, it should be saved in the database along with the sender's information, recipient's information, and timestamp.
- When a user receives a message, it should be displayed in real-time on the chat screen.
- All the users who login get connected to the same room as this is a group chat application.
