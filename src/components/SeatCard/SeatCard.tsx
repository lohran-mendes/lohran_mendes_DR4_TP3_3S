import "./styles.css";

type SeatCardProps = {
  seatNumber: number;
  status: 'disponivel' | 'reservado';
};

export function SeatCard(props: SeatCardProps) {
  return (
    <div className={`seat-card ${props.status}`}>
      <h2>{props.seatNumber}</h2>
    </div>
  );
}
