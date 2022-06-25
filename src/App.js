import { Home } from "./Pages/Home";
import { Profile } from "./Pages/Profile";
import { Navbar } from "./components/Navbar";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:userName" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
