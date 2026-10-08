import { useId } from "react";

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export default function FieldInput({ label, value, onChange }: Props) {
  const id = useId();
  return (
    <div className="field">
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className="field__input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
