import React from "react";

function SignUpInfo({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="Dato1..."
        value={formData.dato1}
        onChange={(event) =>
          setFormData({ ...formData, dato1: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Dato2..."
        value={formData.dato2}
        onChange={(event) =>
          setFormData({ ...formData, dato2: event.target.value })
        }
      />
    </div>
  );
}

export default SignUpInfo;
