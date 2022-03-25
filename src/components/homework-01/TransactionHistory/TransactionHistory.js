import PropTypes from "prop-types";
import {
  TableBox,
  TableTh,
  TableTd,
  TableTr,
} from "./TransactionHistory.styled";

export default function TransactionHistory({ items }) {
  return (
    <TableBox className="transaction-history">
      <thead>
        <tr>
          <TableTh>Type</TableTh>
          <TableTh>Amount</TableTh>
          <TableTh>Currency</TableTh>
        </tr>
      </thead>

      <tbody>
        {items.map((item, idColor) => (
          <TableTr key={item.id} idColor={idColor}>
            <TableTd>{item.type}</TableTd>
            <TableTd>{item.amount}</TableTd>
            <TableTd>{item.currency}</TableTd>
          </TableTr>
        ))}
      </tbody>
    </TableBox>
  );
}
