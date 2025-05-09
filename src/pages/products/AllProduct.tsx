import { Pagination, Select } from "antd";
import { useGetAllProductsQuery } from "../../redux/features/products/products.api";
import { TProduct } from "../../types/product.type";
import SingleProduct from "./SingleProduct";
import { useState } from "react";
import FilterComponent from "../../components/FilterComponent";
import SearchComponent from "../../components/SearchComponent";
import SingleProductSkeleton from "./SingleProductSkeleton";
import { Link } from "react-router-dom";
import bikeImg from "./../../assets/images/banner4.jpg";
import { Option } from "antd/es/mentions";
import { FaList } from "react-icons/fa";
import { LuLayoutGrid } from "react-icons/lu";
import SingleProductListView from "./SingleProductListView";

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
  const [sortField, setSortField] = useState("");
  const [isGrid, setIsGrid] = useState(true);

  const queryParams = [
    { name: "page", value: page },
    { name: "searchTerm", value: searchValue },
    { name: "limit", value: 9 },
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

  const sortedProducts = [...(products?.data || [])];

  if (sortField) {
    sortedProducts.sort((a, b) => {
      if (sortField === "price") {
        return a.price - b.price;
      } else if (sortField === "name") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  }

  return (
    <>
      {/* Hero Banner */}
      <div className="relative w-full h-[40vh]">
        <img
          src={bikeImg}
          alt="Home"
          className="object-cover z-0 w-full h-[40vh]"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 z-20 text-center">
          <p className="text-white text-lg">Your ride starts here</p>
          <h1 className="text-2xl md:text-5xl text-white font-bold">
            Explore All Bikes
          </h1>
          <div className="!text-white mt-5 flex justify-center items-center gap-2 !text-sm lg:text-xl">
            <Link to="/">
              <span className="!text-white">Home</span>
            </Link>
            <span>/</span>
            <span className="text-gray-300">Bikes</span>
          </div>
        </div>
      </div>
      <div className="w-[90%] max-w-[1400px] px-5 !mx-auto !my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between !mb-6 items-center">
          <div>
            <h2 className="text-2xl font-bold">
              Your Next Favorite Bike Awaits
            </h2>
            <p>Showing approx 9 awesome bikes ready to ride...</p>
          </div>

          <div className="flex justify-end gap-2">
            <div className="flex items-center gap-3">
              <h2 className="!text-sm">Sort By:</h2>
              <Select
                placeholder="Sort By"
                className="w-[90px] !h-7 rounded-none"
                onChange={(value) => setSortField(value)}
                defaultValue=""
                allowClear
              >
                <Option value="price">Price</Option>
                <Option value="name">Name</Option>
              </Select>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <h2 className="!text-sm">View:</h2>
              <button
                className="bg-transparent !text-gray-700 hover:bg-transparent !p-0 cursor-pointer"
                onClick={() => setIsGrid(true)}
              >
                <LuLayoutGrid size={24} />
              </button>
              <button
                className="bg-transparent !text-gray-700 hover:bg-transparent !p-0 cursor-pointer"
                onClick={() => setIsGrid(false)}
              >
                <FaList size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          <div className="col-span-1">
            <div>
              <SearchComponent
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                data={products}
              />
            </div>
            <div>
              <FilterComponent
                onFilterApply={setFilters}
                onReset={() => setFilters(null)}
              />
            </div>
          </div>

          <div className="col-span-4">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {Array.from({ length: 9 }).map((_, index) => (
                  <SingleProductSkeleton key={index} />
                ))}
              </div>
            ) : (
              <>
                {isGrid ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {sortedProducts?.map((product: TProduct) => (
                      <SingleProduct key={product._id} product={product} />
                    ))}
                  </div>
                ) : (
                  <div>
                    {sortedProducts?.map((product: TProduct) => (
                      <SingleProductListView product={product} />
                    ))}
                  </div>
                )}
                <div className="!mt-5">
                  <Pagination
                    align="end"
                    defaultCurrent={page}
                    total={metaData?.total}
                    pageSize={metaData?.limit}
                    onChange={(value) => setPage(value)}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProduct;
