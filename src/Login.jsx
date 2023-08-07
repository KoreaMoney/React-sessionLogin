import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        const validUsername = 'admin';
        const validPassword = 'admin';

        if (username === validUsername && password === validPassword) {
            sessionStorage.setItem('isLoggedIn', 'true');
            setLoginStatus('Login successful!');
        } else {
            setLoginStatus('Invalid username or password!');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />

                <button type="submit">Login</button>
            </form>

            <div>{loginStatus}</div>
        </div>
    );
};

export default Login;
