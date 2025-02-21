import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

const { Content } = Layout;

const MainLayout = () => {

    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const user = useAppSelector(selectCurrentUser);

    // const handleLogout = () => {
    //     dispatch(logout())
    //     navigate('/login')
    // }

    // const [open, setOpen] = useState(false);

    // const showDrawer = () => {
    //     setOpen(true);
    // };

    // const onClose = () => {
    //     setOpen(false);
    // };

    // const navLinks = [
    //     {
    //         path: "/",
    //         label: "Home",
    //     },
    //     {
    //         path: "/all-product",
    //         label: "Products",
    //     },

    // ]

    return (
        <Layout style={{ position: 'relative' }}>
            {/* {user?.role === "admin" && <Sidebar />}

            <div className='md:hidden flex'>
                <Sidebar />
            </div> */}

            <Layout>
                {/* <Header style={{ backgroundColor: '#3F0B40' }}>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-white'>GearNova</h2>

                        <div className='flex items-center justify-between'>
                            {
                                navLinks.map((nav) => (
                                    <Link className="!text-white !px-5" key={nav.label} to={nav.path}>
                                        {nav.label}
                                    </Link>
                                ))
                            }

                            <PiShoppingCartSimpleLight onClick={showDrawer} className='text-white text-3xl' />
                            <CartDrawer onClose={onClose} open={open} />
                            <Button onClick={handleLogout}>Logout</Button>
                        </div>
                    </div>
                </Header> */}

                <Navbar />
                <Content>
                    <div
                        style={{
                            minHeight: "80vh"
                        }}
                    >
                        {/* <div className='h-10 w-full'>
                        </div> */}
                        <Outlet />
                    </div>
                </Content>
                <Footer />
            </Layout>
        </Layout>
    );
};

export default MainLayout;