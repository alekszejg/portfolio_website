import {BrowserRouter, Routes, Route} from "react-router-dom";
import AboutPage from "./Pages/myCV";
import MyProjects from "./Pages/projects";
import BotProjectPage from './Components/Portfolio/botProjectPage';
import ThisWebsiteProjectPage from './Components/Portfolio/thisWebsiteProjectPage';
import ContactForm from "./Pages/contact";
import './Styling/index.scss';

export default function App() {
  return (
    <div className="App">
      <script src="https://kit.fontawesome.com/4c6d9ff94d.js" crossOrigin="anonymous"></script>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route index element={<AboutPage />} />
            <Route path="/about-me" element={<AboutPage />} />
            <Route path="/projects" element={<MyProjects />} />
            <Route path="/projects/discord-bot" element={<BotProjectPage />} />
            <Route path="/projects/this-website" element={<ThisWebsiteProjectPage />} />
            <Route path="/contact" element={<ContactForm />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}


