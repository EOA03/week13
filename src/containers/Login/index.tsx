import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../../types';
import { LoginForm as FormLogin } from '../../components';

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = async (values: LoginForm) => {
    console.log(`Successfully logged in`, values)
    const apiUrl = import.meta.env.VITE_REACT_APP_LOGIN_URL;

    try {
        const response = await fetch (apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        console.log(response)
        const data = await response.json()

        if (response.ok){
            const token = data.data.token

            localStorage.setItem('authToken', token)
            navigate('/category');
        } else {
            alert(data.errors)
        }
    } catch (error) {
        console.error(error)
        alert("Login Failed")
    }

  }

  return (
    <FormLogin onSubmit={handleLogin} />

  );
};

export default Login;