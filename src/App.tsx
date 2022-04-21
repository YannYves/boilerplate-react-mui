import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Provider } from "./context/Provider";
import Home from "./pages/Home";

function App() {
  return (
    <HashRouter>
        <Provider>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Provider>
    </HashRouter>
  );
}

export default App;
