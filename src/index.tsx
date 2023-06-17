import ReactDOM from "react-dom";
import "./styles/index.scss";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { store } from "./store";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { Navbar } from "./components/Navbar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000",
    },
    play: {
      main: "#ffffff",
      contrastText: "black",
    },
    moreInfo: {
      main: "#6c6c6e",
      contrastText: "white",
    },
    modal: {
      background: "#181818",
    },
    tonalOffset: 0.2,
  },
  breakpoints: {
    values: {
      xs: 550,
      sm: 800,
      md: 1100,
      lg: 1250,
      xl: 1700,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/browse" />} />
            <Route path="/browse" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
