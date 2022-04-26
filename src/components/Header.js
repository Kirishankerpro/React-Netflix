import "../assets/style/Header.css";
import Image from "../assets/img/netflix.webp";

function Header() {
  return (
    <div className="header">
      <div className="container1">
        <h2>
          <img src={Image} alt="logo netflix" />
        </h2>
      </div>
    </div>
  );
}

export default Header;
