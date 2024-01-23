import React, { useState } from 'react'
import PersonalDetail from '../Forms/PersonalDetail';
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
    <div className='mx-auto'>
      <h2>Add Candidate</h2>
      {/* <form onSubmit={handleSubmit}>
    
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange}  />
        </label>
  
        <button type="submit">Add Candidate</button>
      </form>
       */}
       <PersonalDetail formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default CandidateForm