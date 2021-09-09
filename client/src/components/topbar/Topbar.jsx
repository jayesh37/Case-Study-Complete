import React,{useContext,useState} from 'react'
import "./topbar.css";
import { Search } from "@material-ui/icons";
import { Link} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import useUserSearch from "./useUserSearch";

export default function Topbar() {

  const { user,dispatch } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  
  const [query, setQuery] = useState("");
  const { data, loading, error } = useUserSearch(query);

  const [suggestedUsers, setSuggestedUsers] = useState(false);


  const handleLogout = ()=>{
    dispatch({type:"LOGOUT"});
  }

  const handleChange = (e) => {
    setQuery(e.target.value);
    setSuggestedUsers(true);
  };

  return (
    <>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="logo">CaseStudy</h1>
          </Link>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon" />
            <input
              type='search'
              placeholder="Search user"
              className="searchInput"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="topbarRight">
          <Link to={`/profile/${user.username}`}>
            <img
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "person/noAvatar.png"
              }
              alt=""
              className="topbarImg"
            />
          </Link>
          <button className="logout-btn" onClick={handleLogout}>
              Logout
          </button>
        </div>
      </div>
      {suggestedUsers && (
        <div className='found-users'>
          <ul>
            {loading && <p>Loading</p>}
            {error && <p>{error.msg}</p>}
            {data?.map((foundUser) => (
              <li key={foundUser._id}>
                <Link to={`/profile/${foundUser.username}`}>
                  <p>{foundUser.username}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
