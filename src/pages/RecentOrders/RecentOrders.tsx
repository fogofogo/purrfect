import { useSelector } from "react-redux";
import OrdersTable from "../../components/OrdersTable/OrdersTable";
import "./RecentOrders.scss";

const RecentOrders = () => {
  const {
    recentOrders,
    loading,
  }: any = useSelector((state) => state);

  return (
    <div className="App">
        <OrdersTable orders={recentOrders} loading={loading} />
    </div>
  );
};

export default RecentOrders;
