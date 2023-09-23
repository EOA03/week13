import { Button, Card, Input, Typography } from 'antd';
import { useFormik } from 'formik';
import { RegisterForm as RegisterFormProps } from '../../types';
import { initialValues, validationSchema } from './registerFormSchema'

interface Props {
    onSubmit: (values: RegisterFormProps) => void
}

const RegisterForm = ({onSubmit} : Props) => {
    
    const handleSubmit = (values: RegisterFormProps) => {
        onSubmit(values)
    }

    const formMik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })

    return(
        <Card title={'Register'} style={{width: 350}}>
            <form onSubmit={formMik.handleSubmit}>
                <div>
                    <Typography.Paragraph>{'Name'}</Typography.Paragraph>
                    <Input name='name'
                        value={formMik.values.name}
                        onChange={formMik.handleChange('name')}
                        status={formMik.errors.name && 'error'} />
                    {formMik.errors.name && (
                        <Typography.Paragraph>{formMik.errors.name}</Typography.Paragraph>
                    )}
                </div>
                <div>
                    <Typography.Paragraph>{'Email'}</Typography.Paragraph>
                    <Input name='email'
                        value={formMik.values.email}
                        onChange={formMik.handleChange('email')}
                        status={formMik.errors.email && 'error'} />
                    {formMik.errors.email && (
                        <Typography.Paragraph>{formMik.errors.email}</Typography.Paragraph>
                    )}
                </div>
                <div>
                    <Typography.Paragraph>{'Password'}</Typography.Paragraph>
                    <Input name='password'
                        value={formMik.values.password}
                        onChange={formMik.handleChange('password')}
                        status={formMik.errors.password && 'error'} />
                    {formMik.errors.password && (
                        <Typography.Paragraph>{formMik.errors.password}</Typography.Paragraph>
                    )}
                </div>
                <Button type='primary' htmlType='submit'>Register</Button>
            </form>
        </Card>
    )
}

export default RegisterForm