import { Card, Container, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Result() {
  const { quiz } = useSelector((state) => state.quiz);

  const totalLength = quiz.length;
  const answered = quiz.filter((question) => question.answered).length;
  const correctAnswered = quiz.filter(
    (question) => question.answered === question.correct_answer
  ).length;
  const wrongAnswered = quiz.filter(
    (question) =>
      question.answered && question.answered !== question.correct_answer
  ).length;
  const score = (correctAnswered / totalLength) * 100;

  const navigate = useNavigate();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Card sx={{ m: "1rem", p: "1.5rem 1rem" }}>
        <Typography variant="h5">Benar</Typography>
        <Typography variant="h5">{correctAnswered}</Typography>
      </Card>
      <Card sx={{ m: "1rem", p: "1.5rem 1rem" }}>
        <Typography variant="h5">Salah</Typography>
        <Typography variant="h5">{wrongAnswered}</Typography>
      </Card>
      <Card sx={{ m: "1rem", p: "1.5rem 1rem" }}>
        <Typography variant="h5">Terjawab</Typography>
        <Typography variant="h5">{answered}</Typography>
      </Card>
      <Card sx={{ m: "1rem", p: "1.5rem 1rem" }}>
        <Typography variant="h5">Skor</Typography>
        <Typography variant="h5">{score}</Typography>
      </Card>
      <Button onClick={() => navigate("/", { replace: true })}>Kembali</Button>
    </Container>
  );
}
