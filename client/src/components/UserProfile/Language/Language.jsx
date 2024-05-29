import React from 'react';
import { Badge } from '../../ui/badge';
import './Language.css';

const Language = ({ languages }) => {
  return (
    <div className='language-frame'>
      <h2 className="text-2xl font-semibold mb-4">Languages</h2>
      <div className="flex flex-wrap gap-2">
        {languages.map((language, index) => (
          <Badge key={index} variant="outline" className="language-badge">
            {language}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Language;