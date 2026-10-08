interface Props {
  disabled: boolean;
  onContinue?: () => void;
}

// Disabled = Primary at 40% (from Figma). Enabled = solid Primary (inferred, not in Figma).
export default function ContinueFooter({ disabled, onContinue }: Props) {
  return (
    <footer className="footer">
      <button
        type="button"
        className="continue-button"
        disabled={disabled}
        onClick={onContinue}
      >
        Continue
      </button>
    </footer>
  );
}
