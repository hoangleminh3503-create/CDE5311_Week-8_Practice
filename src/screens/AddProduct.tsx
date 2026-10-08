import { useRef, type ChangeEvent } from "react";
import StatusBar from "../components/StatusBar";
import AppHeader from "../components/AppHeader";
import StepIndicator from "../components/StepIndicator";
import AiCard from "../components/AiCard";
import ContinueFooter from "../components/ContinueFooter";
import cameraIcon from "../assets/camera-icon.svg";

interface Props {
  onPhoto: (url: string) => void;
}

export default function AddProduct({ onPhoto }: Props) {
  const cameraInput = useRef<HTMLInputElement>(null);
  const uploadInput = useRef<HTMLInputElement>(null);

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onPhoto(URL.createObjectURL(file));
    e.target.value = "";
  };

  return (
    <>
      <StatusBar />
      <AppHeader title="Add Product" />
      <StepIndicator label="Add Product · Step 1 of 8" percent={13.5} />

      <main className="screen-body">
        <div className="upload-zone">
          <div className="upload-zone__icon">
            <img src={cameraIcon} alt="" />
          </div>
          <p className="upload-zone__hint">
            Take a clear photo of your product and its packaging
          </p>
        </div>

        <div className="button-row">
          <button
            type="button"
            className="outline-button"
            onClick={() => cameraInput.current?.click()}
          >
            Take a photo
          </button>
          <button
            type="button"
            className="outline-button"
            onClick={() => uploadInput.current?.click()}
          >
            Upload a photo
          </button>
        </div>

        <AiCard>We'll read your photo and fill in the details.</AiCard>

        <input
          ref={cameraInput}
          type="file"
          accept="image/*"
          capture="environment"
          hidden
          onChange={handleFile}
        />
        <input
          ref={uploadInput}
          type="file"
          accept="image/*"
          hidden
          onChange={handleFile}
        />
      </main>

      <ContinueFooter disabled />
    </>
  );
}
