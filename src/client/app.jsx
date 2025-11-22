import React, { useEffect, useState } from 'react';
import './app.css';

export default function App() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Get the current user's name
    fetch('/api/now/table/sys_user?sysparm_query=user_name=' + window.g_user.userName + '&sysparm_display_value=all&sysparm_limit=1', {
      headers: {
        "Accept": "application/json",
        "X-UserToken": window.g_ck
      }
    })
    .then(res => res.json())
    .then(data => {
      if (data.result && data.result.length > 0) {
        const user = data.result[0];
        const fullName = typeof user.name === 'object' ? user.name.display_value : user.name;
        setUserName(fullName || window.g_user.userName);
      } else {
        setUserName(window.g_user.userName);
      }
    })
    .catch(() => {
      setUserName(window.g_user.userName);
    });
  }, []);

  return (
    <div className="welcome-container">
      <div className="welcome-panel">
        <h1 className="welcome-title">Hello, {userName}!</h1>
        <p className="welcome-message">Welcome to our application</p>
        <p className="welcome-subtitle">We're glad to have you here</p>
      </div>
    </div>
  );
}