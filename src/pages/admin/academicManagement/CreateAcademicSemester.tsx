import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { monthOptions } from "../../../constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schemas/academicManagement.schema";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../types/global.type";
import { TAcademicSemester } from "../../../types/academicManagement.type";


const nameOptions = [
    {
        value: "01",
        label: "Autumn",
    },
    {
        value: "02",
        label: "Summer",
    },
    {
        value: "03",
        label: "Fall",
    },
]

const CreateAcademicSemester = () => {

    const [addAcademicSemester] = useAddAcademicSemesterMutation();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {

        const toastId = toast.loading("Creating...")

        const name = nameOptions[Number(data.name) - 1].label;

        const semesterData = {
            name,
            code: data.name,
            year: data.year,
            startMonth: data.startMonth,
            endMonth: data.endMonth,
        }

        try {
            console.log(semesterData)
            const res = await addAcademicSemester(semesterData) as TResponse<TAcademicSemester>;
            console.log("res", res)

            if (res.error) {
                toast.error(res.error.data.message, { id: toastId })
            }
            else {
                toast.success("Academic Semester Created Successfully", { id: toastId })
            }

        } catch (error) {
            toast.error('Something went wrong', { id: toastId })
        }
    }



    const currentYear = new Date().getFullYear();
    const yearOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => ({
        value: String(currentYear + number),
        label: String(currentYear + number),
    }))


    return (
        <Flex align="center" justify="center">
            <Col span={12}>
                <PHForm onSubmit={onSubmit} resolver={zodResolver(academicSemesterSchema)}>
                    <PHSelect label="Name" name="name" options={nameOptions} />
                    <PHSelect label="Year" name="year" options={yearOptions} />
                    <PHSelect label="Start Month" name="startMonth" options={monthOptions} />
                    <PHSelect label="End Month" name="endMonth" options={monthOptions} />
                    <Button htmlType="submit">Submit</Button>
                </PHForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;