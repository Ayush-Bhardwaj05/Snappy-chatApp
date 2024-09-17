# Snappy ChatApp

This is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that allows users to register, log in, and engage in real-time chat. It features a smooth user interface, emoji picker integration, and message synchronization. This app focuses on providing an interactive and real-time chatting experience.

## Home Page

### Features
- Users can register and log in with a secure authentication system.
- Real-time chat functionality with smooth UI/UX.
- Users can send text messages and select emojis from an emoji picker.
- Messages are stored in the MongoDB database.
- Integration of Toast notifications for user feedback and error management.
- Responsive design for both desktop and mobile devices.
  
### Pages Overview

#### Register Page
The **Register Page** allows new users to sign up for an account by providing their username, email, and password.

- **Form Inputs**: Users are required to fill in a form with fields for their username, email, and password.
- **Validation**: Inputs are validated for proper formats (e.g., valid email, minimum password length).
- **Submit Button**: Upon form submission, the user data is sent to the backend for account creation.
- **User Feedback**: Success and error notifications are displayed using toast messages.

![image](https://github.com/user-attachments/assets/a5781276-f936-4e6c-945c-e5ca3b4c6e62)


#### Login Page
The **Login Page** allows existing users to log in by providing their username and password.

- **Form Inputs**: Users must enter their registered username and password.
- **Validation**: Validation ensures that both fields are filled out before submission.
- **Submit Button**: Upon form submission, the credentials are sent to the backend for authentication.
- **User Feedback**: Success and error notifications are shown based on login attempts.

![image](https://github.com/user-attachments/assets/b5e2b37b-1941-46a9-b3bf-ee80ba0a7d99)

#### Chat Page
The **Chat Page** is where users engage in real-time conversations with each other.

- **Message Input**: Users can type their message in a text box at the bottom of the chat page.
- **Emoji Picker**: An emoji picker is available for users to select and include emojis in their messages.
- **Real-Time Updates**: Messages are displayed in real-time as users send them, and they appear in chronological order.
- **User Feedback**: Toast notifications inform users of successful message sending or errors.

![image](https://github.com/user-attachments/assets/3a65295c-fa23-45ca-990f-0d83448437ed)



### Getting Started
To run the project locally, you will need to install the following dependencies:

- Node.js
- npm
- MongoDB

### Installation

#### Frontend Setup:

1. Clone the project repository:
    ```bash
    git clone [Your GitHub Repository Link]
    ```

2. Navigate to the frontend directory:
    ```bash
    cd snappy-chatapp/public
    ```

3. Install the frontend dependencies:
    ```bash
    npm install
    ```

4. Start the frontend development server:
    ```bash
    npm start
    ```

#### Backend Setup:

1. Navigate to the backend directory:
    ```bash
    cd snappy-chatapp/server
    ```

2. Install the backend dependencies:
    ```bash
    npm install
    ```

3. Start the backend server:
    ```bash
    nodemon server.js
    ```

### Accessing the Application
- The frontend runs on port 3000. Open a web browser and navigate to [http://localhost:3000](http://localhost:3000) to use the app.
- The backend runs on port 4000 and handles API requests and user data, but is not directly accessible to users.

### User Registration and Login
- Users can register a new account or log in using their existing credentials.
- Upon successful login, users are redirected to the chat interface.

### Real-Time Chatting
- Once logged in, users can chat with other users in real-time.
- Emoji picker integration allows users to include emojis in their messages.
- Messages are displayed chronologically with user avatars.

### Chat Management
- Messages are stored in a MongoDB database.
- Logged-in users can chat with multiple users in real time.
- User feedback is provided using toast notifications for successful actions and error handling.


### Database Management
- The application utilizes MongoDB to store user information and chat messages.
- User authentication data and chat messages are stored in separate collections, with full CRUD operations for managing them.

### Technologies Used
- **Frontend**: React.js, styled-components
- **Backend**: Node.js, Express.js, MongoDB
- **Real-Time**: WebSockets (or your method of real-time communication)
- **Notifications**: Toast notifications (react-toastify)
- **User Feedback**: Emoji picker (emoji-mart)
