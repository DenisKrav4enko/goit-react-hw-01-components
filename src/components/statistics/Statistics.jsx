import React from 'react';
import PropTypes from 'prop-types';
import {
  Item,
  Title,
  Label,
  StatList,
  StatisticsWrapper,
  Percentage,
} from './StyledComponents';

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
    <StatisticsWrapper>
      {title.length
        ? <Title>{title.toUpperCase()}</Title>
        : <></>
      }
      <StatList>
        {stats.map(item => (
          <Item
            key={item.id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <Label>
              {item.label}
            </Label>
            <Percentage>
              {item.percentage}
            </Percentage>
          </Item>
          ))
        }
      </StatList>
    </StatisticsWrapper>
  )
}

Statistics.propTypes = {
  stats: PropTypes.array,
  title: PropTypes.string,
};

export default Statistics;