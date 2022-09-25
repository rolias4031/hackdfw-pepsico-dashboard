import React from 'react';
import Avatar from './Avatar';
import { StarIcon } from '@heroicons/react/24/solid'

function CardHeader({ data }) {
  return (
    <div className="flex items-center mb-2">
      <div className="relative h-20 w-24 overflow-hidden border-b-2 border-gray-400">
        <Avatar seed={data.uniqueName} />
      </div>
      <div className="flex flex-1 flex-col ml-5">
        <p className='text-3xl font-semibold'>{data.uniqueName}</p>
        <p className='text-xl text-gray-500'>{data.uniqueName}</p>
      </div>
      <StarIcon className='w-10 h-10 text-yellow-400'/>
      <p className='ml-1 mr-5 text-2xl font-bold'>{data.engagementScore.toFixed(1)}/5</p>
    </div>
  );
}

export default CardHeader;
