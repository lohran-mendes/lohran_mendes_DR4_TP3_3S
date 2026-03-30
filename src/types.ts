export interface Passagem {
  id: number;
  passageiro: string;
  assento: number;
  origem: string;
  destino: string;
  data: Date;
  status: 'confirmada' | 'pendente' |  'cancelada';
}

export interface DadosPassagem {
  passageiro: string;
  assento: number;
  destino: string;
};