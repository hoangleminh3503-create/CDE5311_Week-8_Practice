import { useId, useState } from "react";
import StatusBar from "../components/StatusBar";
import AppHeader from "../components/AppHeader";
import StepIndicator from "../components/StepIndicator";
import FieldInput from "../components/FieldInput";
import ContinueFooter from "../components/ContinueFooter";
import uploadedPhoto from "../assets/uploaded-photo.png";

interface Props {
  photoUrl: string | null;
  onBack: () => void;
}

// Values are the sample content shown in the Figma frame.
const INITIAL_FIELDS = [
  { key: "category", label: "CATEGORY", value: "Dairy" },
  { key: "name", label: "PRODUCT NAME", value: "Fresh Goat Milk" },
  { key: "ingredients", label: "INGREDIENTS", value: "Goat Milk" },
  { key: "allergens", label: "ALLERGENS", value: "Caseins, Whey Proteins" },
  { key: "quantity", label: "QUANTITY", value: "500ml" },
  { key: "price", label: "PRICE", value: "$8.00" },
];

export default function ProductDetails({ photoUrl, onBack }: Props) {
  const [fields, setFields] = useState(INITIAL_FIELDS);
  const [verified, setVerified] = useState(false);
  const checkId = useId();

  const update = (key: string, value: string) =>
    setFields((prev) => prev.map((f) => (f.key === key ? { ...f, value } : f)));

  return (
    <>
      <StatusBar />
      <AppHeader title="Product Details" onBack={onBack} />
      <StepIndicator label="Product Details · Step 2 of 8" percent={20} />

      <main className="screen-body screen-body--form">
        <div className="product-identity">
          <img
            className="product-identity__photo"
            src={photoUrl ?? uploadedPhoto}
            alt="Uploaded product"
          />
          <div className="product-identity__text">
            <p className="product-identity__farm">Green Valley Farm</p>
            <p className="product-identity__hint">
              Check and edit your product information.
            </p>
          </div>
        </div>

        {fields.map((f) => (
          <FieldInput
            key={f.key}
            label={f.label}
            value={f.value}
            onChange={(v) => update(f.key, v)}
          />
        ))}

        <div className="verification">
          <label className="verification__row" htmlFor={checkId}>
            <input
              id={checkId}
              type="checkbox"
              className="verification__box"
              checked={verified}
              onChange={(e) => setVerified(e.target.checked)}
            />
            <span>I’ve checked ingredients and allergens</span>
          </label>
          <p className="verification__hint">
            A photo can’t confirm ingredients or allergens. Please check these
            before continuing.
          </p>
        </div>
      </main>

      <ContinueFooter disabled={!verified} />
    </>
  );
}
