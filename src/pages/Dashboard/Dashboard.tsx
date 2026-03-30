import type { Dispatch, SetStateAction } from "react";
import { TravelList } from "../../components";
import type { Passagem } from "../../types";

type DashboardProps = {
  passagens: Passagem[];
  setPassagens: Dispatch<SetStateAction<Passagem[]>>;
  setPassagemDataForUpdate: Dispatch<SetStateAction<Passagem | null>>;
};

export function Dashboard({
  passagens,
  setPassagens,
  setPassagemDataForUpdate,
}: DashboardProps) {
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

  return (
    <TravelList
      passagens={passagens}
      removePassagem={removePassagem}
      updatePassagem={selectPassagemForUpdate}
    />
  );
}
