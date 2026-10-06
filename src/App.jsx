import { Routes, Route } from "react-router";
import SiteHeader from "./components/site_header/siteHeader.jsx";
import SiteFooter from "./components/site_footer/siteFooter.jsx";
import Home from "./pages/home.jsx";

export default function App() {
  return (
    <div className="container">
      <SiteHeader />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <SiteFooter />
    </div>
  );
}
