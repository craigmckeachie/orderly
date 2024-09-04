function Header() {
  return (
    <header className="container-fluid d-flex justify-content-between py-4 bg-body-tertiary border-bottom">
      <section className="d-flex gap-2 align-items-center">
        <img src="/logoipsum-245.svg" alt="logo" />
        <span className="brand">Orderly</span>
      </section>
      <section>
        <a className="btn btn-outline-primary">
          <span>Sign in</span>
        </a>
      </section>
    </header>
  );
}

export default Header;
