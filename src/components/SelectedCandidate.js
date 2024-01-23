import React, { useState, useEffect } from 'react';
import MultiStep from 'react-multistep';
// import 'react-multistep/style.css';
import axios from 'axios';
import PersonalDetail from '../Forms/PersonalDetail';

const SelectedCandidate = ({ candidate }) => {
  const [editing, setEditing] = useState(false);
  const [editedCandidate, setEditedCandidate] = useState({ ...candidate });

  const steps = [
    { component: <PersonalDetail candidate={editedCandidate} onChange={setEditedCandidate} /> },
    // Add more steps as needed
  ];

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      // Make an HTTP request to update the candidate
      const response = await axios.put(`https://60d5a2c2943aa60017768b01.mockapi.io/candidate/${candidate.id}`, editedCandidate);

      // Handle the response based on your API structure
      // For example, you might want to update the state with the edited candidate
      console.log('Candidate updated successfully:', response.data);

      // Exit editing mode
      setEditing(false);
    } catch (error) {
      console.error('Error updating candidate:', error);
    }
  };

  const handleCancelClick = () => {
    // Reset the edited candidate details and exit editing mode
    setEditing(false);
    setEditedCandidate({ ...candidate });
  };

  return (
    <div>
      {candidate ? (
        <>
          <h2>Candidate Details</h2>
          {editing ? (
            <>
              <MultiStep steps={steps} />
              <button type="button" onClick={handleSaveClick}>
                Save
              </button>
              <button type="button" onClick={handleCancelClick}>
                Cancel
              </button>
            </>
          ) : (
            <>
              <p>Name: {candidate.name}</p>
              {/* Display other details */}
              <button type="button" onClick={handleEditClick}>
                Edit
              </button>
            </>
          )}
        </>
      ) : (
        <p>No candidate selected</p>
      )}
    </div>
  );
};



export default SelectedCandidate;
