
import { Card, Col, Row, Typography } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const { Title } = Typography;

// Sample Data for the chart
const data = [
  { name: 'Jan', uv: 4000, pv: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398 },
  { name: 'Mar', uv: 2000, pv: 9800 },
  { name: 'Apr', uv: 2780, pv: 3908 },
  { name: 'May', uv: 1890, pv: 4800 },
  { name: 'Jun', uv: 2390, pv: 3800 },
  { name: 'Jul', uv: 3490, pv: 4300 },
];

const UserDashboard = () => {
  return (
    <div className="!p-6">
      {/* Dashboard Header */}
      {/* <Title level={2}>User Dashboard</Title> */}

      {/* User Stats and Chart */}
      <Row gutter={[16, 16]}>
        {/* User Stats Cards */}
        <Col xs={24} md={8}>
          <Card className="!bg-green-400 !text-white">
            <Title level={4} className='!text-white'>Total Users</Title>
            <p className="text-3xl font-semibold">1,234</p>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card className="!bg-orange-400 !text-white">
            <Title level={4} className='!text-white'>Active Sessions</Title>
            <p className="text-3xl font-semibold">789</p>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card className="!bg-red-400 !text-white">
            <Title level={4} className='!text-white'>New Signups</Title>
            <p className="text-3xl font-semibold">112</p>
          </Card>
        </Col>
      </Row>

      {/* User Growth Chart */}
      <Row gutter={[16, 16]} className="!mt-6">
        <Col span={24}>
          <Card className='!border !border-orange-300'>
            <Title level={4}>User Growth Over Time</Title>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UserDashboard;
