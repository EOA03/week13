import { Button, Card, Col, Select, Row, Input, Form as AntForm } from 'antd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { CategoryList, CategoryForm as CategoryFormType } from "../../types";
import { Link } from 'react-router-dom';

interface Props {
    onSubmit: (values: CategoryFormType) => void;
    category?: CategoryList
    content: string;
}
const initialValues = {
    name: '',
    is_active: false
}

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Please Enter the Name'),
    is_active: Yup.boolean().oneOf([true, false], 'Please Select the Status').required('Please Select the Status!')
})

const CategoryForm = ({onSubmit, category, content}: Props) => {
    const handleCategory = async (values: CategoryFormType) => {
        onSubmit(values)
    }
    
    return (
        <Row>
        <Col span={8}></Col>
        <Col span={8}>
            <Card>
                <Formik 
                initialValues={category ?? initialValues}
                validationSchema={validationSchema}
                onSubmit={handleCategory}>
                    {(formikProps) => (
                    <Form name="basic" autoComplete="off" >
                        <div>
                            <Link to={'/category'}>Back</Link>
                        </div>


                        <AntForm.Item label="Name" name="name">
                            <div>
                                <Field name="name" as={Input} placeholder="Enter Name" />
                        
                                <span>
                                    <ErrorMessage name="name" />
                                </span>
                            </div>

                        </AntForm.Item>

                        <AntForm.Item label="Status" name="is_active">
                            <div>
                                <Select placeholder="Select Status"   onChange={(value) => {
                                formikProps.setFieldValue("is_active", value);
                                }} 
                                value={formikProps.values.is_active}
                                >
                                <Select.Option value="true">Active</Select.Option>
                                <Select.Option value="false">Deactive</Select.Option>
                                </Select>
                                
                                <div>
                                    <ErrorMessage name="is_active" />
                                </div>
                            </div>
                        </AntForm.Item>

                        <AntForm.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <div>
                                <Button type="primary" htmlType="submit">
                                    Create
                                </Button>
                            </div>
                        </AntForm.Item>
                    </Form>
                    )}
                </Formik>
            </Card>
        </Col>
        </Row>
    
    )
      
}

export default CategoryForm