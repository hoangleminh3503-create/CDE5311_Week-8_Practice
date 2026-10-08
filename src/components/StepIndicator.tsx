interface Props {
  label: string;
  /** Fill of the progress bar, 0-100. Values are taken from the Figma frames. */
  percent: number;
}

export default function StepIndicator({ label, percent }: Props) {
  return (
    <div className="step-indicator">
      <p className="step-indicator__label">{label}</p>
      <div className="step-indicator__bar-inset">
        <div
          className="step-indicator__track"
          role="progressbar"
          aria-label={label}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(percent)}
        >
          <div
            className="step-indicator__fill"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
