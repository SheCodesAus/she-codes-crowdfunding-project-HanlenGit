import React, { useState } from "react";
import { Link } from "react-router-dom";

function PledgeForm({ projectId }) {
  // State
  const token = window.localStorage.getItem("token");
  const [pledge, setPledge] = useState({
    amount: "",
    comment: "",
    anonymous: false,
  });

  // Actions and Helpers
  const handleChange = (event) => {
    const { id, value } = event.target;
    setPledge((prevPledge) => ({
      ...prevPledge,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = window.localStorage.getItem("token")
    console.log("handleSubmit", pledge, token)
    
    // Is user logged in and have they put something in all fields?
    if (token && pledge.amount && pledge.comment) {
        try {
          // this is posting my content from my user to the app
            const res = await fetch(`${process.env.REACT_APP_API_URL}pledges/`, {
                method: "post",
                headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                },
                // this is the front end telling the back end what to do
                body: JSON.stringify({
                    amount: parseInt(pledge.amount), 
                    comment: pledge.comment, 
                    anonymous: pledge.anonymous === 'true', 
                    project_id: parseInt(projectId),
                    supporter: 1
                
                }),
            });
            // giving the details of what the code is doing on my react app
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }
  };

  if (!token) {
    return (
      <Link to="/login">Please login to pledge to this project</Link>
    );
  }

  return (
    <form>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          placeholder="Enter pledge amount"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <input
          type="text"
          id="comment"
          placeholder="Enter comment here"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="anonymous">Anonymous:</label>
        <select id="anonymous" onChange={handleChange}>
          <option value="">--Please choose an option--</option>
          <option value={true}>True</option>
          <option value={false}>False</option>
        </select>
      </div>
      <button type="submit" onClick={handleSubmit}>
        Submit Pledge
      </button>
    </form>
  );
}

export default PledgeForm;