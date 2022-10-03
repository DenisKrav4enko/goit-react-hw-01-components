import React from 'react';
import PropTypes from 'prop-types';
import {
  Friends,
  Item,
  Status,
  Avatar,
  Name,
} from './StyledComponents';

const FriendList = props => {
  const {friends} = props;

  return (
    <Friends>
      {friends.map(item => (
      <Item key={item.id}>
        {item.isOnline
          ? <Status style={{ backgroundColor: '#55AB56' }}/>
          : <Status style={{ backgroundColor: '#F9564C' }}/>
        }
        <Avatar
          src={item.avatar}
          alt="User avatar"
          width="48"
        />
        <Name>
          {item.name}
        </Name>
      </Item>
      ))}
    </Friends>
  )
}

FriendList.propTypes = {
  friends: PropTypes.array
};

export default FriendList;