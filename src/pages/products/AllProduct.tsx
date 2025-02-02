import { Pagination } from "antd";
import { useGetAllProductsQuery } from "../../redux/features/products/products.api";
import { TProduct } from "../../types/product.type";
import SingleProduct from "./SingleProduct";
import { useState } from "react";
import FilterComponent from "../../components/FilterComponent";
import SearchComponent from "../../components/SearchComponent";

type FiltersType = {
    price?: number[];
    model?: string;
    brand?: string;
    category?: string;
    inStock?: boolean;
};

const AllProduct = () => {
    // const [params, setParams] = useState<TQueryParam[]>([]);


    const [filters, setFilters] = useState<FiltersType | null>(null);
    const [searchValue, setSearchValue] = useState("");
    const [page, setPage] = useState(1);

    const queryParams = [
        { name: "page", value: page },
        { name: "searchTerm", value: searchValue },
        ...(filters
            ? [
                { name: "price", value: filters.price?.join(",") },
                { name: "model", value: filters.model },
                { name: "brand", value: filters.brand },
                { name: "category", value: filters.category },
                { name: "inStock", value: filters.inStock ? "true" : ""  },
            ]
            : []),
    ];



    const { data: products } = useGetAllProductsQuery(queryParams);
    const metaData = products?.meta;

    return (
        <div>
            <div>
                <FilterComponent
                    onFilterApply={setFilters}
                    onReset={() => setFilters(null)}
                />
                <SearchComponent
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    data={products}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {products?.data?.map((product: TProduct) => <SingleProduct key={product._id} product={product} />)}
            </div>
            <Pagination
                align="end"
                defaultCurrent={page}
                total={metaData?.total}
                pageSize={metaData?.limit}
                onChange={(value) => setPage(value)} />
        </div>
    );
};

export default AllProduct;