import { Button, Card, Input, Typography } from 'antd';
import { useFormik } from 'formik';
import { LoginForm as LoginFormProps } from '../../types';
import { initialValues, validationSchema } from './loginFormSchema';

interface Props {
    onSubmit: (values: LoginFormProps) => void
}

const LoginForm = ({onSubmit} : Props) => {
    
    const handleSubmit = (values: LoginFormProps) => {
        onSubmit(values)
    }

    const formMik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })

    return(
        <Card title={'Login'} style={{width: 350}}>
            <form onSubmit={formMik.handleSubmit}>
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
                <Button type='primary' htmlType='submit'>Login</Button>
            </form>
        </Card>
    )
}

export default LoginForm