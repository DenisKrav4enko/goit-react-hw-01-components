import React from 'react';
import PropTypes from 'prop-types';
import {
  Tag,
  Name,
  Stats,
  Label,
  Avatar,
  ProfileWrapper,
  Quantity,
  Location,
  StatsItem,
  Description,
} from './StyledComponenst';

const Profile = props => {
  const { userData } = props;
  const {
    tag,
    stats,
    avatar,
    username,
    location,
  } = userData;
  const {
    views,
    likes,
    followers,
  } = stats;

  return (
    <ProfileWrapper>
      <Description>
        <Avatar
          src={avatar}
          alt="User avatar"
        />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </Stats>
    </ProfileWrapper>
  )
}

Profile.propTypes = {
  tag: PropTypes.string,
  stats: PropTypes.object,
  views: PropTypes.number,
  likes: PropTypes.number,
  avatar: PropTypes.string,
  username: PropTypes.string,
  location: PropTypes.string,
  userData: PropTypes.object,
  followers: PropTypes.number
};

export default Profile;