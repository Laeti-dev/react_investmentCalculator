import React from "react";

import styles from "./ResultTable.module.css";

const Table = (props) => {
const formatter = new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

  return (
    <table className={styles.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
            {props.data.map((yearData) => (
              <tr key={yearData.id}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.savingsEndOfYear)}</td>
                <td>{formatter.format(yearData.yearlyInterest)}</td>
                <td>{formatter.format(yearData.savingsEndOfYear -
                    props.initialInvestment -
                    yearData.yearlyContribution * yearData.year)}</td>
                <td>{formatter.format(props.initialInvestment +
                    yearData.yearlyContribution * yearData.year)}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
  )
};

export default Table;
