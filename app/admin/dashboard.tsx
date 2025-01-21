import AdminLayout from "../components/AdminLayout";

const Dashboard: React.FC = () => {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-blue-100 rounded shadow">
          <h2 className="text-lg font-semibold">Citas Totales</h2>
          <p className="text-2xl">45</p>
        </div>
        <div className="p-4 bg-green-100 rounded shadow">
          <h2 className="text-lg font-semibold">Clientes</h2>
          <p className="text-2xl">120</p>
        </div>
        <div className="p-4 bg-yellow-100 rounded shadow">
          <h2 className="text-lg font-semibold">Ingresos</h2>
          <p className="text-2xl">$4,500</p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
