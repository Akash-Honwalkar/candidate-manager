
export const ACTIONS = {
    SET_CANDIDATES: 'SET_CANDIDATES',
    ADD_CANDIDATE: 'ADD_CANDIDATE',
    UPDATE_CANDIDATE: 'UPDATE_CANDIDATE',
    DELETE_CANDIDATE: 'DELETE_CANDIDATE',
    SET_LOADING: 'SET_LOADING',
    SET_ERROR: 'SET_ERROR',
    SET_SELECTED_CANDIDATE:"SET_SELECTED_CANDIDATE"
  };
  
  const candidateReducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.SET_CANDIDATES:
        return { ...state, candidates: action.payload, loading: false, error: null };
        case ACTIONS.SET_SELECTED_CANDIDATE:
            return{ ...state,editing:true,selectedCandidate:action.payload,loading:false}
  
      case ACTIONS.ADD_CANDIDATE:
        return { ...state, candidates: [...state.candidates, action.payload], loading: false, error: null };
  
      case ACTIONS.UPDATE_CANDIDATE:
        const updatedCandidates = state.candidates.map(candidate =>
          candidate.id === action.payload.id ? action.payload : candidate
        );
        return { ...state, candidates: updatedCandidates, loading: false, error: null };
  
      case ACTIONS.DELETE_CANDIDATE:
        const filteredCandidates = state.candidates.filter(candidate => candidate.id !== action.payload);
        return { ...state, candidates: filteredCandidates, loading: false, error: null };
  
      case ACTIONS.SET_LOADING:
        return { ...state, loading: action.payload };
  
      case ACTIONS.SET_ERROR:
        return { ...state, error: action.payload, loading: false };
  
      default:
        return state;
    }
  };
  
  export default candidateReducer;
  