import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Typography, Card } from "@mui/material";
import Timer from "../../Components/Timer";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateAnswer } from "./slicer";


const TakeQuiz = () => {
  const theme = createTheme();
  const htmlDecode = (input) => {
    const doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  };
  const { quiz, quizNumber } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const currentQuestion = quiz[quizNumber - 1];
  const answers = [
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ].sort(() => Math.random() - 0.5);

  const handleAnswer = (answer) => {
    const newQuiz = [...quiz];
    newQuiz[quizNumber - 1] = {
      ...currentQuestion,
      answered: answer,
    };

    dispatch(updateAnswer(newQuiz));
    if (quizNumber + 1 > quiz.length) {
      navigate("/result");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card sx={{ m: "1rem", p: "1.5rem 1rem" }}>
          <Typography variant="h4">
            {quizNumber}. {htmlDecode(currentQuestion?.question)}
          </Typography>
        </Card>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {answers.map((answer) => {
            return (
              <Card
                sx={{ width: "24%" }}
                key={answer}
                onClick={() => handleAnswer(answer)}
              >
                <Typography variant="h5" sx={{ m: ".5rem" }}>
                  {htmlDecode(answer)}
                </Typography>
              </Card>
            );
          })}
        </Container>
        <Typography
          variant="h3"
          sx={{ mt: "1.5rem", mb: "1.5rem" }}
        ></Typography>
        <Timer />
      </Container>
    </ThemeProvider>
  );
};

export default TakeQuiz;
