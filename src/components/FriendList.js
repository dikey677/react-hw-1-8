import PropTypes from "prop-types";

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((item) => (
        <li key={item.id} className="item">
          <span className="status">{item.isOnline ? "Online" : "Offline"}</span>
          <img
            className="avatar"
            src={item.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{item.name}</p>
        </li>
      ))}
    </ul>
  );
}
