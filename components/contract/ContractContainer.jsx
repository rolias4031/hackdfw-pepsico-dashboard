import React from 'react';
import PropTypes from 'prop-types';
import { useGetDashboardData } from '../charts/DashboardContainer';

/*
* this container does:
- fetches data from appropriate endpoint using react-query
- raises that data using raiseState
*/

function ContractContainer({ children }) {
  // const { isLoading, isError, data, error } = useGetDashboardData or its own hook?
  return children;
}

ContractContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default ContractContainer;
