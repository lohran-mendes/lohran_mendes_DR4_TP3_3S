import { useState } from "react";
import { Route, Routes } from "react-router";

import { BaseLayout } from "./layouts";
import { Booking, Dashboard, Home } from "./pages";
import { mockPassagens } from "./mock";
import type { Passagem } from "./types";

import "./App.css";

function App() {
  const [passagens, setPassagens] = useState<Passagem[]>(mockPassagens);
  const [passagemDataForUpdate, setPassagemDataForUpdate] =
    useState<Passagem | null>(null);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <BaseLayout>
            <Home />
          </BaseLayout>
        }
      />
      <Route
        path="/Booking"
        element={
          <BaseLayout>
            <Booking
              passagens={passagens}
              setPassagens={setPassagens}
              passagemDataForUpdate={passagemDataForUpdate}
              setPassagemDataForUpdate={setPassagemDataForUpdate}
            />
          </BaseLayout>
        }
      />
      <Route
        path="/Dashboard"
        element={
          <BaseLayout>
            <Dashboard
              passagens={passagens}
              setPassagens={setPassagens}
              setPassagemDataForUpdate={setPassagemDataForUpdate}
            />
          </BaseLayout>
        }
      />
    </Routes>
  );
}

export default App;
