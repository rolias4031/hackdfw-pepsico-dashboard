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
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }
  return result;
}

async function fetchPerformanceData(budgetId) {
  const url =
    'http://127.0.0.1:5000/viewInfluencersPerBudget?' +
    new URLSearchParams({
      budgetID: budgetId,
    });
  const response = await fetch(url);
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }
  return result;
}

// component function
function PerformanceContainer({ children, raiseState }) {
  const [activeBudgets, setActiveBudgets] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState();
  const { data: budgets } = useQuery([
    'fetch-active-budgets',
    fetchActiveBudgets,
    {
      onSuccess: (data) => {
        setActiveBudgets(budgets);
      },
      enabled: false,
    },
  ]);

  const { refetch, isLoading, isError, isSuccess, data } = useQuery(
    ['fetch-influencer-data'],
    () => {
      fetchPerformanceData(selectedBudget);
    },
    {
      onSuccess: (data) => {
        raiseState(data);
      },
      enabled: false,
    },
  );

  function changeHandler(event) {
    setSelectedBudget(() => {
      return event.target.value
    })
    refetch()
  }

  const selectOptions = activeBudgets.map((budget) => {
    const id = budget.budgetIdentifier;
    return (
      <option key={id} value={id}>
        {id}
      </option>
    );
  });
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <h1>Error</h1>;
  }
  if (isSuccess) {
    return (
      <>
        <div className="w-1/2">
          <select onChange={changeHandler} name="" id="" value={selectedBudget}>
            {selectOptions}
          </select>
        </div>
        {children}
      </>
    );
  }
}

PerformanceContainer.propTypes = {
  raiseState: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default PerformanceContainer;
