import React from 'react';
import './styles.css';

const FriendList = props => {
  const {friends} = props;

  return (
    <ul className='friends'>
      {friends.map(item => (
        <li
          key={item.id}
          className="item"
        >
          {item.isOnline
            ? <span
              style={{ backgroundColor: '#55AB56' }}
              className="status"
            ></span>
            : <span
              style={{ backgroundColor: '#F9564C' }}
              className="status"
            ></span>
          }
          <img
            src={item.avatar}
            alt="User avatar"
            width="48"
            className="avatar"
          />
          <p className="name">{item.name}</p>
        </li>
      ))}
    </ul>
  )
}

export default FriendList;