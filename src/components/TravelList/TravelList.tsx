import "./styles.css";

import type { Passagem } from "../../types";
import { Button } from "../Button/Button";

type TravelListProps = {
  passagens: Passagem[];
  removePassagem: (id: number) => void;
  updatePassagem: (id: number) => void;
}

export function TravelList(props: TravelListProps) {
  const { passagens, removePassagem, updatePassagem } = props;

  const onRemovePassagem = (id: number) => {
    removePassagem(id);
  }

  const onUpdatePassagem = (id: number) => {
    updatePassagem(id);
  }

  return (
    <div className="travel-list">
      <h2>Lista de Passagens</h2>
      <div className="travel-list-cards">
        {passagens.map((passagem) => (
          <div className="travel-card" key={passagem.id}>
            <h3>{passagem.passageiro}</h3>
            <p>Assento: {passagem.assento}</p>
            <p>Origem: {passagem.origem}</p>
            <p>Destino: {passagem.destino}</p>
            <p>Data: {passagem.data.toLocaleDateString()}</p>
            <p>Status: {passagem.status}</p>
            <div className="travel-card-actions">
              <Button label="Cancelar" variant="danger" onClick={() => onRemovePassagem(passagem.id)}/>
              <Button label="Alterar" variant="warning" onClick={() => onUpdatePassagem(passagem.id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
