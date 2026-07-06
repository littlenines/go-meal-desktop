import pizza from "@/assets/small-menu/pizza-small.png";
import burger from "@/assets/small-menu/burger-small.png";
import vegan from "@/assets/small-menu/vegan-small.png";

type OrderMenuItemData = {
    image: ImageSource;
    alt: string;
    label: string;
    quantity: string;
    price: string | number;
};

export const OrderMenuItems: OrderMenuItemData[] = [
    { image: pizza, alt: "pizza small", label: "Pepperoni Pizza", quantity: "x1", price: 5.59 },
    { image: burger, alt: "burger small", label: "Cheese Burger", quantity: "x1", price: 5.59 },
    { image: vegan, alt: "vegan small", label: "Vegan Pizza", quantity: "x1", price: 5.59 },
];
