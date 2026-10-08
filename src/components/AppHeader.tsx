import backArrow from "../assets/back-arrow.svg";

interface Props {
  title: string;
  onBack?: () => void;
}

export default function AppHeader({ title, onBack }: Props) {
  return (
    <header className="app-header">
      <button
        type="button"
        className="app-header__back"
        onClick={onBack}
        disabled={!onBack}
        aria-label="Back"
      >
        <img src={backArrow} alt="" />
      </button>
      <h1 className="app-header__title">{title}</h1>
    </header>
  );
}
