import * as React from "react";

export interface ItemType {
    id?: number;
    title: string;
    price: number;
    image: string;
}
const Item = ({ image, title, price }: ItemType) => (
    <li className=" hover:cursor-pointer hover:bg-gray-50 sm:p-4 sm:mt-0 flex items-center justify-start w-full py-4 mt-4">
        <img className="w-20 h-20 mr-5" src={image} alt={title} />
        <div>
            <h2 className=" text-lg font-bold">{title}</h2>
            <span className="text-sm text-gray-500">{`${price} €`}</span>
        </div>
    </li>
);

export default Item;
