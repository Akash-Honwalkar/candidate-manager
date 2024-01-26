import React, { useState } from 'react'
import PersonalDetail from '../Forms/PersonalDetail';
import MultiStep from 'react-multistep';
import Education from '../Forms/Education';
import Skills from "../Forms/Skills"
const CandidateForm = ({onSubmit}) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address:"",
    phone:"",
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
    onSubmit(formData);
    console.log(formData)
  };
  const steps = [
    { component: <PersonalDetail formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit}/> },
    { component: <Education formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit}/> },
    { component: <Skills formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit}/> },
  ];

  return (
    <div className='mx-auto'>
      <h2>Add Candidate</h2>
       <MultiStep steps={steps} />
    </div>
  )
}

export default CandidateForm