// import { FieldValues, SubmitHandler } from "react-hook-form";
// import PHForm from "../../../components/form/PHForm";
// import { Button, Col, Flex } from "antd";
// import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/academicManagement.api";
// import { toast } from "sonner";
// import { TResponse } from "../../../types/global.type";
// import PHInput from "../../../components/form/PHInput";



// const CreateAcademicFaculty = () => {

//     const [addAcademicFaculty] = useAddAcademicFacultyMutation();

//     const onSubmit: SubmitHandler<FieldValues> = async (data) => {

//         const toastId = toast.loading("Creating...")

//         console.log(data)

//         const facultyData = {
//             name: data.name
//         }

//         try {
//             console.log(facultyData)
//             const res = await addAcademicFaculty(facultyData) as TResponse<any>;
//             console.log("res", res)

//             if (res.error) {
//                 toast.error(res.error.data.message, { id: toastId })
//             }
//             else {
//                 toast.success("Academic Faculty Created Successfully", { id: toastId })
//             }

//         } catch (error) {
//             toast.error('Something went wrong', { id: toastId })
//         }
//     }



//     return (
//         <Flex align="center" justify="center">
//             <Col span={12}>
//                 <PHForm onSubmit={onSubmit}>
//                     <PHInput type="text" label="Name" name="name" />
//                     <Button htmlType="submit">Submit</Button>
//                 </PHForm>
//             </Col>
//         </Flex>
//     );
// };

// export default CreateAcademicFaculty;



const CreateAcademicFaculty = () => {
    return (
        <div>
            
        </div>
    );
};

export default CreateAcademicFaculty;