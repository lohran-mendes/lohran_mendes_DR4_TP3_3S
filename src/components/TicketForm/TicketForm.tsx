import { useEffect, useState, type SubmitEvent } from "react";

import "./styles.css";
import type { DadosPassagem } from "../../types";

type TicketFormProps = {
  addNewPassagem: (dados: DadosPassagem) => void;
  updatePassagem: (dados: DadosPassagem) => void;
  passagemDataForUpdate?: DadosPassagem | null;
};

export function TicketForm({ addNewPassagem, updatePassagem, passagemDataForUpdate }: TicketFormProps) {
  const [passageiro, setPassageiro] = useState(passagemDataForUpdate?.passageiro || "");
  const [assento, setAssento] = useState<number | "">(passagemDataForUpdate?.assento || "");
  const [destino, setDestino] = useState(passagemDataForUpdate?.destino || "");
  const [buttonText, setButtonText] = useState("Reservar Assento");

  useEffect(() => {
    if (passagemDataForUpdate) {
      setPassageiro(passagemDataForUpdate.passageiro);
      setAssento(passagemDataForUpdate.assento);
      setDestino(passagemDataForUpdate.destino);
      setButtonText("Atualizar Passagem");
    } else {
      setPassageiro("");
      setAssento("");
      setDestino("");
      setButtonText("Reservar Assento");
    }

  }, [passagemDataForUpdate]);

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (assento === "") {
      alert("Por favor, preencha o campo de assento.");
      return;
    }

    const dadosPassagem: DadosPassagem = {
      passageiro,
      assento,
      destino,
    };

    setAssento("");
    setDestino("");
    setPassageiro("");
    if (passagemDataForUpdate) {
      updatePassagem(dadosPassagem);
    } else {
      addNewPassagem(dadosPassagem);
    }
  };

  return (
    <form className="ticket-form" onSubmit={(e) => handleSubmit(e)}>
      <h2 className="ticket-form-title">Reserva de Assento</h2>

      <label className="ticket-form-field">
        Passageiro:
        <input
          required={true}
          type="text"
          value={passageiro}
          onChange={(e) => setPassageiro(e.target.value)}
          placeholder="Nome completo"
        />
      </label>

      <label className="ticket-form-field">
        Assento:
        <input
          required={true}
          type="number"
          min={0}
          max={40}
          value={assento}
          onChange={(e) => setAssento(Number(e.target.value))}
          placeholder="Ex: 17"
        />
      </label>

      <label className="ticket-form-field">
        Destino:
        <input
          required={true}
          type="text"
          value={destino}
          onChange={(e) => setDestino(e.target.value)}
          placeholder="Cidade de destino"
        />
      </label>

      <button className="ticket-form-button" type="submit">
        {buttonText}
      </button>
    </form>
  );
}
