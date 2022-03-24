import PropTypes from "prop-types";
import { UL, LI, Online, Offline, Name, Img } from "./FriendList.styled";

export default function FriendList({ friends }) {
  return (
    <UL className="friend-list">
      {friends.map((item) => (
        <LI key={item.id} className="item">
          <span className="status">
            {item.isOnline ? <Online /> : <Offline />}
          </span>
          <Img
            className="avatar"
            src={item.avatar}
            alt="User avatar"
            width="48"
          />
          <Name className="name">{item.name}</Name>
        </LI>
      ))}
    </UL>
  );
}
