import { useEffect, useState, useRef } from "react";
import { Input, Modal } from "antd";
import { SearchOutlined } from "@ant-design/icons";

type SearchComponentProps = {
    searchValue: string;
    setSearchValue: (value: string) => void;
    data: any; // Assuming data is passed as a prop
};


export default function SearchComponent({ searchValue, data, setSearchValue }: SearchComponentProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [filteredData, setFilteredData] = useState<any[]>([]);
    const inputRef = useRef<HTMLInputElement | null>(null); // Reference to input element 

    // Search only when pressing Enter
    const handleSearch = (query: string) => {
        if (!query.trim()) return;
        setSearchValue(query); // ✅ Updates search value in AllProduct
        setIsModalOpen(false); // Close the modal after searching
    };

    // Function to filter data based on searchText
    const getFilteredResults = (data: any, searchText: string) => {
        if (!searchText.trim()) return [];
        return data?.filter((item: any) =>
            ["name", "brand", "category"].some((key) =>
                item[key]?.toLowerCase().includes(searchText.toLowerCase())
            )
        );
    };

    // Update filteredData when searchText changes
    useEffect(() => {
        const filteredResults = getFilteredResults(data?.data, searchText);
        setFilteredData(filteredResults); // Set the filtered data in the state
    }, [searchText, data]); // Re-run whenever searchText or data changes

    // Set focus to the input when modal opens
    useEffect(() => {
        if (isModalOpen && inputRef.current) {
            inputRef.current.focus(); // Focus the input element when modal is open
        }
    }, [isModalOpen]);

    // Highlight matched text in the results
    const highlightMatchedText = (text: string, searchText: string) => {
        if (!searchText.trim()) return text;

        const regex = new RegExp(`(${searchText})`, "gi"); // Case-insensitive match
        return text.replace(regex, "<span class='highlight'>$1</span>");
    };

    // Reset search and filtered data
    const resetSearch = () => {
        setSearchText("");
        setSearchValue("");
    };


    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.ctrlKey && event.key.toLowerCase() === "k") {
                event.preventDefault(); // Prevent browser's search bar
                setIsModalOpen(true);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);


    return (
        <div className="w-full max-w-xl mx-auto m-24">
            {/* Click to Open Search Modal */}
            <div className="flex relative">
                <Input
                    size="large"
                    placeholder="Search..."
                    prefix={<SearchOutlined />}
                    suffix={<span onClick={() => setIsModalOpen(true)} 
                    className="text-gray-500 text-xs cursor-pointer">⌘K</span>}
                    onClick={() => setIsModalOpen(true)}
                    value={searchValue}
                    readOnly
                />
                {/* Reset Search Button */}
                {/* <div onClick={resetSearch} className="mt-2 absolute right-10 top-[13px]">
                    X
                </div> */}
            </div>

            {/* Search Modal */}
            <Modal
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={null}
                centered
                closeIcon={null}
            >
                <div className="flex items-center gap-2">
                    {/* <SearchOutlined className="text-gray-500 text-lg" /> */}
                    <Input
                        prefix={<SearchOutlined />}
                        style={{ outline: 'none', border: 'none' }}
                        size="large"
                        placeholder="What are you looking for?"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        autoFocus
                        suffix={
                            searchText && (
                                <span
                                    className="cursor-pointer text-gray-500 text-xs hover:text-black transition"
                                    onClick={resetSearch}
                                >
                                    ✖
                                </span>
                            )
                        }
                    />

                    <span
                        className="cursor-pointer bg-gray-100 px-2 py-1 rounded-md text-gray-500 text-xs"
                        onClick={() => setIsModalOpen(false)}
                    >
                        esc
                    </span>
                </div>

                {/* Rendering the filtered data with highlighted matched text */}
                {filteredData.length > 0 && (
                    <div className="mt-3">
                        {filteredData.map((item, index) => (
                            <div
                                key={index}
                                className="p-3 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleSearch(item.name)} // Use the item's name for search
                                dangerouslySetInnerHTML={{
                                    __html: ` 
                                        <strong>${highlightMatchedText(item.name, searchText)}</strong><br />
                                        Brand: ${highlightMatchedText(item.brand, searchText)}<br />
                                        Category: ${highlightMatchedText(item.category, searchText)}
                                    `,
                                }}
                            />
                        ))}
                    </div>
                )}

                {filteredData.length === 0 && searchText && (
                    <div className="text-center text-gray-500 p-3">
                        No results found
                    </div>
                )}


            </Modal>
        </div>
    );
}
