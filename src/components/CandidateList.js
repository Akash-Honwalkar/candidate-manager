import Card from 'react-bootstrap/Card'
import {useNavigate} from "react-router-dom"
const CandidateList = ({candidate,onSelectCandidate}) => {
const navigate=useNavigate()
  const AddNewForm=()=>{
    navigate("/candidate/new")
  }


  return (
    <div className='d-grid'>
    <div>{candidate.map((candidates)=>{
      return (
        <Card  key={candidates.id} style={{ width: '18rem' ,margin:"10px"}} onClick={()=>onSelectCandidate(candidates.id)} >
                <Card.Body>
                    {/* <Card.Img src={candidates.profile_picture} alt={candidates.name} className='w-50 d-flex m-3'/> */}
                    {candidates.name}
                </Card.Body>

            </Card>
        )
      })}</div>
      <button onClick={()=>AddNewForm()}>Add new user</button>
      </div>
      )
}

export default CandidateList