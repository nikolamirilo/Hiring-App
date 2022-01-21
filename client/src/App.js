import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home, Login, Error } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/developers" element={<Home />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default App;
