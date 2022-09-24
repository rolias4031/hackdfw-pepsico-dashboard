import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import CardBackground from './CardBackground';
import CardHeader from './CardHeader';
import CardStats from './CardStats';
import CardInfo from './CardInfo'

/*
* this component does:
- renders one influencer card with all sub components

* card details:
- name
- avatar
- appropriate handle
- social media stats (likes, shares, views)
- earnings from contract so far
- time on platform
- influencer rating

* break out into these components:
- background
- Header
- Stats
- MoreInfo
*/

function InfluencerCard({ data }) {
  return (
    <CardBackground divStyle="p-2 rounded-md border-2 border-gray-400 bg-white">
      {/* Avatar, Name, Handle, Rating */}
      <div className='my-1'>
        <CardHeader data={data} />
      </div>
      <div className='ml-2 my-1 flex items-center'>
        <CardStats data={data} />
        <CardInfo data={data}/>
      </div>
    </CardBackground>
  );
}

export default InfluencerCard;
