import * as React from "react";

const Search = ({
    value,
    handleOnChange,
}: {
    value: string;
    handleOnChange: (e: any) => void;
}) => {
    return (
        <div className=" w-full px-8 pt-8 pb-4">
            <input
                className="focus:ring-[#B7791F] focus:outline-none focus:ring-2 focus:ring-opacity-90 w-full px-4 py-3 border-2 rounded-lg"
                placeholder="Quick search for anything..."
                value={value}
                onChange={(e) => handleOnChange(e)}
            />
        </div>
    );
};

export default Search;
