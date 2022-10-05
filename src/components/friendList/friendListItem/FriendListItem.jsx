import React from 'react';
import PropTypes from 'prop-types';
import {
  Item,
  Status,
  Avatar,
  Name,
} from './StyledComponents';

const FriendListItem = props => {
  const { item } = props;
  const {
    name,
    avatar,
    isOnline,
  } = item;

  return (
    <Item>
      {isOnline
        ? <Status style={{ backgroundColor: '#55AB56' }}/>
        : <Status style={{ backgroundColor: '#F9564C' }}/>
      }
      <Avatar
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <Name>
        {name}
      </Name>
    </Item>
  )
}

FriendListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;