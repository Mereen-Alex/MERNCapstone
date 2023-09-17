const cakesArray = [
  {
    pid: "1",
    name: "Chocolate Fudge Brownie Cake",
    category: "With Egg",
    description:
      "Truffle Cake is made with a moist chocolate sponge and a rich chocolate truffle ganache.",
    cakeflavor: "Truffle",
    sizes: ["500 g", "1 kg", "1.5 kg"],
    image: "/images/Fudge-Brownie-cake.jpeg",
    price: ["535", "1000", "1325"],
  },
  {
    pid: "2",
    name: "Butterscotch Delight",
    category: "With Egg",
    description:
      "A delightful butterscotch-flavored cake that will melt in your mouth.",
    cakeflavor: "Butterscotch",
    sizes: ["500 g", "1 kg", "1.5 kg"],
    image: "/images/butterscotch-cake.jpg",
    price: ["475", "900", "1275"],
  },
  {
    pid: "3",
    name: "Delicious Vanilla Cake",
    category: "With Egg",
    description:
      "Indulge in the delightful flavors of our Delicious Vanilla Cake.",
    cakeflavor: "Vanilla",
    sizes: ["500 g", "1 kg", "1.5 kg"],
    image: "/images/Vanilla-cake.jpg",
    price: ["475", "885", "1200"],
  },
  {
    pid: "4",
    name: "Fresh Cream Blueberry Cake",
    category: "Eggless",
    description:
      "Elevate your taste experience with our Fresh Cream Blueberry Cake.",
    cakeflavor: "Blueberry",
    sizes: ["500 g", "1 kg", "1.5 kg"],
    image: "/images/Blueberry-cake.jpg",
    price: ["525", "1010", "1400"],
  },
  {
    pid: "5",
    name: "Fresh Fruit Delight",
    category: "Eggless",
    description: "A delightful fresh fruit cake that will melt in your mouth.",
    cakeflavor: "Vanilla",
    sizes: ["500 g", "1 kg", "1.5 kg"],
    image: "/images/Fruit-Delight-cake.jpeg",
    price: ["475", "900", "1325"],
  },
  {
    pid: "6",
    name: "Strawberry Theme Cake",
    category: "With Egg",
    description: "Delight in sweetness with our Strawberry Theme Cake!",
    cakeflavor: "Strawberry",
    sizes: ["500 g", "1 kg", "1.5 kg"],
    image: "/images/Strawberry-cake.jpg",
    price: ["475", "925", "1375"],
  },
  {
    pid: "7",
    name: "Chocolate cake with caramel",
    category: "With Egg",
    description: "Indulge in the sublime with our Chocolate Cake with Caramel.",
    cakeflavor: "Caramel",
    sizes: ["500 g", "1 kg", "1.5 kg"],
    image: "/images/Caramel-Chocolate-cake.jpg",
    price: ["485", "950", "1395"],
  },
  {
    pid: "8",
    name: "Vegan Chocolate Cake",
    category: "Eggless",
    description:
      "Indulge guilt-free with our Vegan Chocolate Cake. Dairy-free, egg-free, with vegan buttercream.",
    cakeflavor: "Chocolate",
    sizes: ["500 g", "1 kg", "1.5 kg"],
    image: "/images/Vegan-Chocolate-cake.jpeg",
    price: ["425", "800", "1195"],
  },
];


function getCakeData(pid) {
  const cakeData = cakesArray.find((cake) => cake.pid === pid);

  if (!cakeData) {
    console.log("Cake data does not exist for ID: " + pid);
    return undefined;
  }

  return cakeData;
}

export { cakesArray, getCakeData };