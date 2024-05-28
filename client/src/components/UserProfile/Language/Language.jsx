import React from 'react';
import { Badge } from '../../ui/badge';
import './Language.css';

const Language = ({ languages }) => {
  return (
    <div className="language-container">
      <h2>Languages</h2>
      <div className="language-badges">
        {languages.map((language, index) => (
          <Badge key={index} variant="outline" className="language-badge mr-2 mb-2">
            {language}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Language;