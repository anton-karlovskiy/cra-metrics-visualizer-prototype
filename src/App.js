
import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import PsiAction from 'components/PsiAction';
import './App.css';

const App = () => (
  <>
    <Header />
    <main>
      <PsiAction />
    </main>
    {/* TODO: double check if we really need */}
    <Footer />
  </>
);

export default App;
