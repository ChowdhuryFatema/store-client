/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Slider, Select, Checkbox } from "antd";
import { useGetAllProductsQuery } from "../redux/features/products/products.api";

type TProductFilterProps = {
  onFilterApply: any;
  onReset: any;
};

const FilterComponent = ({ onFilterApply, onReset }: TProductFilterProps) => {
  const { data: products } = useGetAllProductsQuery(undefined);

  const [localFilters, setLocalFilters] = useState({
    price: [0, 5000],
    model: "",
    brand: "",
    category: "",
    inStock: undefined,
    sortBy: "",
    perPage: 6,
  });

  useEffect(() => {
    const filtersToApply = { ...localFilters };
    if (filtersToApply.inStock === undefined) {
      delete filtersToApply.inStock;
    }
    onFilterApply(filtersToApply);
  }, [localFilters, onFilterApply]);

  const handleChange = (key: string, value: any) => {
    setLocalFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setLocalFilters({
      price: [0, 5000],
      model: "",
      brand: "",
      category: "",
      inStock: undefined,
      sortBy: "",
      perPage: 6,
    });
    onReset();
  };

  const brandOption = Array.from(
    new Set(products?.data?.map((product) => product.brand))
  ).map((brand) => ({
    label: brand,
    value: brand,
  }));

  const modelOption = Array.from(
    new Set(products?.data?.map((product) => product.model))
  ).map((model) => ({
    label: model,
    value: model,
  }));

  return (
    <div className="!space-y-3">
      <div className="!space-y-2">
        <label>Price Range</label>
        <Slider
          range
          min={0}
          max={5000}
          value={localFilters.price}
          onChange={(value) => handleChange("price", value)}
        />
      </div>

      <div>
        <label className="!mb-4">Model</label>
        <Select
          placeholder="Select model"
          style={{ width: "100%" }}
          value={localFilters.model}
          onChange={(value) => handleChange("model", value)}
          options={modelOption}
        />
      </div>

      <div>
        <label>Brand</label>
        <Select
          placeholder="Select brand"
          style={{ width: "100%" }}
          value={localFilters.brand}
          onChange={(value) => handleChange("brand", value)}
          options={brandOption}
        />
      </div>

      <div>
        <label>Category</label>
        <ul className="!space-y-2">
          {Array.from(
            new Set(products?.data?.map((product) => product.category))
          ).map((category) => (
            <li key={category} className="flex items-center gap-2">
              <input
                type="radio"
                name="category" // ✅ এই লাইনটি যোগ করুন
                className="accent-orange-600 !rounded"
                checked={localFilters.category === category}
                onChange={() => handleChange("category", category)}
              />
              <span>{category}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Checkbox
          checked={localFilters.inStock === true}
          onChange={(e) =>
            handleChange("inStock", e.target.checked ? true : undefined)
          }
        >
          In Stock Only
        </Checkbox>
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={handleReset}
          className="border border-gray-400 px-4 py-1 rounded hover:bg-gray-100"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
