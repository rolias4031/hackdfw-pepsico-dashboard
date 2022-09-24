import React from 'react';
import { useQuery } from 'react-query';
import PropTypes from 'prop-types';
import { useGetDashboardData } from '../charts/DashboardContainer';

/*
* this container does:
- fetches data from appropriate endpoint using react-query
- raises that data using raiseState
*/

function PerformanceContainer({ children, raiseState }) {
  return children;
}

PerformanceContainer.propTypes = {
  raiseState: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default PerformanceContainer;
