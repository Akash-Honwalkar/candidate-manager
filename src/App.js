import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CandidateList from './components/CandidateList';
import Login from './components/Login';
import axios from 'axios';
import SelectedCandidate from './components/SelectedCandidate';
import CandidateForm from './components/CandidateForm';

function App() {
  const [candidate, setCandidate] = useState([])
  const [selectedCandidate, setSelectedCandidate] = useState(null)
  const url = "https://60d5a2c2943aa60017768b01.mockapi.io/candidate"
  useEffect(() => {
    axios.get(url).then((res) => {
      // console.log(res.data)
      setCandidate(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  const onSelectCandidate = (candidateId) => {
    setSelectedCandidate(candidate.find((candidates) => candidates.id === candidateId))
    if(selectedCandidate){
      
    }
  }
  
  const handleAddCandidate = async (newCandidate) => {
    const postUrl="https://60d5a2c2943aa60017768b01.mockapi.io/candidate"
    try {
      // Make an API call to add the new candidate using Axios
      const response = await axios.post(postUrl, newCandidate, {
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers needed for authentication or other purposes
        },
      });

      if (response.status === 201) {
        // If the request is successful, update state with the new candidate
        const addedCandidate = response.data;
        setCandidate((prevCandidates) => [...prevCandidates, newCandidate]);
        console.log(addedCandidate,newCandidate)
      } else {
        // Handle the case where the API request is not successful
        console.error('Failed to add candidate:', response.statusText);
      }
    } catch (error) {
      // Handle any network or unexpected errors
      console.error('Error adding candidate:', error);
    }
  };
  return (
    <div className="App">
      {/* <Login/> */}


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login
          //  onSuccess={handleSocialLoginSuccess} onFailure={handleSocialLoginFailure}
          />} />

          <Route
            path="/home"
            element={
              <div className='d-flex'>
                <CandidateList candidate={candidate} onSelectCandidate={onSelectCandidate} />
                <SelectedCandidate selectedCandidate={selectedCandidate} />
              </div>
            }
          />
          <Route path="/candidate/new"
           element={ <>
            <CandidateList candidate={candidate} onSelectCandidate={onSelectCandidate} />
            <CandidateForm onSubmit={()=>handleAddCandidate()} />
          </>}
            />
        <Route
          path="/candidate/:id"
          element={
            <>
            <CandidateList candidate={candidate} onSelectCandidate={onSelectCandidate} />
            <SelectedCandidate selectedCandidate={selectedCandidate} />
            </>
          }
        />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
