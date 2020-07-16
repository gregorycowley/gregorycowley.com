import Link from "next/link";

/**
 * Page Header Layout
 * @param {*} props 
 */

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuToggle: "hide",
      navClass: "sticky"
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset > 100 && this.state.navClass != "sticky") {
      this.setState({
        navClass: "sticky"
      });
    } else if (window.pageYOffset <= 100 && this.state.navClass === "sticky") {
      this.setState({
        navClass: ""
      });
    }
  }

  toggleMenu() {
    this.setState({
      menuToggle: this.state.menuToggle === "hide" ? "show" : "hide"
    });
  }

  render() {
    return (
      <header className={`${this.props.className}`}>
        <div className="logo-nav-block">
          <div className="logo-block">
            <Link href="/">
              <img src="/icons/gc-logo.svg" className="logo" alt="logo" />
            </Link>
            <Link href="/">
              <h1 className="brand mono">Gregory Cowley</h1>
            </Link>
            <div className="sub-brand mono">Interdisciplinary Maker</div>
          </div>
          <nav
            className={`nav ${this.state.navClass}`}
            role="navigation"
            aria-label="main navigation"
          >
            <ul className={`main-navigation ${this.state.menuToggle}`}>
              <li>
                <Link href="/sitemap">
                  <a>Sitemap</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a>Work</a>
                </Link>
              </li>
              <li>
                <Link href="/resume">
                  <a>CV</a>
                </Link>
              </li>
              <li>
                <Link href="/tools">
                  <a>Tools</a>
                </Link>
              </li>
              <li>
                <Link href="/clients">
                  <a>Clients</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <button className="toggle-navigation" onClick={this.toggleMenu}>
          +
        </button>
      </header> 
    )
  }
}

export default Header;
