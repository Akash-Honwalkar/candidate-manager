import React, { useState } from 'react'

const CandidateForm = ({onSubmit}) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // Add other fields as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Extract form data and call the onSubmit function to handle the submission
    // const formData = ""
    onSubmit(formData);
    console.log(formData)
  };

  return (
    <div>
      <h2>Add Candidate</h2>
      <form onSubmit={handleSubmit}>
        {/* Your form components go here */}
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange}  />
        </label>
        {/* Add other form fields */}
        <button type="submit">Add Candidate</button>
      </form>
    </div>
  )
}

export default CandidateForm