import './App.scss';
import React from "react";
import Product from "./product";
import Photo from "./photo";

const productData = {
  title: "Delicious Apples",
  cod: "COD: 45999",
  price: "7.93",
  images: {
    main: "https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png",
    mainAlt: "green apple slice",
    additional: [
      "https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png",
      "https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png",
      "https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png",
      "https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png",
    ],
  },
  variants: [
    {
      name: "green",
      image: "https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png",
    },
    {
      name: "yellow",
      image: "https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png",
    },
    {
      name: "orange",
      image: "https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png",
    },
    {
      name: "red",
      image: "https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png",
    },
  ],
  benefits: [
    "Apples are nutricious",
    "Apples may be good for weight loss",
    "Apples may be good for bone health",
    "They're linked to a lowest risk of diabetes",
  ],
};

function App() {
  return (
    <div className="App">
      <Product productData={productData} />
    </div>
  );
}

export default App;