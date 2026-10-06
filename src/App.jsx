import { Routes, Route } from "react-router";

function Home() {
  return <h1>Atharva Penkar</h1>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}