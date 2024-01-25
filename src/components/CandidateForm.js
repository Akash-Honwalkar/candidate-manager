import React, { useState } from 'react'
import PersonalDetail from '../Forms/PersonalDetail';
import MultiStep from 'react-multistep';
import Education from '../Forms/Education';
const CandidateForm = ({onSubmit}) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address:"",
    phone:"",
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
  const steps = [
    { component: <PersonalDetail formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit}/> },
    { component: <Education /> },
    // Add more steps as needed
  ];

  return (
    <div className='mx-auto'>
      <h2>Add Candidate</h2>
       <MultiStep steps={steps} />
    </div>
  )
}

export default CandidateForm