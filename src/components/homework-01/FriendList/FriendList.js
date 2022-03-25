import PropTypes from "prop-types";
import { UL, LI, Online, Offline, Name, Img } from "./FriendList.styled";

export default function FriendList({ friends }, status) {
  return (
    <UL>
      {friends.map((item, status) => (
        <LI key={item.id} status={item.isOnline}>
          <span>{item.isOnline ? <Online /> : <Offline />}</span>
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

// {item.isOnline ? <Online /> : <Offline />}
