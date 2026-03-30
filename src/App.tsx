import { useState } from "react";
import { Route, Routes } from "react-router";

import { Booking, Dashboard, Home } from "./pages";
import { mockPassagens } from "./mocks/mock-passagens";
import type { Passagem } from "./types";

import "./App.css";

function App() {
  const [passagens, setPassagens] = useState<Passagem[]>(mockPassagens);
  const [passagemDataForUpdate, setPassagemDataForUpdate] =
    useState<Passagem | null>(null);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/Booking"
        element={
          <Booking
            passagens={passagens}
            setPassagens={setPassagens}
            passagemDataForUpdate={passagemDataForUpdate}
            setPassagemDataForUpdate={setPassagemDataForUpdate}
          />
        }
      />
      <Route
        path="/Dashboard"
        element={
          <Dashboard
            passagens={passagens}
            setPassagens={setPassagens}
            setPassagemDataForUpdate={setPassagemDataForUpdate}
          />
        }
      />
    </Routes>
  );
}

export default App;
