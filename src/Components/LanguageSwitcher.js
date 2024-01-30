// src/components/LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const switchLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => switchLanguage('en')}>{t('english')}</button>
      <button onClick={() => switchLanguage('ta')}>{t('tamil')}</button>
    </div>
  );
};

export default LanguageSwitcher;
