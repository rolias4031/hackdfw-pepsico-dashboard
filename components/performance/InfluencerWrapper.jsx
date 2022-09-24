import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InfluencerCard from './influencer/InfluencerCard';

/*
* this component does:
- renders the individual influencer cards after applying map(), sort(), filter() methods to data
- raises any data from the card components?
*/

const influencers = [
  {
    name: 'Sailor Metz',
    handle: '@sailormetz',
    rating: 4.9,
    likes: 50,
    shares: 100,
    views: 250,
    contractEarnings: 200,
    memberSince: '09/25/2022',
    contact: {
      email: 'sailor1234@gmail.com',
      phone: '123-456-7890',
    },
  },
  {
    name: 'Jane Doe',
    handle: '@jane1234',
    rating: 5.0,
    likes: 20,
    shares: 321,
    views: 1234,
    contractEarnings: 388,
    memberSince: '09/25/2022',
    contact: {
      email: 'janedoe@gmail.com',
      phone: '123-456-7890',
    },
  },
  {
    name: 'Bill Billy',
    handle: '@thebillman',
    rating: 3.4,
    likes: 49,
    shares: 2,
    views: 3479,
    contractEarnings: 55,
    memberSince: '09/25/2022',
    contact: {
      email: 'billbad@gmail.com',
      phone: '123-456-7890',
    },
  },
];

const sortCategories = [
  'rating',
  'likes',
  'shares',
  'views',
  'contractEarnings',
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

function InfluencerWrapper() {
  const [sortBy, setSortBy] = useState('contractEarnings');

  function changeHandler(event) {
    console.log(event.target.value);
    setSortBy(event.target.value);
  }

  const sortOptions = sortCategories.map((cat) => (
    <option key={cat} value={cat}>
      {createLabel(cat)}
    </option>
  ));

  const allCards = influencers.map((influencer) => {
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

  return (
    <>
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
      {finalCards}
    </>
  );
}

export default InfluencerWrapper;
