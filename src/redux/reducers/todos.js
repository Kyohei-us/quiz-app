import { COUNT_CORRECT, SET_CORRECT} from "../actionTypes";

const initialState = {
    correctCount: 0,
    correctArray: [],
};

const todos =  (state = initialState, action) => {
  switch (action.type) {
    case COUNT_CORRECT: {
        return {
            ...state,
            correctCount: state.correctArray.filter(Boolean).length
          };
    }
    case SET_CORRECT:{
        var tmp = state.correctArray;
        tmp[action.payload.qnum - 1] = action.payload.cor;
        return {
            ...state,
            correctArray: tmp,
        }
    }
    default:
      return state;
  }
}

export default todos;
