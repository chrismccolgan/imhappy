import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import { UserProfileProvider } from './components/UserProfile/UserProfileProvider';
import { BrowserRouter } from 'react-router-dom';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <UserProfileProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProfileProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
