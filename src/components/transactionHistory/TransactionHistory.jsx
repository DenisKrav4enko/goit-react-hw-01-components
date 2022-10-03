import React from 'react';
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

export default TransactionHistory;