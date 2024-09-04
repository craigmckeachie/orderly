function SideBar() {
  return (
    <section
      className="p-4 bg-body-tertiary vh-100 border-end"
      style={{ width: '12rem' }}
    >
      <nav>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a className="nav-link " href="#">
              Orders
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Customers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " aria-disabled="true">
              Companies
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default SideBar;
