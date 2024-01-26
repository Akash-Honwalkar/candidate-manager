import React, { useState } from 'react';
import MultiStep from 'react-multistep';
import axios from 'axios';
import PersonalDetail from '../Forms/PersonalDetail';
import { useCandidateContext } from '../contexts/CandidateProvider';
import Education from '../Forms/Education';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';
import Skills from '../Forms/Skills';
import SelectedCandidateList from './SelectedCandidateList';
import { useParams } from 'react-router-dom';

const SelectedCandidate = ({ candidate }) => {
  const [editing, setEditing] = useState(false);
  const [editedCandidate, setEditedCandidate] = useState({ ...candidate });
  
  const {state}=useCandidateContext()
  const {id}=useParams()
  const newSelectedCandidate = state.candidates.find(candidate => candidate.id === (id));
  const selectedCandidate=state.selectedCandidate || newSelectedCandidate
  
  const steps = [
    {title:"Personal Details", component: <PersonalDetail candidate={editedCandidate} onChange={setEditedCandidate} /> },
    { title:"Education",component: <Education candidate={editedCandidate} onChange={setEditedCandidate} /> },
    { title:"Skills",component: <Skills candidate={editedCandidate} onChange={setEditedCandidate} /> },
    { title:"Experience",component: <Education candidate={editedCandidate} onChange={setEditedCandidate} /> },
  ];

  const handleEditClick = () => {
    window.scrollTo(0,0)
    setEditing(true);
    setEditedCandidate({ ...selectedCandidate });
};
const handleSaveClick = async () => {
    try {
      const response = await axios.put(`https://60d5a2c2943aa60017768b01.mockapi.io/candidate/${selectedCandidate.id}`, editedCandidate);
      setEditedCandidate(editedCandidate);
      console.log('Candidate updated successfully:', response.data);

      setEditing(false);
    } catch (error) {
      console.error('Error updating candidate:', error);
    }
  };

  const handleCancelClick = () => {
    setEditing(false);
  };
  return (
    <div className='container-fluid'>
      {selectedCandidate ? (
        <>
          <h2>Candidate Details</h2>
          {editing ? (
            <Card.Body className=''>
              <MultiStep steps={steps} />
              <div className='d-flex justify-content-center m-5'>
              <Button type="button" onClick={handleSaveClick}>
                Save
              </Button>
              <Button type="button" onClick={handleCancelClick} className='mx-auto'>
                Cancel
              </Button>
               </div>
            </Card.Body>
          ) : (
            <>
           <SelectedCandidateList selectedCandidate={selectedCandidate} handleEditClick={handleEditClick}/>
            </>
          )}
        </>
      ) : (
        <h2>No candidate selected</h2>
      )}
    </div>
  );
};



export default SelectedCandidate;
