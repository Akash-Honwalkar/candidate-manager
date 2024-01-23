import Card from 'react-bootstrap/Card'
const CandidateList = ({candidate,onSelectCandidate}) => {

  return (
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
  )
}

export default CandidateList