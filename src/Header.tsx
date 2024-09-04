function Header() {
  return (
    <header className="container-fluid d-flex justify-content-between py-4 bg-body-tertiary">
      <section className="d-flex gap-2 align-items-center">
        <img src="/logoipsum-245.svg" alt="logo" />
        <span className="brand">Orderly</span>
      </section>
      <section>
        <a className="d-flex gap-2 text-decoration-none link-opacity-75">
          <span>Sign in</span>
        </a>
      </section>
    </header>
  );
}

export default Header;
