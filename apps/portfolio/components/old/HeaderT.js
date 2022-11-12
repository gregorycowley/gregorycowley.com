import Link from "next/link";

export default function HeaderT(props) {

  return (
    <header className={`header ${props.className}`}>
      <Link href="/" legacyBehavior>
        <img src="/icons/gc-logo-opt-5.svg" className="logo" alt="logo" />
      </Link>
      <nav className="nav" role="navigation" aria-label="main navigation">
        <Link href="/" legacyBehavior>
          <h1>
            Testsite
          </h1>
        </Link>
        <h2>Artist Gregory Cowley b.1970</h2>
        <ul>
          <li>
            <Link href="/about">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              PROJECT
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              BIO
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              CV
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
