import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Hotel from "./views/hotel/Hotel";
import MainPage from "./views/mainPage/MainPage";
import Record from "./views/record/Record";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/hotels" element={<Record/>}/>
      <Route path="/hotels/:id" element={<Hotel/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
