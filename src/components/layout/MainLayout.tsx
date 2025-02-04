import { Button, Layout } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/features/auth/authSlice';
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import CartDrawer from '../cartDrawer';
import { useState } from 'react';

const { Header, Content } = Layout;

const MainLayout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <Layout style={{ height: '100vh' }}>
            <Sidebar />
            <Layout>
                <Header>
                    <div className='flex items-center'>
                        <Button onClick={handleLogout}>Logout</Button>
                        <PiShoppingCartSimpleLight  onClick={showDrawer} className='text-white text-3xl' />
                        <CartDrawer onClose={onClose} open={open} />
                    </div>
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;