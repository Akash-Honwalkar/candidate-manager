import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button'
import {Link, useNavigate, useParams} from "react-router-dom"
import "../App.css"
import { useCandidateContext }  from '../contexts/CandidateProvider'
import {ACTIONS} from "../contexts/CandidateReducer"
const CandidateList = () => {
    const {id}=useParams()
const navigate=useNavigate()
    const {state,dispatch}=useCandidateContext()
  const AddNewForm=()=>{
    window.scrollTo(0,0)
    navigate("/candidate/new")
  }
const onSelectCandidate = (candidateId) => {
    const selectedCandidate = state.candidates.find(candidate => candidate.id === candidateId);
    console.log(selectedCandidate)
    dispatch({ type: ACTIONS.SET_SELECTED_CANDIDATE, payload: selectedCandidate });
      
    }
    console.log(state)

    if(state.loading){
        return <h1>Loading Candidates...</h1>
    }
  return (
    <div >
        <h2>Candidate List</h2>
    <div className='left-col'>{state.candidates.map((candidate)=>{
      return (
        <Card  key={candidate.id} className={id===candidate.id?"activeCard":""} style={{ width: '18rem' ,margin:"10px"}} onClick={()=>onSelectCandidate(candidate.id)} >
          <Link style={{textDecoration:"none"}}to={`/candidate/${candidate.id}`}>
                <Card.Body>
                    {candidate.name}
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