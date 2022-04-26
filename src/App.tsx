import { CssBaseline } from "@mui/material";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Provider } from "./context/Provider";
import Home from "./pages/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Item from "./pages/Item";

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Provider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/item/:card' element={<Item />} />
          </Routes>
        </Provider>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
