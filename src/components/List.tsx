import * as React from "react";
import Item, { ItemType } from "./Item";

const List = ({ items }: { items: ItemType[] }) => {
    return (
        <ul className="sm:grid sm:grid-cols-3 sm:gap-6 w-full p-10">
            {items &&
                items.map((item: any) => (
                    <Item
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                    />
                ))}
        </ul>
    );
};

export default List;
