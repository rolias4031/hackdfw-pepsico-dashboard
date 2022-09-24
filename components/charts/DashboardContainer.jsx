import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';

/*
* this component does:
- fetches data from end points to render charts, passes that data up through raiseState prop
- takes Charts as children
- renders appropriate content based on query status (isLoading, isError, data)
*/

const fetchDashboardData = () => {
  // fetch data from endpoint
}

const useGetDashboardData = () => {
  useQuery(['fetch-dashboard-data'], fetchDashboardData)
}

function DashboardContainer({ children, raiseState }) {
  // const { isLoading, isError, data, error } = useGetDashboardData() custom hook

  const DashboardContent = children.map((child, i) => {
    return (
      <div key={i} className='w-3/4 my-5'>
        {child}
      </div>
    )
  })

  return DashboardContent;
}

DashboardContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default DashboardContainer;
