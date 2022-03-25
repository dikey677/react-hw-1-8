import PropTypes from "prop-types";
import { UL, LI, StatusOnline, Name, Img } from "./FriendList.styled";

export default function FriendList({ friends }) {
  return (
    <UL>
      {friends.map((item) => (
        <LI key={item.id}>
          <StatusOnline eventType={item.isOnline} />
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

// <span>{item.isOnline ? <Online /> : <Offline />}</span>
