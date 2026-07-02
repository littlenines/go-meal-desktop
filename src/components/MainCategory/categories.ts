import bakedIcon from "@/assets/svg/Baked.svg";
import burgerIcon from "@/assets/svg/Burger.svg";
import coffeeIcon from "@/assets/svg/Coffee.svg";
import chickenIcon from "@/assets/svg/Chicken.svg";
import pizzaIcon from "@/assets/svg/Fast.svg";
import fishIcon from "@/assets/svg/Fish.svg";

type CategoryItem = { image: ImageSource; alt: string; label: string };

export const CategoryItems: CategoryItem[] = [
  { image: bakedIcon, alt: "muffin", label: "Bakery" },
  { image: burgerIcon, alt: "burger", label: "Burger" },
  { image: coffeeIcon, alt: "coffee", label: "Beverage" },
  { image: chickenIcon, alt: "chicken", label: "Chicken" },
  { image: pizzaIcon, alt: "pizza", label: "Pizza" },
  { image: fishIcon, alt: "seafood", label: "Seafood" },
];