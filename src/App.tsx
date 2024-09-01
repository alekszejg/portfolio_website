import {BrowserRouter, Routes, Route} from "react-router-dom";
import MyCV from "./Pages/myCV";
import MyProjects from "./Pages/projects";
import BotProjectPage from './Pages/Portfolio/discordBot';
import ThisWebsiteProjectPage from './Pages/Portfolio/thisWebsite';
import ContactForm from "./Pages/contact";

export default function App() {
  return (
    <div className="App">
      <script src="https://kit.fontawesome.com/4c6d9ff94d.js" crossOrigin="anonymous" />
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<MyCV />} />
            <Route index element={<MyCV />} />
            <Route path="/about-me" element={<MyCV />} />
            <Route path="/projects" element={<MyProjects />} />
            <Route path="/projects/discord-bot" element={<BotProjectPage />} />
            <Route path="/projects/portfolio-website" element={<ThisWebsiteProjectPage />} />
            <Route path="/contact" element={<ContactForm />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}


