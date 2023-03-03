import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {

  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value)
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filtrer par année</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2026'>2026</option>
          <option value='2025'>2025</option>
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;