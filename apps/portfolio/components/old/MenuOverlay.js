import Link from "next/link";

class MenuOverlay extends React.Component{
  constructor(props) {
    super(props)
    this.state = {menuToggle: 'hide'}
    this.toggle = this.toggle.bind(this);
  }

  toggle () {
    console.log('toggling...');
    this.setState({
      menuToggle : (this.state.menuToggle === 'hide') ? 'show' : 'hide'
    });
  };

  render() {
    return <>
      <div className={`mobile-menu menu-overlay ${this.state.menuToggle}`}>
        <nav className="menu-overlay-nav">
          <div className="close-btn">
            <Link href="/">CLOSE</Link>
          </div>
          <Link href="/" legacyBehavior>
            <div>
              <img src="/icons/gc-logo-opt-5.svg" className="logo" alt="logo" />
              <h3>Title</h3>
            </div>
          </Link>
          <ul>
            <li>
              <Link href="/">Item 1</Link>
            </li>
            <li>
              <Link href="/">Item 2</Link>
            </li>
            <li>
              <Link href="/">Item 3</Link>
            </li>
            <li>
              <Link href="/">Item 4</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="mobile-menu-toggle">
        <a onClick={this.toggle}><i class="menu-icon">^</i></a>
      </div>
    </>;
  }
};

export default MenuOverlay;
