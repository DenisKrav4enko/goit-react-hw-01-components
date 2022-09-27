import React from 'react';
import './styles.css';

const TransactionHistory = props => {
  const { transactionItems } = props;

  return (
    <table className="transaction-history">
      <thead>
        <tr className="thead-wrapper">
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className="tbody-wrapper">
        {transactionItems.map(item => (
          <tr
            key={item.id}
            className="item"
          >
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TransactionHistory;