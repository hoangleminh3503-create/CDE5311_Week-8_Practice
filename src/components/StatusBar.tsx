import statusIcons from "../assets/status-icons.svg";

// Decorative iOS chrome from the Figma frames.
export default function StatusBar() {
  return (
    <div className="status-bar" aria-hidden="true">
      <span className="status-bar__time">9:41</span>
      <span className="status-bar__island" />
      <span className="status-bar__icons">
        <img src={statusIcons} alt="" />
      </span>
    </div>
  );
}
