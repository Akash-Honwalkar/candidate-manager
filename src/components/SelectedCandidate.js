import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SelectedCandidate = ({selectedCandidate}) => {
    const [editing, setEditing] = useState(false);
  const [editedCandidate, setEditedCandidate] = useState({ ...selectedCandidate });
  const { id } = useParams();
  const selectedCandidate = candidates.find((candidate) => candidate.id === parseInt(id, 10));
  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    // Implement the logic to save the edited candidate details
    // For now, let's just update the state and exit editing mode
    setEditing(false);
    // You may want to make an API call to save the changes
  };

  const handleCancelClick = () => {
    // Reset the edited candidate details and exit editing mode
    setEditing(false);
    setEditedCandidate({ ...selectedCandidate });
  };

  const handleInputChange = (e) => {
    // Update the edited candidate details when input fields change
    const { name, value } = e.target;
    setEditedCandidate((prevCandidate) => ({
      ...prevCandidate,
      [name]: value,
    }));
  };


  return (

    <div className='mx-auto'>
    {selectedCandidate ? (
      <>
        <h2>Candidate Details</h2>
        {editing ? (
          <form>
            <label>
              Name:
              <input type="text" name="name" value={editedCandidate.name} onChange={handleInputChange} />
            </label>
            <label>
              Email:
              <input type="text" name="email" value={editedCandidate.email} onChange={handleInputChange} />
            </label>
            {/* Add other fields as needed */}
            <button type="button" onClick={handleSaveClick}>
              Save
            </button>
            <button type="button" onClick={handleCancelClick}>
              Cancel
            </button>
          </form>
        ) : (
          <>
            <p>Name: {selectedCandidate.name}</p>
            <p>Email: {selectedCandidate.email}</p>
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
  )
}

export default SelectedCandidate