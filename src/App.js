import React from 'react';
import StepperForm from './user/create/stepperForm';
import View from './user/viewUser/view'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StepperForm />} />
          <Route path="/view" element={<View />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
