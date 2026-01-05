# AuthContextApp

User Authentication App (React Native)

A clean and modern React Native authentication app implementing Login, Signup, and Logout functionality using React Context API, TypeScript, React Navigation, and AsyncStorage for state persistence.

Objective

The goal of this project is to demonstrate:
Authentication flow handling
Global state management using React Context API
Form validation & error handling
Screen navigation using React Navigation
Persistent login using AsyncStorage
Clean, reusable UI & code structure

Tech Stack

React Native
TypeScript
React Context API
React Navigation (Native Stack)
AsyncStorage
react-native-vector-icons
Modern UI styling

Project Structure
src/
├── assets/
│ └── home.jpg
├── context/
│ └── AuthContext.tsx
├── navigation/
│ └── AppNavigator.tsx
├── screens/
│ ├── Login.tsx
│ ├── Signup.tsx
│ └── Home.tsx
├── styles/
│ ├── loginStyles.ts
│ └── homeStyles.ts
├── utils/
│ └── validation.ts
└── types/
└── images.d.ts

Features Implemented
Authentication Context
Centralized authentication logic using AuthContext
Exposed methods:
login(email, password)
signup(name, email, password)
logout()
Stores authenticated user globally

Login Screen

Email & Password inputs
Email format validation
Incorrect credentials handling
Password visibility toggle eye
Navigation to Signup screen

Signup Screen

Name, Email & Password inputs
Validation for:
Missing fields
Invalid email
Password length (< 6 chars)
Navigation back to Login screen

Home Screen

Displays logged-in user's name and email
Verified badge UI
Logout button
Clean dashboard-style UI

Persistent Authentication (Bonus)

Uses AsyncStorage
User remains logged in even after app restart

Navigation

Implemented using React Navigation (Native Stack)
Conditional navigation based on authentication state
Headers disabled for cleaner UI

UI / UX

Modern & consistent color scheme
Reusable styles
Intuitive layouts
Vector icons for better UX

Screens

Login Screen
Signup Screen
Home (Dashboard) Screen

steps to run
git clone repo
cd repo
npm install
cd ios
pod install
cd ..
npm run android/ios
