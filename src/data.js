import React from "react";

const animals = [
  { name: "cat", sound: "meow", foodRequirements: { food: 2, drink: 1 } },
  { name: "dog", sound: "woof" },
];

function useAnimals(animal) {
  return [
    animal.name,
    () => {
      console.log(animal.sound);
    },
  ];
}

export default animals;
export { useAnimals };
