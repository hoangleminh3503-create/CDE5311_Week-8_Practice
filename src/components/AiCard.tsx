interface Props {
  children: string;
}

export default function AiCard({ children }: Props) {
  return (
    <aside className="ai-card">
      <p className="ai-card__title">✦ Farmily AI</p>
      <p className="ai-card__text">{children}</p>
    </aside>
  );
}
