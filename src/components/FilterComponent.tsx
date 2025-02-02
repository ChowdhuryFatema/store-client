import { useState } from "react";
import { Dropdown, Menu, Slider, Select, Checkbox, Button, Space } from "antd";
import { useGetAllProductsQuery } from "../redux/features/products/products.api";

type TProductFilterProps = {
    onFilterApply: any;
    onReset: any;
}

const FilterComponent = ({ onFilterApply, onReset }: TProductFilterProps) => {


    const { data: products } = useGetAllProductsQuery(undefined);

    const [localFilters, setLocalFilters] = useState({
        price: [0, 5000], // Price range
        model: "",
        brand: "",
        category: "",
        inStock: undefined,
    });


    const brandOption = Array.from(
        new Set(products?.data?.map(product => product.brand))
    ).map(brand => ({
        label: brand,
        value: brand,
    }));

    const modelOption = Array.from(
        new Set(products?.data?.map(product => product.model))
    ).map(model => ({
        label: model,
        value: model,
    }));

    const categoryOption = Array.from(
        new Set(products?.data?.map(product => product.category))
    ).map(category => ({
        label: category,
        value: category,
    }));

    const handleChange = (key: string, value: any) => {
        setLocalFilters((prev) => ({ ...prev, [key]: value }));
    };

    const handleApplyFilters = () => {
        const filtersToApply = { ...localFilters };
        if (filtersToApply.inStock === undefined) {
            delete filtersToApply.inStock;
        }
        onFilterApply(filtersToApply);
    };

    const handleReset = () => {
        setLocalFilters({
            price: [0, 5000],
            model: "",
            brand: "",
            category: "",
            inStock: undefined,
        });
        onReset();
    };

    const menu = (
        <Menu style={{ padding: "16px", width: "300px" }}>
            <div>
                <label>Price Range:</label>
                <Slider
                    range
                    min={0}
                    max={5000}
                    value={localFilters.price}
                    onChange={(value) => handleChange("price", value)}
                />
            </div>
            <div>
                <label>Model:</label>
                <Select
                    placeholder="Select model"
                    style={{ width: "100%" }}
                    value={localFilters.model}
                    onChange={(value) => handleChange("model", value)}
                    options={modelOption}
                />
            </div>
            <div>
                <label>Brand:</label>
                <Select
                    placeholder="Select brand"
                    style={{ width: "100%" }}
                    value={localFilters.brand}
                    onChange={(value) => handleChange("brand", value)}
                    options={brandOption}
                />
            </div>
            <div>
                <label>Category:</label>
                <Select
                    placeholder="Select category"
                    style={{ width: "100%" }}
                    value={localFilters.category}
                    onChange={(value) => handleChange("category", value)}
                    options={categoryOption}
                />
            </div>
            <div>
                <Checkbox
                    checked={localFilters.inStock === true}
                    onChange={(e) => handleChange("inStock", e.target.checked ? true : undefined)}
                >
                    In Stock Only
                </Checkbox>
            </div>
            <div className="flex justify-between mt-4">
                <Button onClick={handleReset}>Reset</Button>
                <Button type="primary" onClick={handleApplyFilters}>
                    Apply Filters
                </Button>
            </div>
        </Menu>
    );

    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <Button>
                <Space>Filter Products</Space>
            </Button>
        </Dropdown>
    );
};

export default FilterComponent;
