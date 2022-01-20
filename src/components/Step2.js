import React from "react";

function PersonalInfo({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="Dato3"
        value={formData.dato3}
        onChange={(e) => {
          setFormData({ ...formData, dato3: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Dato4"
        value={formData.dato4}
        onChange={(e) => {
          setFormData({ ...formData, dato4: e.target.value });
        }}
      />
    </div>
  );
}

export default PersonalInfo;
