import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Storage/store";
import Login from "./Pages/Login/Login";
import TakeQuiz from "./Pages/TakeQuiz/TakeQuiz";
import Home from "./Pages/Home/Home";
import Result from "./Pages/Result/Result";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/takequiz" exact element={<TakeQuiz />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/result" exact element={<Result />} />
            </Routes>
          </Router>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
