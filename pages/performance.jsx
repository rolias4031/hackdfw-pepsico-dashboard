import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import InfluencerWrapper from '../components/performance/InfluencerWrapper';
import PerformanceContainer from '../components/performance/PerformanceContainer';

/*
* THIS PAGE DOES:
- shows influencer performance in cards, sorted by some metric, by contract
- uses mock data, so make a bunch of dummy users
- shows existing contracts and allows you to filter between them

* THIS PAGE NEEDS:
- Card components with influencer info and performance details
- Sorting mechanism, filtering through a map().
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

export default function PerformancePage() {
  const [activeBudgets, setActiveBudgets] = useState([]);
  const {
    isLoading,
    isError,
    isSuccess,
    data: budgets,
  } = useQuery(['fetch-active-budgets'], fetchActiveBudgets, {
    onSuccess: (budgets) => {
      setActiveBudgets(() => budgets);
    },
  });

  if (isSuccess) {
    return (
      <div>
        <InfluencerWrapper
          activeBudgets={activeBudgets}
        />
      </div>
    );
  }
}
