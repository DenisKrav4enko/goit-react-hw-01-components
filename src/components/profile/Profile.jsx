import React from 'react';
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
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </ProfileWrapper>
  )
}

export default Profile;