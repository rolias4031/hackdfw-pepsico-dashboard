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

export default function PerformancePage() {
  const [performanceData, setPerformanceData] = useState([]);
  return (
    <div>
      <PerformanceContainer raiseState={setPerformanceData}>
        <InfluencerWrapper data={performanceData} />
      </PerformanceContainer>
    </div>
  );
}
