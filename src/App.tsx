import { BrowserRouter, Routes, Route } from "react-router-dom";
import PitchDeck from './components/PitchDeck';
import Artists from './pages/Artists';
import Investors from './pages/Investors';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PitchDeck />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/investors" element={<Investors />} />
      </Routes>
    </BrowserRouter>
  );
}