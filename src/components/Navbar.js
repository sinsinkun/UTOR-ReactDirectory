import { Link } from 'react-router-dom';

function Navbar() {
  return(
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand">
          Employee Directory
        </div>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link active">Home</Link>
          </li>
          <li className="nav-item">
            <a href="https://randomuser.me/" target="blank" className="nav-link">Random User API</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;