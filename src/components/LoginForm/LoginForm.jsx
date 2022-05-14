import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



function LoginForm() {
  // State
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  // Hooks
  const navigate = useNavigate();

  // Actions and Helpers
  const handleChange = (event) => {
    const { id, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  // const postData = async () => {
  //   const response = await fetch(
  //     `${process.env.REACT_APP_API_URL}api-token-auth/`,
  //     {
  //       method: "post",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(credentials),
  //     }
  //   );
  //   return response.json();
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (credentials.username && credentials.password) {
  //     postData().then((response) => {
  //       console.log("response", response);
  //       window.localStorage.setItem("token", response.token);
  //     });
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (credentials.username && credentials.password) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}api-token-auth/`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
          }
        );
        const data = await response.json();
        console.log("data", data);

        window.localStorage.setItem("token", data.token);
        window.localStorage.setItem("username", credentials.username);
        if (data.token===undefined) {
          console.log("invalid credentials")
          return (
            <>
            <h2>Incorrect Login Details</h2>
            <h2>Please Try Again</h2>
            </>
          );
        }
      else {
        navigate(`/users/${data.id}`);
      } 
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <form className="form-group">
        <label htmlFor="username">Username:</label>
        <input type="username" className="form-item" placeholder="Enter email" onChange={handleChange} />
        <label htmlFor="password">Password:</label>
        <input type="password" className="form-item" placeholder="Enter password" onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
    </form>
  );
}

export default LoginForm;