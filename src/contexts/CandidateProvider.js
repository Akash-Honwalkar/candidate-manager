import React, { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import candidateReducer, { ACTIONS } from './CandidateReducer';

const CandidateContext = createContext();

const initialState = {
  candidates: [],
  loading: false,
  error: null,
  selectedCandidate:null,
  editing:false,
};

export const CandidateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(candidateReducer, initialState);
  const url = "https://60d5a2c2943aa60017768b01.mockapi.io/candidate"
  useEffect(() => {
    const fetchCandidates = async () => {
      dispatch({ type: ACTIONS.SET_LOADING, payload: true });

      try {
        const response = await axios.get(url);
        dispatch({ type: ACTIONS.SET_CANDIDATES, payload: response.data });
      } catch (error) {
        dispatch({ type: ACTIONS.SET_ERROR, payload: 'Error fetching candidates' });
      }
    };

    fetchCandidates();
  }, []);

  return (
    <CandidateContext.Provider value={{ state, dispatch }}>
      {children}
    </CandidateContext.Provider>
  );
};

export const useCandidateContext = () => {
  const context = useContext(CandidateContext);
  if (!context) {
    throw new Error('useCandidateContext must be used within a CandidateProvider');
  }
  return context;
};
