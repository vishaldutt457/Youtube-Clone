import React, { useState }from 'react';
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from "@material-ui/icons/Apps";
import NotificationIcon from '@material-ui/icons/Notifications';
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Header() {
    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className="header">
            <div className="header_left">
            <MenuIcon />
             <Link to="/">
             <img 
            className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt="" 
             />
             </Link>
            </div>
           
            <div className="header_input">
            <input 
            value={inputSearch}
            onChange={e => setInputSearch(e.target.avlue)}
            type="text"
            placeholder="Search" />
            <Link to={`/search/${inputSearch}`}>
            <SearchIcon className="header_inputButton" />
            </Link>
            </div> 
             
            <div className="header_icons">
            <VideoCallIcon className="header_icon"/> 
            <AppsIcon className="header_icon"/>
            <NotificationIcon className="header_icon" />
            <Avatar 
            className="header_icon"
            alt="Jyoti Srivastava"
            src="https://https://www.google.com/search?q=avatar+svg&rlz=1C1RXQR_enIN959IN959&sxsrf=ALeKk03CDGTRpsVXzLACF4r0z68v3GJ6Ag:1625034823134&tbm=isch&source=iu&ictx=1&fir=zGVuWDdvc1fnBM%252CXc4G5PmjIm6B5M%252C_&vet=1&usg=AI4_-kTkMWiswN54VQ3aMriHQzBWrb0HxQ&sa=X&ved=2ahUKEwiBqIW73r7xAhV6yzgGHbsoC9cQ9QF6BAgTEAE&biw=1536&bih=696#imgrc=zGVuWDdvc1fnBM"
            />
            </div>
            
        </div>
    )
}

export default Header;
