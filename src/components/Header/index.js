import logo from "../svg/logo.svg";

const Header = () => {
  const descLogo = "Essa e a logo do Blog";
  return (
    <>
      <header className="flex, flex-space-between">
        <div className="logo">
          <img src={logo} alt={descLogo} />
        </div>
        <div className="search">
          <input type="text" className="input-search" name="search" placeholder="Barra de pesquisa."/>
        </div>
        <div>
          <ul className="menu">
            <li>
              <a href="#" className="nav-link">Categories</a>
            </li>
            <li>
              <a href="#" className="nav-link">About</a>
            </li>
            <li>
              <a href="#" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
