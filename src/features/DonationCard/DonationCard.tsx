import React from 'react';
import CardContainer from '../../components/UI/CardContainer';
import CardContentMain from './CardContentMain';
import CardHeader from './CardHeader';

const DonationCard = () => {
  const handleCancel = () => {};
  const handleContinue = () => {};
  return (
    <CardContainer>
      <CardHeader />
      <CardContentMain
        handleCancel={handleCancel}
        handleContinue={handleContinue}
      />
    </CardContainer>
  );
};

export default DonationCard;
