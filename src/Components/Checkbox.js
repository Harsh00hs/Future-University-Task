import React from 'react';

function Checkbox({ checked, onChange }) {
  return (
    <span className="checkbox" onClick={onChange}>
      {checked ? '✓' : '○'}
    </span>
  );
}

export default Checkbox;
