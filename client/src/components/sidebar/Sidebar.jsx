import "./sidebar.css";
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar-center">
            <ul className="list">
                <Link to="/"  style={{textDecoration:"inherit",color:"inherit"}}>
                  <li className="list-item">
                      <i className="list-item-icon fas fa-dna"></i>
                      <span className="list-item-text">Daily Cases</span>
                  </li>
                </Link>
                <Link to="/study" style={{textDecoration:"inherit",color:"inherit"}}>
                  <li className="list-item">
                      <i className="list-item-icon fas fa-book-reader"></i>
                      <span className="list-item-text">Study 3d</span>
                  </li>
                </Link>
                <Link to="/study" style={{textDecoration:"inherit",color:"inherit"}}>
                  <li className="list-item">
                      <i className="list-item-icon fas fa-cube"></i>
                      <span className="list-item-text">AR View</span>
                  </li>
                </Link>
                <Link to="/" style={{textDecoration:"inherit",color:"inherit"}}>
                  <li className="list-item">
                      <i className="list-item-icon fab fa-github"></i>
                      <span className="list-item-text">Github</span>
                  </li>
                </Link>
                <Link to="/about" style={{textDecoration:"inherit" ,color:"inherit"}}>
                  <li className="list-item">
                      <i className="list-item-icon fas fa-info-circle"></i>
                      <span className="list-item-text">About</span>
                  </li>
                </Link>
            </ul>
        </div>
        <footer className="footer">Copyright &copy; 2021 Jayesh Kusuma</footer>
    </div>
  );
}
