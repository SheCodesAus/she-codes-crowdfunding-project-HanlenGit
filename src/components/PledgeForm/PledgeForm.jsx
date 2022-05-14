import React, { useState } from "react";

// Imports
import { useNavigate,useParams,Link } from "react-router-dom";

function PledgeForm(pledgeData) {
  // State
  const token = window.localStorage.getItem("token")
  const [pledge, postPledge] = useState(
    pledgeData.map
  );

  // // Hooks
  const { id } = useParams();
  const navigate = useNavigate();

  // Actions and Helpers
  const handleChange = (event) => {
    const { id, value } = event.target;
    postPledge((PledgeData) => ({
      ...PledgeData,
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
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}pledges/`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Token ${token}`,
            },
            body: JSON.stringify({
              amount: parseInt(pledge.amount), 
              comment: pledge.comment, 
              anonymous: true, 
              project_id: parseInt(id),
              pledge_date: date_created
            }),
          }
        );
        const data = await response.json();
        console.log(data)
        navigate(`/project/${id}`);
      } catch (err) {
        console.log(err);
      }
    }
  };

    if (!token) {
      return (
        <Link to="/login">Please login to pledge to this amazing project</Link>
      );
    }

  return (
    <form className="form-group">
      <h2 className="project-header">Support this beautiful Fur Baby!</h2>
      <div className="form-item">
        <label htmlFor="comment">Project ID</label>
        <input
          type="text"
          id="text"
          placeholder="Project id"
          onChange={handleChange}
        />
      </div>
      <div className="form-item">
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="number"
          placeholder="Enter pledge amount"
          onChange={handleChange}
        />
      </div>
      <div className="form-item">
        <label htmlFor="comment">Comment:</label>
        <input
          type="comment"
          id="comment"
          placeholder="Enter comment here"
          onChange={handleChange}
        />
        <div className="form-item">
        <label htmlFor="pledge_date">Pledge Date:</label>
        <input
          type="date"
          id="date"
          placeholder="Pledge Date"
          onChange={handleChange}
        />
      </div>
      <div className="form-item">
        <label htmlFor="anonymous">Anonymous:</label>
        <select onChange={handleChange}>
          <option value="">--Please choose an option--</option>
          <option value={true}>True</option>
          <option value={false}>False</option>
        </select>
      </div>
      <button type="submit" className="form-button" onClick={handleSubmit}>
        Submit Pledge
      </button>
    </form>
  );
}

export default PledgeForm;