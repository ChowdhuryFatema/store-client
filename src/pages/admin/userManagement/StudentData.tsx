import { Button, Pagination, Space, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TQueryParam } from "../../../types/global.type";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement.api";
import { TStudent } from "../../../types";
import { Link } from "react-router-dom";


type TTableData = Pick<TStudent,
    "fullName" | "id" | "email" | "contactNo"
>

const StudentData = () => {

    const [params, setParams] = useState<TQueryParam[]>([]);
    const [page, setPage] = useState(2);
    const { data: studentsData, isFetching } = useGetAllStudentsQuery([
        // {name: "limit", value: 4},
        { name: "page", value: page },
        { name: "sort", value: "id" }, ...params])

    console.log("stdata", studentsData)

    const metaData = studentsData?.meta;

    const tableData = studentsData?.data?.map(({ _id, fullName, id, email, contactNo }) => ({
        key: _id, fullName, id, email, contactNo
    }))

    const columns: TableColumnsType<TTableData> = [
        {
            title: 'Name',
            dataIndex: 'fullName',
            showSorterTooltip: { target: 'full-header' },
        },
        {
            title: 'Roll No',
            dataIndex: 'id',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Contact No',
            dataIndex: 'contactNo',
        },
        {
            title: 'Action',
            key: 'action',
            render: (item) => {
                console.log("item", item)
                return (
                    <Space>
                        <Link to={`/admin/student-data/${item.key}`}>
                            <Button>Details</Button>
                        </Link>
                        <Button>Update</Button>
                        <Button>Block</Button>
                    </Space>
                )
            },
            width: '1%'
        },
    ];

    // const data = [
    //     {
    //         key: '1',
    //         name: 'John Brown',
    //         age: 32,
    //         address: 'New York No. 1 Lake Park',
    //     },
    //     {
    //         key: '2',
    //         name: 'Jim Green',
    //         age: 42,
    //         address: 'London No. 1 Lake Park',
    //     },
    //     {
    //         key: '3',
    //         name: 'Joe Black',
    //         age: 32,
    //         address: 'Sydney No. 1 Lake Park',
    //     },
    //     {
    //         key: '4',
    //         name: 'Jim Red',
    //         age: 32,
    //         address: 'London No. 2 Lake Park',
    //     },
    // ];

    const onChange: TableProps<TTableData>['onChange'] = (
        _pagination,
        filters,
        _sorter,
        extra
    ) => {
        console.log("filter", filters, extra);
        if (extra.action === 'filter') {
            const queryParams: TQueryParam[] = [];

            filters.name?.forEach(item => queryParams.push({ name: 'name', value: item }))
            filters.year?.forEach(item => queryParams.push({ name: 'year', value: item }))
            setParams(queryParams);
        }
    };



    // if (isLoading) {
    //     return <p>Loading...........</p>
    // }

    return (
        <>
            <Table<TTableData>
                loading={isFetching}
                columns={columns}
                dataSource={tableData}
                onChange={onChange}
                pagination={false}
                showSorterTooltip={{ target: 'sorter-icon' }}
            />
            <Pagination onChange={(value) => setPage(value)} defaultCurrent={page} total={metaData?.total} pageSize={metaData?.limit} />
        </>
    );
};

export default StudentData;