import React from 'react'
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
        { value: 'dance', label: 'Dance' },
        { value: 'drawing', label: 'Drawing' },
      ];
  return (
    <div className='d-grid'>

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
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" name="address" value={candidate?.address} onChange={handleInputChange} />
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label>Phone NO</Form.Label>
        <Form.Control type="text" name="phone" value={candidate?.phone} onChange={handleInputChange} />
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label>Gender</Form.Label>
        <Form.Control type="text" name="gender" value={candidate?.gender} onChange={handleInputChange} />
        <Form.Select name="gender" value={candidate?.gender} onChange={handleInputChange} aria-label="Default select example"   >
      <option value="male">Male</option>
      <option value="female">Female</option>
    </Form.Select>
    {selectedHobbies && (
        <label className='mb-1'>
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
    </Form>
      </div>
  )
}

export default PersonalDetail