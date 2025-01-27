import { Button, Table, TableColumnsType } from "antd";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { useGetAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagement.api";


type TTableData = Pick<TAcademicSemester, "name">

const AcademicFaculty = () => {
    const { data: semesterData, isLoading, isFetching } = useGetAcademicFacultiesQuery(undefined)

    console.log({ isLoading, isFetching })

    const tableData = semesterData?.data?.map(({ _id, name }) => ({
        key: _id, name
    }))

    const columns: TableColumnsType<TTableData> = [
        {
            title: 'Name',
            dataIndex: 'name',
            showSorterTooltip: { target: 'full-header' },
        },
        {
            title: 'Action',
            key: 'action',
            render: () => {
                return (
                    <div>
                        <Button>Update</Button>
                    </div>
                )
            }
        },
    ];

    return (
        <Table<TTableData>
            loading={isFetching}
            columns={columns}
            dataSource={tableData}
            showSorterTooltip={{ target: 'sorter-icon' }}
        />
    );
};

export default AcademicFaculty;