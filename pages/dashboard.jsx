import React, { useState } from 'react';
import DashboardContainer from '../components/charts/DashboardContainer';
import SimpleLineChart from '../components/charts/SimpleLineChart';
import PageHeader from '../components/display/PageHeader';

/*
* THIS PAGE DOES:
- displays the dashboard charts, 

* THIS PAGE NEEDS:
- Navbar that is unique to pepsi - links to a
- Charts Comps
- Headers
- Container to fetch data via react-query, pass down to other props.
- Links to go to other pages
*/

export default function DashboardPage() {
  const [dashboardData, setDashboardData] = useState();
  return (
    //
    <div className="mx-auto w-full border">
      <PageHeader header="Dashboard" headerStyle="text-center" />
      {/* Container fetches data, raises to dashboardData */}
      <DashboardContainer raiseState={setDashboardData}>
        {/* Pass data via props */}
        <SimpleLineChart />
        <SimpleLineChart />
        <SimpleLineChart />
      </DashboardContainer>
    </div>
  );
}
