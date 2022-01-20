import React from "react";

function OtherInfo({ formData, setFormData }) {
  const { dato1, dato2, dato3, dato4 } = formData;
  let price;
  if (dato1 == "pelota") {
    if (dato2 == "futbol") {
      price = 400;
    } else if (dato2 == "basket") {
      price = 800;
    }
  }
  return (
    <div className="other-info-container">
      <h1>El precio de {dato1} con el dato de {dato2}, {dato3} y {dato4} es ${price}</h1>
    </div>
  );
}

export default OtherInfo;
