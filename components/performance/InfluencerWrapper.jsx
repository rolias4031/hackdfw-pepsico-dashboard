import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InfluencerCard from './influencer/InfluencerCard';
import { render } from 'react-dom';

/*
* this component does:
- renders the individual influencer cards after applying map(), sort(), filter() methods to data
- raises any data from the card components?
*/

const sortCategories = [
  'engagementScore',
  'likeCount',
  'shareCount',
  'viewCount',
];

function createLabel(nameVal, labelVal = null) {
  if (labelVal) return labelVal;
  const regex = /[A-Z]/;
  let newLabel = nameVal[0].toUpperCase();
  for (let i = 1; i < nameVal.length; i += 1) {
    const match = regex.test(nameVal[i]);
    if (match) {
      newLabel += ` ${nameVal[i]}`;
    } else {
      newLabel += nameVal[i];
    }
  }
  return newLabel;
}



function InfluencerWrapper({ activeBudgets }) {
  const [sortBy, setSortBy] = useState('contractEarnings');
  const [selectedBudget, setSelectedBudget] = useState()
  const [influencers, setInfluencers] = useState()
  console.log('selectedBudget', selectedBudget);
  console.log('influencers', influencers);

  const selectOptions = activeBudgets.map((budget) => {
    const id = budget.budgetIdentifier;
    return (
      <option key={id} value={id}>
        {id}
      </option>
    );
  });
 
  // happens after fetch, when influencers populated
  function changeHandler(event) {
    console.log(event.target.value);
    setSortBy(event.target.value);
  }

  function clickHandler(event) {
    event.preventDefault();
    console.log(selectedBudget);
    fetchPerformanceData(selectedBudget);
  }

  const sortOptions = sortCategories.map((cat) => (
    <option key={cat} value={cat}>
      {createLabel(cat)}
    </option>
  ));

  async function fetchPerformanceData(budgetID) {
    const url =
      'http://127.0.0.1:5000/viewInfluencersPerBudget?' +
      new URLSearchParams({
        budgetID,
      });
    try {
      const response = await fetch(url)
      const result = await response.json()
      if (!response.ok) {
        throw new Error(result.message);
      }
      console.log('performance data fetch', result);
      setInfluencers(() => {
        return result
      });
    } catch (error) {
      console.log(error);
    }
  }

  function renderInfluencerCards() {
    const allCards = influencers.map((influencer) => {
      influencer.contractEarnings = Math.round(28*Math.random()) * Math.round(100*Math.random())
      return <InfluencerCard key={influencer.name} data={influencer} />;
    });
    allCards.sort((a, b) => {
      const aVal = a.props.data[sortBy],
        bVal = b.props.data[sortBy];
      console.log(aVal, bVal);
      if (aVal > bVal) {
        return -1;
      } else if (aVal < bVal) {
        return 1;
      }
      return 0;
    });
  
    const finalCards = allCards.map((card, i) => {
      return (
        <div className="w-1/2 my-3 mx-auto" key={i}>
          {card}
        </div>
      );
    });
    return finalCards
  }

  return (
    <>
      <div className="w-1/2">
        <select
          onChange={(event) => {
            setSelectedBudget(event.target.value);
          }}
          name=""
          id=""
          value={selectedBudget}
        >
          {selectOptions}
        </select>
        <button onClick={clickHandler}>Fetch</button>
      </div>
      <div className="w-1/2 my-3 mx-auto flex items-center space-x-2 justify-end">
        <label className="font-semibold" htmlFor="select-sort">
          Sort By:
        </label>
        <select
          value={sortBy}
          onChange={changeHandler}
          className="w-auto p-2 text-sm bg-clip-padding bg-no-repeat border rounded transition ease-in-out"
          name="select-sort"
          id="select-sort"
        >
          {sortOptions}
        </select>
      </div>
      {influencers && renderInfluencerCards()}
    </>
  );
}

export default InfluencerWrapper;
