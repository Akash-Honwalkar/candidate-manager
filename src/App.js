import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CandidateList from './components/CandidateList';
import Login from './components/Login';
import SelectedCandidate from './components/SelectedCandidate';
import CandidateForm from './components/CandidateForm';

function App() {
  
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login
          />} />

          <Route
            path="/home"
            element={
              <div className='d-flex'>
                <CandidateList  />
                <SelectedCandidate  />
              </div>
            }
          />
          <Route path="/candidate/new"
           element={ <>
            <CandidateList  />
            <CandidateForm />
          </>}
            />
        <Route
          path="/candidate/:id"
          element={
            <>
            <CandidateList  />
            <SelectedCandidate />
            </>
          }
        />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
