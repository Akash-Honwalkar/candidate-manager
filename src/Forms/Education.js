import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

const Education = ({candidate,handleSubmit,onChange}) => {
    const [educationDetails, setEducationDetails] = useState(candidate.education);
    const handleEducationInputChange = (index, e) => {
        const { name, value } = e.target;
        const updatedEducation = [...educationDetails];
        console.log(updatedEducation)
        updatedEducation[index] = { ...updatedEducation[index], [name]: value };
        setEducationDetails(updatedEducation);
      };
    const handleAddEducation = () => {
        if (educationDetails.length < 10) {
            setEducationDetails((prevEducation) => [...prevEducation, { institute: '', pass_out_year: '' }]);
        }
    };
    console.log(educationDetails)
    
      const handleRemoveEducation = (index) => {
        if (educationDetails.length > 1) {
          const updatedEducation = [...educationDetails];
          updatedEducation.splice(index, 1);
          setEducationDetails(updatedEducation);
        }
      };
    
  return (
    <div>
          {educationDetails.map((edu, index) => (
            <Form onSubmit={handleSubmit} key={index} className=''>
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label> Name of School/College/Institute:</Form.Label>
              <Form.Control  type="text"
                  name="institute"
                  value={edu.institute}
                  onChange={(e) => handleEducationInputChange(index, e)}/>
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label>Year of Graduation:</Form.Label>
              <Form.Control    type="text"
                  name="pass_out_year"
                  value={edu.pass_out_year}
                  onChange={(e) => handleEducationInputChange(index, e)}/>
            </Form.Group>
              {educationDetails.length > 1 && (
                <Button onClick={() => handleRemoveEducation(index)}>Remove</Button>
              )}
            </Form>
          ))}
          {educationDetails.length < 10 && (
            <Form>

              <Form.Group className="mb-1 d-grid" controlId="formBasicEmail">
              <Form.Label>Name of School/College/Institute:</Form.Label>
              <Form.Control    type="text"
                  name="insitute"
                  value={educationDetails[educationDetails.length - 1].institute}
                  onChange={(e) => handleEducationInputChange(educationDetails.length - 1, e)}/>
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label>Year of Graduation:</Form.Label>
              <Form.Control    type="text"
                  name="pass_out_year"
                  value={educationDetails[educationDetails.length - 1].pass_out_year}
                  onChange={(e) => handleEducationInputChange(educationDetails.length - 1, e)}/>
            </Form.Group>
              <Button onClick={handleAddEducation}>Add Education</Button>
              </Form>
          )}
        </div>
  )
}

export default Education