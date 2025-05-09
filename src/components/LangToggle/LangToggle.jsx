import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const LangToggle = ({ onChange }) => {
  const [isZh, setIsZh] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || navigator.language;
    const isCurrentZh = savedLang.startsWith('zh');
    setIsZh(isCurrentZh);
    onChange(isCurrentZh ? 'zh-TW' : 'en');
  }, [onChange]);

  const toggleLang = () => {
    const newLang = isZh ? 'en' : 'zh-TW';
    setIsZh(!isZh);
    localStorage.setItem('lang', newLang);
    onChange(newLang);
  };

  return (
    <label htmlFor="lang-toggle" className="lang-toggle">
      <input id="lang-toggle" type="checkbox" checked={isZh} onChange={toggleLang} />
      <span className="slider" />
      <span className="label-text">{isZh ? '中文' : 'EN'}</span>
    </label>
  );
};

LangToggle.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default LangToggle;