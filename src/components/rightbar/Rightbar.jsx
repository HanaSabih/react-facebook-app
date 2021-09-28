import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Lebanon</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Photos</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="https://picsum.photos/200/300?random=11"
              alt=""
              className="rightbarFollowingImg"
            />
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://picsum.photos/200/300?random=12"
              alt=""
              className="rightbarFollowingImg"
            />
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://picsum.photos/200/300?random=13"
              alt=""
              className="rightbarFollowingImg"
            />
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://picsum.photos/200/300?random=14"
              alt=""
              className="rightbarFollowingImg"
            />
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://picsum.photos/200/300?random=15"
              alt=""
              className="rightbarFollowingImg"
            />
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://picsum.photos/200/300?random=16"
              alt=""
              className="rightbarFollowingImg"
            />
          </div>
        </div>
        <h4 className="rightbarTitle">Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Hazael Phineus</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://cdn.pixabay.com/photo/2016/01/19/17/48/woman-1149911_960_720.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Rebeka Svitlana</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Ganesha Kallinikos</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_960_720.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Iskra Lorrie</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_960_720.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jago Sithembile</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680_960_720.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Tibby Linnet</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
