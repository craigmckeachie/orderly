import { NavLink } from 'react-router-dom';

function SideBar() {
  return (
    <section
      className="px-4 py-5 bg-body-tertiary vh-100 border-end"
      style={{ width: '16rem' }}
    >
      <nav>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <NavLink className="nav-link " to="/orders">
              Orders
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/products">
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/customers">
              Customers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/companies">
              Companies
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default SideBar;
