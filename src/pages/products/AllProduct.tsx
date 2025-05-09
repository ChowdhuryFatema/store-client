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
  const [sortField, setSortField] = useState(""); // "price" or "name"

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
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="w-[90%] max-w-[1400px] px-5 !mx-auto !my-10">
          <div className="flex justify-center items-center">
            <div className="max-w-4xl mx-auto">
              <h2
                data-aos="fade-down"
                data-aos-duration="500"
                className="merienda text-center font-semibold text-3xl md:text-4xl lg:text-5xl text-orange-500"
              >
                All Products
              </h2>
            </div>
          </div>
          <div className="flex justify-end mb-4 gap-2">
            <select
              className="border p-2 rounded"
              onChange={(e) => setSortField(e.target.value)}
              defaultValue=""
            >
              <option value="">Sort By</option>
              <option value="price">Price</option>
              <option value="name">Name</option>
            </select>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {sortedProducts?.map((product: TProduct) => (
                  <SingleProduct key={product._id} product={product} />
                ))}
              </div>
              <div className="!mt-5">
                <Pagination
                  align="end"
                  defaultCurrent={page}
                  total={metaData?.total}
                  pageSize={metaData?.limit}
                  onChange={(value) => setPage(value)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AllProduct;
