import "./styles.css";

type ButtonProps = {
  onClick?: () => void;
  label: string;
  variant?: "success" | "danger" | "warning";
};

export function Button(props: ButtonProps) {
  const { onClick, label, variant } = props;

  const buttonClassName = `app-button${variant ? ` app-button-${variant}` : ""}`;

  return (
    <button onClick={onClick} className={buttonClassName}>
      {label}
    </button>
  );
}
