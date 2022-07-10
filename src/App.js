import { Link, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <Outlet />
      <nav
        style={{
          borderTop: "solid 1px",
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <br />
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
    </div>
  );
}
