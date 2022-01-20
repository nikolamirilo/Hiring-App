import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home, Login, Error } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<Home />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default App;
