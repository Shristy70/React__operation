import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import BuyTicket from "./components/BuyTicket";
import Layout from "./Layout";
import Display from "./components/Display";
import Search from "./components/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/buyticket" element={<BuyTicket />} />
            <Route path="/search" element={<Search />} />
            
            <Route path="/display" element={<Display />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
