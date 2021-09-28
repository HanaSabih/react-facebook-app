import './topbar.css';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">FCEBOOK</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">9</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">32</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">25</span>
          </div>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2015/09/02/13/24/girl-919048_960_720.jpg"
          alt=""
          className="topbarImg"
        />
      </div>
    </div>
  );
}
