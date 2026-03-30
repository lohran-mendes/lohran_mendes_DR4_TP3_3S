import type { Dispatch, SetStateAction } from "react";
import { TicketForm } from "../../components";
import type { DadosPassagem, Passagem } from "../../types";

type BookingProps = {
  passagens: Passagem[];
  setPassagens: Dispatch<SetStateAction<Passagem[]>>;
  passagemDataForUpdate: Passagem | null;
  setPassagemDataForUpdate: Dispatch<SetStateAction<Passagem | null>>;
};

export function Booking({
  passagens,
  setPassagens,
  passagemDataForUpdate,
  setPassagemDataForUpdate,
}: BookingProps) {
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
    <TicketForm
      addNewPassagem={addPassagem}
      updatePassagem={updatePassagem}
      passagemDataForUpdate={passagemDataForUpdate}
    />
  );
}
