import { createSlice } from "@reduxjs/toolkit";
import { getQuiz } from "./action";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    quiz: [
      {
        category: "",
        type: "",
        difficulty: "",
        question: "",
        correct_answer: "",
        incorrect_answers: [],
      },
    ],
    quizNumber: 1,
  },
  reducers: {
    updateAnswer: (state, action) => {
      const newState = {
        ...state,
        quizNumber: state.quizNumber + 1,
        quiz: action.payload,
      };

      return newState;
    },
    resetAnswer: (state) => {
      const newState = {
        ...state,
        quizNumber: 1,
      };

      return newState;
    },
  },
  extraReducers: {
    [getQuiz.pending]: (state) => {
      console.log("pending");
    },
    [getQuiz.fulfilled]: (state, action) => {
      console.log(action);
      return {
        ...state,
        quiz: action.payload,
        error: null,
      };
    },
    [getQuiz.rejected]: (state) => {
      console.log("reject");
      return {
        ...state,
        error: true,
      };
    },
  },
});

const { updateAnswer, resetAnswer } = quizSlice.actions;

export { updateAnswer, resetAnswer, getQuiz };

export default quizSlice.reducer;
