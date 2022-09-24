import React, { useState, useEffect } from 'react';
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

export default function PerformancePage() {
  const [budgetId, setBudgetId] = useState('');
  const [activeBudgets, setActiveBudgets] = useState([]);

  useEffect(() => {
    async function getActiveBudgets() {
      const url = 'http://127.0.0.1:5000/getActiveBudgets';
      const response = await fetch(url);
      const result = await response.json();
      setActiveBudgets(result.data);
    }
    getActiveBudgets();
  }, []);

  async function fetchInfluencerData(budgetId) {
    const url =
      'http://127.0.0.1:5000/viewInfluencersPerBudget?' +
      new URLSearchParams({
        param: budgetId,
      });
    const fetchOptions = {
      method: 'GET',
    };
    const response = await fetch(url, fetchOptions);
    const result = await response.json();
    setPerformanceData(result);
  }
  function clickHandler() {
    fetchInfluencerData(budgetId);
  }

  let listOfIds
  if (activeBudgets) {
    listOfIds = activeBudgets.map((id) => (
      <p key={id.budgetIdentifier}>{id.budgetIdentifier}</p>
    ));
  }

  const [performanceData, setPerformanceData] = useState();
  return (
    <div className="w-full bg-gray-50">
      <div className="w-1/2 mx-auto">
        <input
          onChange={(event) => {
            setBudgetId(event.target.value);
          }}
          type="text"
          className="w-full border rounded leading-tight py-2 px-3 text-sm text-gray-700 appearance-none"
        />
        <button
          type="button"
          onClick={clickHandler}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Fetch Budget
        </button>
        {listOfIds}
      </div>

      <PerformanceContainer raiseState={setPerformanceData}>
        <InfluencerWrapper data={performanceData} />
      </PerformanceContainer>
    </div>
  );
}
