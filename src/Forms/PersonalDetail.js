import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';

const PersonalDetail = ({candidate,handleSubmit,onChange}) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onChange((prevCandidate) => ({
          ...prevCandidate,
          [name]: value,
        }));
      };
      const selectedHobbies = candidate?.hobbies || [];
      const hobbyOptions = [
        { value: 'reading', label: 'Reading' },
        { value: 'sports', label: 'Sports' },
        { value: 'music', label: 'Music' },
        // Add more hobbies as needed
      ];
  return (
    <Form onSubmit={handleSubmit} className=''>
      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label>Candidate Name</Form.Label>
        <Form.Control type="text" name="name" value={candidate?.name} onChange={handleInputChange} />
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label>Email ID</Form.Label>
        <Form.Control type="email" name="email" value={candidate?.email} onChange={handleInputChange} />
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label>Gender</Form.Label>
        <Form.Control type="text" name="gender" value={candidate?.gender} onChange={handleInputChange} />
        <Form.Select name="gender" value={candidate?.gender} onChange={handleInputChange} aria-label="Default select example"   >
      <option value="male">Male</option>
      <option value="female">Female</option>
    </Form.Select>
    {selectedHobbies && (
        <label>
          Hobbies:
          <Select
            isMulti
            options={hobbyOptions}
            value={selectedHobbies.map((hobby) => ({ value: hobby, label: hobby }))}
            onChange={(selectedOptions) => onChange((prevCandidate) => ({
              ...prevCandidate,
              hobbies: selectedOptions.map((option) => option.value),
            }))}
          />
        </label>
      )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
  )
}

export default PersonalDetail