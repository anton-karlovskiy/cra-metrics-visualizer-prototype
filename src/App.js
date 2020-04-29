
import React, { useState } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import PsiAction from 'components/PsiAction';
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
        <PsiAction updateLighthouseInfo={updateLighthouseInfoHandler} />
        <MetricsVisualizer lighthouseInfo={lighthouseInfo} />
      </main>
      {/* TODO: double check if we really need */}
      <Footer />
    </>
  );
};

export default App;
