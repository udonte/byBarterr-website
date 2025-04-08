import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "@/pages/Website/Home";
import WebsiteLayout from "./components/common/WebsiteLayout";
import FAQPage from "@/pages/Website/FAQPage";
import Contact from "@/pages/Website/Contact";
import About from "@/pages/Website/About";
import WaitingList from "@/pages/Website/WaitingList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Home />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/waiting-list" element={<WaitingList />} />
      </Routes>
    </Router>
  );
};

export default App;
