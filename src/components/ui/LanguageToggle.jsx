import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';

const LanguageToggle = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
    applyLanguage(savedLanguage);
  }, []);

  const applyLanguage = (lang) => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('language', lang);
  };

  const handleLanguageChange = (lang) => {
    setCurrentLanguage(lang);
    applyLanguage(lang);
    setIsOpen(false);
  };

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ar', label: 'العربية', flag: '🇦🇪' },
  ];

  const currentLang = languages?.find(lang => lang?.code === currentLanguage);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-smooth"
        aria-label="Change language"
      >
        <span className="text-lg">{currentLang?.flag}</span>
        <span className="hidden sm:inline text-sm font-medium text-foreground">
          {currentLang?.label}
        </span>
        <Icon 
          name={isOpen ? 'ChevronUp' : 'ChevronDown'} 
          size={16} 
          className="text-muted-foreground"
        />
      </button>
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-[90]" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-popover rounded-lg shadow-lg z-[95] overflow-hidden">
            {languages?.map((lang) => (
              <button
                key={lang?.code}
                onClick={() => handleLanguageChange(lang?.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-muted transition-smooth ${
                  currentLanguage === lang?.code ? 'bg-muted' : ''
                }`}
              >
                <span className="text-lg">{lang?.flag}</span>
                <span className="text-sm font-medium text-popover-foreground">
                  {lang?.label}
                </span>
                {currentLanguage === lang?.code && (
                  <Icon name="Check" size={16} className="ml-auto text-primary" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageToggle;