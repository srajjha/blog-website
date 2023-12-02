import { useEffect, useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

import axios from "axios";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

 useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg "
          alt=" "
        />
        <p>Save the Tree</p>
      </div>
  <div className="sidebarItem">
    <span className="sidebarTitle">CATEGORIES</span>
    <ui className="sidebarList">
        
        {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}

    </ui>
  </div>
  <div className="sidebarItem">
    <span className="sidebarTitle">FOLLOW US</span>
    <div className="sidebarTileSocial">
      
    <i className="sidebarIcon fa-brands fa-facebook-f"></i>
    <i className="sidebarIcon fa-brands fa-instagram"></i>
    <i className="sidebarIcon fa-brands fa-twitter"></i>
    <i className="sidebarIcon fa-brands fa-pinterest"></i>

    </div>
   
  </div>

    </div>
  );
}
