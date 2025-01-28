import { useParams } from "react-router-dom";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement.api";


const StudentDetails = () => {

    const {studentId} = useParams();
    console.log(studentId)
    const {data: studentsData} = useGetAllStudentsQuery(undefined);

    

    return (
        <div>
            
        </div>
    );
};

export default StudentDetails;