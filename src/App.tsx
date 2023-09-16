import { Route, Routes } from "react-router";
import { HomePage } from "./pages/homepage/HomePage";
import { AboutPage } from "./pages/aboutpage/AboutPage";
import { NavBar } from "./components/navbar/NavBar";
import { EventsPage } from "./pages/eventspage/EventsPage";
import { PartnersPage } from "./pages/partnerspage/PartnersPage";
import { GamesPage } from "./pages/gamespage/EventsPage";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/games" element={<GamesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
