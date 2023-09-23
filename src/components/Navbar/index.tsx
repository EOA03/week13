import { Menu } from "antd"
import type { MenuProps } from "antd";
import { LoginOutlined, UserAddOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const items: MenuProps['items'] = [
    {
        label: 'Login',
        key: '/login',
        icon: <LoginOutlined />
    },
    {
        label: 'Register',
        key: '/register',
        icon: <UserAddOutlined />
    }
]

const Navbar = () => {

    const navigate = useNavigate()

    const onClick: MenuProps['onClick'] = (e) => {
        navigate(e.key)
    }

    return(
        <Menu onClick={onClick} items={items} mode="horizontal" />
    )
}

export default Navbar