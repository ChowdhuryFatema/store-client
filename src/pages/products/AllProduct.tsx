import { Pagination } from "antd";
import { useGetAllProductsQuery } from "../../redux/features/products/products.api";
import { TProduct } from "../../types/product.type";
import SingleProduct from "./SingleProduct";
import { useState } from "react";
import FilterComponent from "../../components/FilterComponent";
import SearchComponent from "../../components/SearchComponent";
import LoadingSpinner from "../../components/LoadingSpinner";

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
                { name: "inStock", value: filters.inStock ? "true" : "" },
            ]
            : []),
    ];



    const { data: products, isLoading } = useGetAllProductsQuery(queryParams);
    const metaData = products?.meta;

    return (
        <>
            {
                isLoading ? <LoadingSpinner /> :
                    <div className="w-[90%] max-w-[1400px] px-5 !mx-auto !my-10">
                        <div className="flex justify-center items-center">
                            <div className="max-w-4xl mx-auto">
                                <h2  data-aos="fade-down" data-aos-duration="500" className="merienda text-center font-semibold text-3xl md:text-4xl lg:text-5xl text-orange-500">All Products</h2>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-5 justify-between !my-5 md:flex-row flex-col">
                            {/* Move FilterComponent above SearchComponent on mobile */}
                            <div className="order-2 md:order-1">
                                <SearchComponent
                                    searchValue={searchValue}
                                    setSearchValue={setSearchValue}
                                    data={products}
                                />
                            </div>
                            <div className="order-1 md:order-2">
                                <FilterComponent
                                    onFilterApply={setFilters}
                                    onReset={() => setFilters(null)}
                                />
                            </div>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                            {products?.data?.map((product: TProduct) => <SingleProduct key={product._id} product={product} />)}
                        </div>
                        <div className="!mt-5">
                            <Pagination
                                align="end"
                                defaultCurrent={page}
                                total={metaData?.total}
                                pageSize={metaData?.limit}
                                onChange={(value) => setPage(value)} />
                        </div>
                    </div>
            }
        </>
    );
};

export default AllProduct;