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
        // window.localStorage.setItem("username", credentials.username);
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <form class="form-group">
        <label for="exampleInputUsername">Username:</label>
        <input type="email" className="form-item" placeholder="Enter email" onChange={handleChange} />
        <label for="staticEmailexampleInputPassword">Password:</label>
        <input type="email" className="form-item" placeholder="Enter password" onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
    </form>
  );
}

export default LoginForm;