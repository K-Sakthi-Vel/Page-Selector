import React from 'react';
import './Checkbox.css'; // Import the CSS for the custom checkbox

const CustomCheckbox = ({ checked, onChange, ariaLabel }) => {
  return (
    <label className="custom-checkbox-container">
      <input
        type="checkbox"
        className="custom-checkbox-input"
        checked={checked}
        onChange={onChange}
        aria-label={ariaLabel}
      />
      <span className="custom-checkbox-checkmark"></span>
    </label>
  );
};

export default CustomCheckbox;
