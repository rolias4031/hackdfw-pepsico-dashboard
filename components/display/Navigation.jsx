import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

/*
! make navigation links dynamic based on router.path (influencer/ vs /)
*/

function Navigation() {
  return (
    <div className="flex items-center space-x-3 mx-5">
      <div className='w-20 h-20 mr-auto relative'>
        <Image objectFit="contain" layout="fill" src="/CheetosLogo.png" />
      </div>
      <div>
        <Link href="/performance">Performance</Link>
      </div>
      <div>
        <Link href="/budget">Budget</Link>
      </div>
      <div>
        <Link href="/enroll">Enroll</Link>
      </div>
    </div>
  );
}

export default Navigation;
