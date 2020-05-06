
import React, { useState } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import LighthouseAction from 'components/LighthouseAction';
import MetricsVisualizer from 'components/MetricsVisualizer';
import './App.css';

const App = () => {
  const [lighthouseInfo, setLighthouseInfo] = useState({
    metrics: {},
    screenshotDetails: {}
  });

  const updateLighthouseInfoHandler = newLighthouseInfo => {
    setLighthouseInfo(newLighthouseInfo);
  };

  return (
    <>
      <Header />
      <main>
        <LighthouseAction updateLighthouseInfo={updateLighthouseInfoHandler} />
        <MetricsVisualizer lighthouseInfo={lighthouseInfo} />
      </main>
      <Footer />
    </>
  );
};

export default App;
