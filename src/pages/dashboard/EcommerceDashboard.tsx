import { Card } from "antd";
import { ShoppingCartOutlined, DollarOutlined, AppstoreOutlined, UserOutlined } from "@ant-design/icons";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", sales: 1200, customers: 500 },
  { month: "Feb", sales: 1500, customers: 750 },
  { month: "Mar", sales: 1800, customers: 900 },
];

export default function EcommerceDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 !p-6">
      
      {/* Dashboard Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-md !bg-green-400 !text-white">
          <h2 className="text-lg font-medium">Total Orders</h2>
          <p className="text-2xl font-bold">1,245</p>
          <ShoppingCartOutlined className="text-gray-500 text-2xl" />
        </Card>

        <Card className="shadow-md !bg-orange-400 !text-white">
          <h2 className="text-lg font-medium">Total Revenue</h2>
          <p className="text-2xl font-bold">$85,674</p>
          <DollarOutlined className="text-gray-500 text-2xl" />
        </Card>

        <Card className="shadow-md !bg-red-400 !text-white">
          <h2 className="text-lg font-medium">Products in Stock</h2>
          <p className="text-2xl font-bold">3,567</p>
          <AppstoreOutlined className="text-gray-500 text-2xl" />
        </Card>

        <Card className="shadow-md !bg-blue-400 !text-white">
          <h2 className="text-lg font-medium">Total Customers</h2>
          <p className="text-2xl font-bold">8,923</p>
          <UserOutlined className="text-gray-500 text-2xl" />
        </Card>
      </div>

      {/* Chart Section */}
      <div className="!mt-6 bg-white !p-4 rounded-xl shadow-md !border !border-orange-300">
        <h2 className="text-lg font-medium !mb-4">Sales Performance</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#1890ff" strokeWidth={2} dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
