import { useEffect } from "react";
import { Routes, Route } from "react-router";
import SiteHeader from "./components/site_header/siteHeader.jsx";
import SiteFooter from "./components/site_footer/siteFooter.jsx";
import Home from "./pages/home.jsx";
import NotFound from "./pages/notFound.jsx"
import { enableHistoryScroll } from "./utils/scrollTo.js";

export default function App() {
  useEffect(() => enableHistoryScroll(), []);

  return (
    <div className="container">
      <SiteHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <SiteFooter />
    </div>
  );
}