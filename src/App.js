import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CandidateList from './components/CandidateList';
import Login from './components/Login';
import axios from 'axios';
import SelectedCandidate from './components/SelectedCandidate';

function App() {
  const [candidate, setCandidate] = useState([])
  const [selectedCandidate, setSelectedCandidate] = useState(null)
  const url = "https://60d5a2c2943aa60017768b01.mockapi.io/candidate"
  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data)
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
          //  element={<CandidateForm onSubmit={/* Implement form submission */} />}
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
