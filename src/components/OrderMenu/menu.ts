import pizza from "@/assets/small-menu/pizza-small.png";
import burger from "@/assets/small-menu/burger-small.png";
import vegan from "@/assets/small-menu/vegan-small.png";

type OrderMenuItemData = {
    mainImage: ImageSource;
    mainImageAlt: string;
    label: string;
    quantity: string;
    price: string | number;
};

export const orderMenuItems: OrderMenuItemData[] = [
    { mainImage: pizza, mainImageAlt: "pizza small", label: "Pepperoni Pizza", quantity: "x1", price: 5.59 },
    { mainImage: burger, mainImageAlt: "burger small", label: "Cheese Burger", quantity: "x1", price: 5.59 },
    { mainImage: vegan, mainImageAlt: "vegan small", label: "Vegan Pizza", quantity: "x1", price: 5.59 },
];
