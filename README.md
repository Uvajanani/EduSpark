# 🎓 EduSpark – Interactive 3D Learning Platform

**EduSpark** is an immersive educational platform where students can learn subjects through interactive 3D models, practice tests in a gamified environment, ask doubts through a smart chatbot, and track their academic performance via a detailed dashboard. Built using the **MERN Stack**, it combines modern web technologies with 3D visualization to revolutionize digital learning.

---

## 🚀 Features

### 🧠 Learning & Interaction
- **Subjects in 3D**: Explore concepts through **3D models** developed using **Blender**, providing a hands-on visual learning experience.
- **Video Learning**: Watch topic-related videos alongside 3D illustrations for better understanding.
- **Rich Content**: Each subject includes detailed explanations, written content, and visual guides.

### 🎮 Gamified Tests
- **Interactive Quizzes**: Take practice tests in an engaging, game-like format.
- **Score System**: Earn points and track progress after each test to boost motivation.
- **Bookmarking**: Save important or challenging subjects/topics for quick access later.

### 🤖 Chatbot Support
- **Ask Doubts Instantly**: Use the AI-powered chatbot to ask subject-related questions anytime.
- **Real-Time Help**: Get immediate assistance or explanations to support your learning flow.

### 📊 Performance Dashboard
- **Weekly & Monthly Analytics**: Visualize your progress over time with dynamic charts.
- **Test Scores**: View individual test results and performance stats.
- **Bookmarked Topics**: Access saved topics from a central location for easy revision.

---

## 🧰 Tech Stack

### Frontend
- **React.js** – Interactive UI with component-based architecture
- **Three.js / react-three-fiber** – Integration of 3D models into the frontend
- **Chart.js / Recharts** – Displaying score analytics in dashboard
- **Axios** – API communication

### Backend
- **Node.js + Express.js** – RESTful APIs and server logic
- **MongoDB + Mongoose** – Storing user data, scores, bookmarks, content, etc.

### Others
- **Blender** – 3D model creation and animation
- **Chatbot** – Integrated using third-party APIs 
- **JWT Auth** – User authentication and protected routes

---


## 🔧 Getting Started

1. **Clone the Repository**
    ```bash
      git clone https://github.com/Uvajanani/EduSpark.git
      cd EduSpark
2. **Install Dependencies**
- Backend
    ```bash
    cd Backend
    npm install

- Frontend
    ```bash
    cd Frontend
    npm install

3. **Setup Environment Variables**
Create a .env file in /server directory:
    ```bash
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    PORT=5000

4. Start the Development Servers

- Start backend
  ```bash
  cd Backend
  npm run server

- Start frontend
  ```bash
  cd Frontend
  npm run dev




