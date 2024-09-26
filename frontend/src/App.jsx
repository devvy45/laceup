import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Landing from "./page/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sneakers from "./page/Sneakers";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/snkrs" element={<Sneakers />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
