import { useState } from "react";
import { Button, Modal, Pagination, Table, TableColumnsType } from "antd";
import { useDeleteProductMutation, useGetAllProductsQuery } from "../../redux/features/products/products.api";
import { TProduct } from "../../types/product.type";
import { TQueryParam } from "../../types";
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { confirm } = Modal;

type TTableData = Pick<TProduct, "name" | "brand" | "price" | "model" | "rating">;

const ProductManagement = () => {
    const [params, setParams] = useState<TQueryParam[]>([]);
    const [page, setPage] = useState(1);
    const { data: products, isLoading, isFetching, refetch } = useGetAllProductsQuery([
        { name: "page", value: page },
        // { name: "sort", value: "id" },
        ...params
    ]);

    const [deleteProduct, { error }] = useDeleteProductMutation();

    const metaData = products?.meta;

    const showDeleteConfirm = (productId: string) => {
        confirm({
            title: "Are you sure you want to delete this product?",
            icon: <ExclamationCircleOutlined />,
            content: "This action cannot be undone.",
            okText: "Yes, Delete",
            okType: "danger",
            cancelText: "Cancel",
            onOk: async () => {
                await deleteProduct(productId);
                refetch();
            }
        });
    };

    const tableData = products?.data?.map(({ _id, name, brand, price, model, rating }) => ({
        key: _id, name, brand, price, model, rating
    }));

    const columns: TableColumnsType<TTableData> = [
        { title: 'Name', dataIndex: 'name', showSorterTooltip: { target: 'full-header' } },
        { title: 'Model', dataIndex: 'model' },
        { title: 'Brand', dataIndex: 'brand' },
        { title: 'Rating', dataIndex: 'rating' },
        { title: 'Price', dataIndex: 'price' },
        {
            title: 'Action',
            key: 'action',
            render: (item) => (
                <div>
                    <Link to={`/dashboard/update-product/${item.key}`}>
                        <Button className="!mr-2">
                            <EditOutlined className="!text-orange-500 !font-extrabold text-lg" />
                        </Button>
                    </Link>
                    <Button onClick={() => showDeleteConfirm(item.key)}>
                        <DeleteOutlined className="!text-orange-500 !font-extrabold text-lg" />
                    </Button>
                </div>
            )
        },
    ];

    return (
        <div>
            <Table<TTableData>
                loading={isFetching}
                columns={columns}
                dataSource={tableData}
                pagination={false}
                showSorterTooltip={{ target: 'sorter-icon' }}
            />
            <Pagination
                onChange={(value) => setPage(value)}
                defaultCurrent={page} total={metaData?.total}
                pageSize={metaData?.limit} />
        </div>
    );
};

export default ProductManagement;
