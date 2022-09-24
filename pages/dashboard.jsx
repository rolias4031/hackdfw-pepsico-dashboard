import React, { useState } from 'react';
import DashboardContainer from '../components/charts/DashboardContainer';
import LineChart from '../components/charts/LineChart';
import Navigation from '../components/display/Navigation';
import PageHeader from '../components/display/PageHeader';

/*
* THIS PAGE DOES:
- displays the dashboard charts
- fetches data

* THIS PAGE NEEDS:
- Navbar that is unique to pepsi - links to a
- Charts Comps
- Headers
- Container to fetch data via react-query, pass down to other props.
- Links to go to other pages
- Way to filter data by PRODUCT and pass that to a chart.
*/

export default function DashboardPage() {
  const [dashboardData, setDashboardData] = useState();
  return (
    //
    <div className="mx-auto w-full border">
      <Navigation />
      <PageHeader header="Dashboard" headerStyle="text-center" />
      {/* Container fetches data, raises to dashboardData */}
      <DashboardContainer raiseState={setDashboardData}>
        {/* Pass data via props */}
        <LineChart />
        <LineChart />
        <LineChart />
      </DashboardContainer>
    </div>
  );
}
