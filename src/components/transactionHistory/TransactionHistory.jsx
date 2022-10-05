import React from 'react';
import PropTypes from 'prop-types';
import {
  Item,
  TableHead,
  ToHorizon,
  ItemColumn,
  TableHeadWrapper,
  TableBodyWrapper,
  TransactionHistoryWrapper,
} from './StyledComponents';

const TransactionHistory = props => {
  const { transactionItems } = props;

  return (
    <TransactionHistoryWrapper>
      <TableHead>
        <TableHeadWrapper>
          <ToHorizon>Type</ToHorizon>
          <ToHorizon>Amount</ToHorizon>
          <ToHorizon>Currency</ToHorizon>
        </TableHeadWrapper>
      </TableHead>
      <TableBodyWrapper className="tbody-wrapper">
        {transactionItems.map(item => (
          <Item
            key={item.id}
            className="item"
          >
            <ItemColumn>{item.type}</ItemColumn>
            <ItemColumn>{item.amount}</ItemColumn>
            <ItemColumn>{item.currency}</ItemColumn>
          </Item>
        ))}
      </TableBodyWrapper>
    </TransactionHistoryWrapper>
  )
}

TransactionHistory.propTypes = {
  id: PropTypes.string,
  item: PropTypes.object,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
  transactionItems: PropTypes.array.isRequired,
};

export default TransactionHistory;