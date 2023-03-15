import React from 'react';
import CardContainer from './components/CardContainer';
import CardContent from './components/CardContent';
import CardHeader from './components/CardHeader';
import Navbar from './components/Navbar';

const App = () => (
  <>
    <Navbar />
    <main>
      <CardContainer>
        <CardHeader />
        <CardContent />
      </CardContainer>
    </main>
  </>
);

export default App;
