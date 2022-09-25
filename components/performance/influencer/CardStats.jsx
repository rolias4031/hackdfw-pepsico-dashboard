import React from 'react';
import { EyeIcon, HeartIcon, ShareIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';

function CardStats({ data }) {
  const iconStyle = 'w-10 h-10';
  const divStyle = 'flex flex-col text-center';
  const statStyle = 'text-lg font-semibold';
  return (
    <div className="flex space-x-5">
      <div className={divStyle}>
        <EyeIcon className={`text-yellow-500 ${iconStyle}`} />
        <p className={statStyle}>{data.viewCount}</p>
      </div>
      <div className={divStyle}>
        <HeartIcon className={`text-red-500 ${iconStyle}`} />
        <p className={statStyle}>{data.likeCount}</p>
      </div>
      <div className={divStyle}>
        <ShareIcon className={`text-blue-500 ${iconStyle}`} />
        <p className={statStyle}>{data.shareCount}</p>
      </div>
      <div className={`${divStyle}`}>
        <CurrencyDollarIcon className={`text-green-500 ${iconStyle}`}/>
        <p className={statStyle}>{data.contractEarnings}</p>
      </div>
    </div>
  );
}

export default CardStats;
