import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button'
import {Link, useNavigate} from "react-router-dom"
import "../App.css"
const CandidateList = ({candidate,onSelectCandidate}) => {
const navigate=useNavigate()

  const AddNewForm=()=>{
    window.scrollTo(0,0)
    navigate("/candidate/new")
  }
// const handleCardClick=()=>{

// }

  return (
    <div >
    <div className='left-col'>{candidate.map((candidates)=>{
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
      <Button  onClick={()=>AddNewForm()}>Add new user</Button>
      </div>
      )
}

export default CandidateList