import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./components/Routes";

import Home from "./view/Home";
import NotFound from "./view/NotFound";

function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
