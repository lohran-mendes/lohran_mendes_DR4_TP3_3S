import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";

import { TicketForm, TravelList } from "./components";
import type { DadosPassagem, Passagem } from "./types";
import { BaseLayout } from "./layouts";
import { Home } from "./pages/Home/Home";

const mockPassagens: Passagem[] = [
  {
    id: 1,
    passageiro: "João Silva",
    assento: 17,
    origem: "Brasília",
    destino: "Rio de Janeiro",
    data: new Date("2024-07-15"),
    status: "confirmada",
  },
  {
    id: 2,
    passageiro: "Maria Oliveira",
    assento: 5,
    origem: "Brasília",
    destino: "Salvador",
    data: new Date("2024-08-20"),
    status: "cancelada",
  },
  {
    id: 3,
    passageiro: "Carlos Pereira",
    assento: 12,
    origem: "Brasília",
    destino: "Porto Alegre",
    data: new Date("2024-09-10"),
    status: "pendente",
  },
  {
    id: 4,
    passageiro: "Carlos Pereira",
    assento: 12,
    origem: "Brasília",
    destino: "Porto Alegre",
    data: new Date("2024-09-10"),
    status: "pendente",
  },
  {
    id: 5,
    passageiro: "Carlos Pereira",
    assento: 12,
    origem: "Brasília",
    destino: "Porto Alegre",
    data: new Date("2024-09-10"),
    status: "pendente",
  },
  {
    id: 6,
    passageiro: "Carlos Pereira",
    assento: 12,
    origem: "Brasília",
    destino: "Porto Alegre",
    data: new Date("2024-09-10"),
    status: "pendente",
  },
];

function App() {
  const [passagens, setPassagens] = useState<Passagem[]>(mockPassagens);
  const [passagemDataForUpdate, setPassagemDataForUpdate] =
    useState<Passagem | null>(null);

  const addPassagem = (dadosPassagem: DadosPassagem) => {
    const isDuplicateAssento = passagens.some(
      (passagens) => passagens.assento === dadosPassagem.assento,
    );

    if (isDuplicateAssento) {
      alert(
        `O assento ${dadosPassagem.assento} já está reservado. Por favor, escolha outro assento.`,
      );
      return;
    }

    setPassagens((prevPassagens) => [
      ...prevPassagens,
      {
        id: prevPassagens.length + 1,
        passageiro: dadosPassagem.passageiro,
        assento: dadosPassagem.assento,
        destino: dadosPassagem.destino,
        origem: "Brasília",
        data: new Date(),
        status: "pendente",
      },
    ]);

    console.log("Dados da nova passagem:", dadosPassagem);
  };

  const removePassagem = (id: number) => {
    setPassagens((prevPassagens) =>
      prevPassagens.filter((passagem) => passagem.id !== id),
    );
  };

  const selectPassagemForUpdate = (id: number) => {
    setPassagemDataForUpdate(
      passagens.find((passagem) => passagem.id === id) || null,
    );
  };

  const updatePassagem = (dadosPassagem: DadosPassagem) => {
    if (!passagemDataForUpdate) {
      return;
    }

    const isDuplicateAssento = passagens.some(
      (passagem) =>
        passagem.id !== passagemDataForUpdate.id &&
        passagem.assento === dadosPassagem.assento,
    );

    if (isDuplicateAssento) {
      alert(
        `O assento ${dadosPassagem.assento} já está reservado. Por favor, escolha outro assento.`,
      );
      return;
    }

    setPassagens((prevPassagens) =>
      prevPassagens.map((passagem) =>
        passagem.id === passagemDataForUpdate.id
          ? {
              ...passagem,
              passageiro: dadosPassagem.passageiro,
              assento: dadosPassagem.assento,
              destino: dadosPassagem.destino,
            }
          : passagem,
      ),
    );

    setPassagemDataForUpdate(null);
  };

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
            <TicketForm
              addNewPassagem={addPassagem}
              updatePassagem={updatePassagem}
              passagemDataForUpdate={passagemDataForUpdate}
            />
          </BaseLayout>
        }
      />
      <Route
        path="/Dashboard"
        element={
          <BaseLayout>
            <TravelList
              passagens={passagens}
              removePassagem={removePassagem}
              updatePassagem={selectPassagemForUpdate}
            />
          </BaseLayout>
        }
      />
      <Route
        path="/teste"
        element={
          <BaseLayout>
            <h1>Teste</h1>
          </BaseLayout>
        }
      />
    </Routes>
  );
}

export default App;
