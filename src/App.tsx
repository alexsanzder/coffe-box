import * as React from "react";
import Header from "./components/Header";
import List from "./components/List";
import Search from "./components/Search";
import { ItemType } from "./components/Item";

function App() {
    const [items, setItems] = React.useState<ItemType[]>([]);
    const [suggestions, setSuggestions] = React.useState<ItemType[]>(items);
    const [value, setValue] = React.useState<string>("");

    React.useEffect(() => {
        (async () => {
            const data = await (
                await fetch("https://fakestoreapi.com/products")
            ).json();
            setItems(data);
            setSuggestions(data);
        })();
    }, []);

    const getFilteredRows = (items: ItemType[], filterKey: string) => {
        return items.filter(
            (item) =>
                item?.title.toLowerCase().indexOf(filterKey.toLowerCase()) > -1
        );
    };

    const handleInputChange = (e: { target: { value: any } }) => {
        const { value } = e.target;
        setValue(value);
        const suggest = getFilteredRows(items, value);
        setSuggestions(suggest);
    };

    return (
        <div className="w-full mx-auto bg-white">
            <Header />
            <div className="flex flex-col items-center justify-start">
                <Search value={value} handleOnChange={handleInputChange} />
                <List items={suggestions} />
            </div>
        </div>
    );
}

export default App;
