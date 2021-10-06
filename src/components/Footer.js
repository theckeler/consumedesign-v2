import "../css/footer.min.css";
import { ReactComponent as Logo } from "../images/logo.svg";
import Icons from "./Icons";

export function Footer({ logoDisplay, scrollingDoc }) {
  return (
    <footer className={scrollingDoc ? "scrolling" : ""}>
      <div className="flex">
        <div className="logo">
          <Logo />
        </div>
        <Icons />
      </div>
      <div>
        <strong>V2:</strong> Made with React/SASS/React deployed on Vercel using
        a headless WordPress.
      </div>
    </footer>
  );
}
