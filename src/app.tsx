import { useLanguage } from '@/i18n/useLanguage';
import { type TLanguage, language } from './i18n/types';

import '@/app.css';

const App: React.FC = () => {
  const { t, currentLanguage, switchLanguage } = useLanguage();

  const handleSwitchLanguageButtonClick = (lang: TLanguage) => {
    localStorage.setItem('locale', lang);
    switchLanguage(lang);
    console.log('Language: ', lang, localStorage.getItem('locale'));
  };

  return (
    <div className='content'>
      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>
      <div>
        {t('language')}&nbsp;
        {currentLanguage() === language.pt && (
          <button type='button' onClick={() => handleSwitchLanguageButtonClick(language.en)}>
            en
          </button>
        )}
        {currentLanguage() === language.en && (
          <button type='button' onClick={() => handleSwitchLanguageButtonClick(language.pt)}>
            pt
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
