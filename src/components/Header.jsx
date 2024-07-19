import BcgImage from "../UI/BcgImage";
import H1 from "./Headers/H1";

function Header() {
  return (
    <header>
      <BcgImage></BcgImage>
      <H1>
        Мой <span className="first-heading--thin">заголовок</span>
      </H1>
    </header>
  );
}

export default Header;
