import React from 'react';
import './styles.css';

const Statistics = props => {
  const {
    stats,
    title,
  } = props;
  const colors = ['#83F03C', '#CF5FD3', '#FF5F00', '#F43D6B', '#58E000', '#A101A6', '#FF8740', '#AE2C4C'];

  const getRandomColor = () => {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
  }

  return (
    <section className="statistics">
      {title.length
        ? <h2 className="title">{title.toUpperCase()}</h2>
        : <></>
      }
      <ul className="stat-list">
        {stats.map(item => (
          <li
            key={item.id}
            style={{ backgroundColor: getRandomColor() }}
            className="item"
          >
            <span className="label">
              {item.label}
            </span>
            <span className="percentage">
              {item.percentage}
            </span>
          </li>
          ))
        }
      </ul>
    </section>
  )
}

export default Statistics;