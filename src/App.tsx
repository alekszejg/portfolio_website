import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "Pages/homepage";
import MyCV from "./Pages/myCV";
import MyProjects from "./Pages/projects";
import BotProjectPage from './Pages/Projects/discordBot';
import ThisWebsiteProjectPage from './Pages/Projects/thisWebsite';
import ContactForm from "./Pages/contact";

export default function App() {
  return (
    <div className="App">
      <script src="https://kit.fontawesome.com/4c6d9ff94d.js" crossOrigin="anonymous" />
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route index element={<Homepage />} />
            <Route path="/cv" element={<MyCV />} />
            <Route path="/projects" element={<MyProjects />} />
            <Route path="/projects/discord-bot" element={<BotProjectPage />} />
            <Route path="/projects/portfolio-website" element={<ThisWebsiteProjectPage />} />
            <Route path="/contact" element={<ContactForm />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}


