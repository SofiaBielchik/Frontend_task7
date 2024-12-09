import React from "react";
import GoodsCard from "./GoodsCard";

function Gallery() {
  const goods = [
    { id: 1, image: "book.jpg", name: "Книга", price: 200 },
    { id: 2, image: "lipsctik.jpg", name: "Помада", price: 150 },
    { id: 3, image: "oreo.jpg", name: "Орео", price: 45 },
    { id: 4, image: "dog.jpg", name: "Собака", price: 30000 },
    { id: 5, image: "candle.jpg", name: "Свічка", price: 160 },
    { id: 6, image: "peace.jpg", name: "Мирне небо", price: "безцінно" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      {goods.map((item) => (
        <GoodsCard
          key={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default Gallery;
