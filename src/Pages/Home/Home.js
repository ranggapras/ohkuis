import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Typography, Button } from "@mui/material";
import Vector from "../../Assets/quiz.jpg";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getQuiz, resetAnswer } from "../TakeQuiz/slicer";

const Home = () => {
  const { isLogin, nama } = useSelector((state) => state.login);
  const theme = createTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLogin) {
      navigate("/login", { replace: true });
    }
  }, [isLogin, navigate]);
  useEffect(() => {
    dispatch(resetAnswer());
    dispatch(getQuiz());
  }, [dispatch]);
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
        <Typography variant="h3" sx={{ mt: "1.5rem" }}>
          Halo {nama}
        </Typography>
        <Typography variant="h3" sx={{ mt: "1.5rem", mb: "1.5rem" }}>
          Sudah Siap Untuk Quiz?
        </Typography>
        <img
          src={Vector}
          alt="hehe"
          style={{ height: "60vh", objectFit: "contain" }}
        />
        <Button
          variant="contained"
          size="large"
          sx={{ mt: "1.5rem" }}
          onClick={() => navigate("/takequiz", { replace: true })}
        >
          Mulai Quiz
        </Button>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
