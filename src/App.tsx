import { useState } from "react";
import AddProduct from "./screens/AddProduct";
import ScanningPhoto from "./screens/ScanningPhoto";
import ProductDetails from "./screens/ProductDetails";

type Screen = "add" | "scanning" | "details";

// `?screen=scanning|details` jumps straight to a screen (handy for design review).
function initialScreen(): Screen {
  const param = new URLSearchParams(window.location.search).get("screen");
  return param === "scanning" || param === "details" ? param : "add";
}

export default function App() {
  const [screen, setScreen] = useState<Screen>(initialScreen);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  const choosePhoto = (url: string) => {
    setPhotoUrl(url);
    setScreen("scanning");
  };

  const goBack = () => setScreen("add");

  return (
    <div className="app">
      {screen === "add" && <AddProduct onPhoto={choosePhoto} />}
      {screen === "scanning" && (
        <ScanningPhoto
          photoUrl={photoUrl}
          onBack={goBack}
          onDone={() => setScreen("details")}
        />
      )}
      {screen === "details" && (
        <ProductDetails photoUrl={photoUrl} onBack={goBack} />
      )}
    </div>
  );
}
