import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

import "../App.css"

const SelectedCandidateList = ({selectedCandidate,handleEditClick}) => {
 
  return (
    <Card >
           <h4>Personal Details</h4>
           <br/>
        <div className='card-details mb-5'>
    <h6>Name: {selectedCandidate.name}</h6>
    <h6>Email: {selectedCandidate.email}</h6>
    <h6>Address: {selectedCandidate.address}</h6>
    </div>
        <div className='card-details'>
    <h6 className='d-flex'>Hobbies: <span>{selectedCandidate.hobbies.map((hobby)=>(
        <ul >{hobby}</ul>
        ))}</span></h6>
    <h6>Gender: {selectedCandidate.gender}</h6>
        <h6>Phone No: {selectedCandidate.phone}</h6>
 
    </div>
           <hr/>
    <h4>Education Details</h4>
    <br/>
           <div className='mb-5'>

        {selectedCandidate.education.map((data)=>(
            <div className='card-details text-start mb-2'>
            <h6>Institute Name:{data.institute}</h6>
            <h6>Degree:{data.degree}</h6>
            <h6>Passout Year:{data.pass_out_year}</h6>
            <h6>Percentage:{data.percentage}</h6>
            </div>
        ))}
        </div>
           <hr/>
        <h4>Work Experince</h4>
        <br/>
           <div className='mb-5'>

{selectedCandidate.experience.map((data)=>(
    <div className='card-details text-start mb-2'>
    <h6>Company:{data.comapny}</h6>
    <h6>Project:{data.project}</h6>
    <h6>Role:{data.role}</h6>
    <h6>Team size:{data.team_size}</h6>
    <h6>Duration:{data.duration}</h6>
    </div>
))}
<hr/>
<h4>Skills</h4>
<br/>
   {selectedCandidate.skills.map((data)=>(
    <div className='card-details text-start mb-2'>
    <h6>Name:{data.name}</h6>
    <h6>Experience:{data.experience}</h6>
    </div>
))}
</div>
<hr/>
<div className='mb-5'>

    <Button style={{width:"300px"}} type="button" onClick={handleEditClick}>
      Edit
    </Button>
</div>
    </Card>
  )
}

export default SelectedCandidateList