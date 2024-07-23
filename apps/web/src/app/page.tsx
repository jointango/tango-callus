"use client";

import Link from "next/link";
import { useState } from "react";

const listOfBrands = [
  "adidas",
  "nike",
  "puma",
  "reebok",
  "under armour",
  "hummels",
];

export default function Web() {
  return (
    <div>
      {listOfBrands.map((brand) => (
        <MyComponent title={brand}></MyComponent>
      ))}
    </div>
  );
}

function MyComponent(props: { title: string }) {
  const [likes, setLikes] = useState(0);

  function handleOnClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <h1>{props.title}</h1>

      <h2>{likes} ❤️</h2>
      <button onClick={handleOnClick}>Click to like</button>
    </div>
  );
}
