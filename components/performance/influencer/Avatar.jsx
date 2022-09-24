import Image from 'next/image';
import React from 'react';

function Avatar({ seed }) {
  return (
    <>
      <Image
        objectFit="contain"
        layout="fill"
        src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`}
        alt="Influencer Avatar"
      />
    </>
  );
}

export default Avatar;
