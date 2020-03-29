import { GET_SCORE, SET_SETTINGS, PLAY_AUDIO, TIMER } from "../actions";

const initialState = { size: 3, score: 0, speed: 0.3, time: 60, highScore: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SETTINGS:
      return {
        ...state,
        speed: action.payload.speed,
        size: action.payload.size
      };
    case GET_SCORE:
      const score = action.payload + state.score;
      let highscore = state.highScore;
      if (score > state.highScore) {
        highscore = score;
        localStorage.setItem("highscore", JSON.stringify(highscore));
      }
      return {
        ...state,
        score: score,
        highScore: highscore
      };
    case PLAY_AUDIO:
      return {
        ...state,
        score: action.payload
      };
    case TIMER:
      return {
        ...state,
        time: action.payload
      };

    default:
      const prevHS = JSON.parse(localStorage.getItem("highscore"));
      console.log(prevHS);
      return { ...state, highScore: prevHS };
  }
};

export default reducer;
