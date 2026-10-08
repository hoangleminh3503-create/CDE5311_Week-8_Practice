import { useEffect } from "react";
import StatusBar from "../components/StatusBar";
import AppHeader from "../components/AppHeader";
import StepIndicator from "../components/StepIndicator";
import AiCard from "../components/AiCard";
import tomatoes from "../assets/tomatoes.png";

interface Props {
  photoUrl: string | null;
  onBack: () => void;
  onDone: () => void;
}

const SCAN_DURATION_MS = 3000; // placeholder: no real AI call in the prototype

export default function ScanningPhoto({ photoUrl, onBack, onDone }: Props) {
  useEffect(() => {
    const id = window.setTimeout(onDone, SCAN_DURATION_MS);
    return () => window.clearTimeout(id);
  }, [onDone]);

  return (
    <>
      <StatusBar />
      <AppHeader title="Add Product" onBack={onBack} />
      <StepIndicator label="Add Product · Step 1 of 8" percent={13.5} />

      <main className="screen-body">
        <div className="scan-preview">
          <img
            className="scan-preview__image"
            src={photoUrl ?? tomatoes}
            alt="Your product photo"
          />
          <span className="scan-preview__badge">✦ AI</span>
          <span className="scan-preview__sparkle scan-preview__sparkle--lg" />
          <span className="scan-preview__sparkle scan-preview__sparkle--sm" />
          <span className="scan-preview__line" />
          <span className="scan-preview__corner scan-preview__corner--tl" />
          <span className="scan-preview__corner scan-preview__corner--tr" />
          <span className="scan-preview__corner scan-preview__corner--bl" />
          <span className="scan-preview__corner scan-preview__corner--br" />
        </div>

        <div className="scan-status" role="status">
          <p className="scan-status__title">Reading your photo…</p>
          <div className="scan-status__dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>

        <AiCard>
          AI is extracting product details. You'll review everything next.
        </AiCard>
      </main>
    </>
  );
}
