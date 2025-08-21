import { BrowserRouter, Routes, Route } from "react-router-dom";

import Herro from "./components/Herro";
import Countries from "./components/Countries";


function MyRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Herro />} />

        {/* Countries page */}
        <Route path="/countries" element={<Countries/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRouter;
