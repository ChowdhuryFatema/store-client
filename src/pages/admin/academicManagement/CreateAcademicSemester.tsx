import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";


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

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        // console.log("data", data)

        const name = nameOptions[Number(data.name) - 1].label;

        const semesterData = {
            name,
            code: data.name,
            year: data.year,
        }

        console.log(semesterData)
    }

    const currentYear = new Date().getFullYear();
    const yearOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => ({
        value: String(currentYear + number),
        label: String(currentYear + number),
    }))

    // console.log(yearOptions)

    return (
        <Flex align="center" justify="center">
            <Col span={12}>
                <PHForm onSubmit={onSubmit}>
                    <PHSelect label="Name" name="name" options={nameOptions} />
                    <PHSelect label="Year" name="year" options={yearOptions} />
                    <PHSelect label="Start Month" name="startMonth" options={nameOptions} />
                    <PHSelect label="End Month" name="endMonth" options={nameOptions} />
                    <Button htmlType="submit">Submit</Button>
                </PHForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;