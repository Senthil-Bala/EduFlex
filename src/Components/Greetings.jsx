// src/components/Greeting.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Greeting = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('greeting')}</h1>
      <p>{t('someOtherText')}</p>
    </div>
  );
};

export default Greeting;
