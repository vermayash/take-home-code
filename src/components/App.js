import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Weather from "./Weather";
import NotFound404 from "./NotFound404";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Weather />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
