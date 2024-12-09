import React from "react";
function GoodsCard({ image, name, price }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "10px",
        textAlign: "center",
        width: "150px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: "100px", height: "100px", objectFit: "cover" }}
      />
      <h3 style={{ fontSize: "18px", margin: "10px 0" }}>{name}</h3>
      <p style={{ fontSize: "16px", color: "#555" }}>
        {price ? `Коштує: ${price} грн` : "нуль"}
      </p>
    </div>
  );
}

export default GoodsCard;

