import Card from 'react-bootstrap/Card'
import {Link, useNavigate} from "react-router-dom"
const CandidateList = ({candidate,onSelectCandidate}) => {
const navigate=useNavigate()

  const AddNewForm=()=>{
    navigate("/candidate/new")
  }
// const handleCardClick=()=>{

// }

  return (
    <div className='d-grid'>
    <div>{candidate.map((candidates)=>{
      return (
        <Card  key={candidates.id} style={{ width: '18rem' ,margin:"10px"}} onClick={()=>onSelectCandidate(candidates.id)} >
          <Link style={{textDecoration:"none"}}to={`/candidate/${candidates.id}`}>
                <Card.Body>
                    {/* <Card.Img src={candidates.profile_picture} alt={candidates.name} className='w-50 d-flex m-3'/> */}
                    {candidates.name}
                </Card.Body>
                </Link>

            </Card>
        )
      })}</div>
      <button onClick={()=>AddNewForm()}>Add new user</button>
      </div>
      )
}

export default CandidateList