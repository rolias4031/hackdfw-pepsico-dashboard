import React from 'react';
import Link from 'next/link';

/*
! make navigation links dynamic based on router.path (influencer/ vs /)
*/

function Navigation() {
  return (
    <div className="flex justify-end items-center space-x-3 mx-5">
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
