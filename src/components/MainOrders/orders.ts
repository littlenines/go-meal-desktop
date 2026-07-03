import pizza from "@/assets/orders/pizza.png";
import ramen from "@/assets/orders/ramen.png";
import rice from "@/assets/orders/rice.png";

type OrderItem = {
    mainImage: ImageSource,
    mainImageAlt: string,
    mainImageWidth: string,
    mainImageHeight: string,
    label: string,
    price: string | number,
    km: string | number,
    time: string | number
}

export const OrderItems: OrderItem[] = [
    {
        mainImage: pizza,
        mainImageAlt: "pizza",
        mainImageWidth: "202",
        mainImageHeight: "202",
        label: "Fish Burger",
        price: 5.59,
        km: 4.97,
        time: 21
    },
    {
        mainImage: ramen,
        mainImageAlt: "ramen",
        mainImageWidth: "224",
        mainImageHeight: "224",
        label: "Japan Ramen",
        price: 5.59,
        km: 4.97,
        time: 21
    },
    {
        mainImage: rice,
        mainImageAlt: "rice",
        mainImageWidth: "218",
        mainImageHeight: "208",
        label: "Fish Burger",
        price: 5.59,
        km: 4.97,
        time: 21
    },
]