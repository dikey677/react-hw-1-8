import PropTypes from "prop-types";
import {
  ProfileBox,
  Description,
  StatsUL,
  StatsLI,
  Img,
  Name,
  Tag,
  Location,
  Span,
} from "./Profile.styled";

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileBox>
      <Description>
        <Img src={avatar} alt="User avatar" className="avatar" />
        <Name>{username}</Name>
        <Tag className="tag">@{tag}</Tag>
        <Location className="location">{location}</Location>
      </Description>

      <StatsUL>
        <StatsLI>
          <span className="label">Followers</span>
          <Span className="quantity">{stats.followers}</Span>
        </StatsLI>
        <StatsLI>
          <span className="label">Views</span>
          <Span className="quantity">{stats.views}</Span>
        </StatsLI>
        <StatsLI>
          <span className="label">Likes</span>
          <Span className="quantity">{stats.likes}</Span>
        </StatsLI>
      </StatsUL>
    </ProfileBox>
  );
}
