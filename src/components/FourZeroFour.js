import { useLocation } from "react-router-dom";

export function FourZeroFour() {
  let location = useLocation();
  return (
    <div>
      <h1>
        No match for <code>{location.pathname}</code>
      </h1>
    </div>
  );
}
