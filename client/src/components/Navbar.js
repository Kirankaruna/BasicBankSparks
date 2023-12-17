import { NavLink } from 'react-router-dom';

const NavBar = () => {
 return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
        <p className="navbar-brand">Basic Bank</p>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
             <NavLink  className="nav-link ms-5 " to="/customers">All Customers</NavLink>
             <NavLink  className="nav-link ms-5 me-5" to="/transactions">All Transactions</NavLink>
        </div>
        </div>
    </div>
    </nav>


    
 );
};

export default NavBar;