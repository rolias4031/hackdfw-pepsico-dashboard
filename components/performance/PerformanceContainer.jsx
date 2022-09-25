import React, { useState } from 'react';
import { useQuery } from 'react-query';
import PropTypes from 'prop-types';
import { useGetDashboardData } from '../charts/DashboardContainer';

/*
* this container does:
- fetches data from appropriate endpoint using react-query
- raises that data using raiseState
*/

async function fetchActiveBudgets() {
  const url = 'http://127.0.0.1:5000/getActiveBudgets';
  const response = await fetch(url);
  console.log(response);
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }
  console.log(result);
  return result;
}

// component function
function PerformanceContainer({ children, raiseState }) {
  const [activeBudgets, setActiveBudgets] = useState([]);
  const {
    isLoading,
    isError,
    isSuccess,
    data: budgets,
  } = useQuery(['fetch-active-budgets'], fetchActiveBudgets, {
    onSuccess: (budgets) => {
      raiseState.setActiveBudgets(budgets)
      raiseState.setSelectedBudgets(budgets[0].budgetIdentifier)
    },
  });

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <h1>Error</h1>;
  }
  if (isSuccess) {
    return <>{children}</>;
  }
}

PerformanceContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default PerformanceContainer;
