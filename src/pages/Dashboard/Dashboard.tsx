import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  CartCheck,
  PiggyBank,
  CartX,
  Calendar2Month,
} from "react-bootstrap-icons";
import Statistic from "../../components/Statistic/Statistic";
import BarChart from "../../components/BarChart/BarChart";
import { IOrder } from "../../action";
import "./Dashboard.scss";

const Dashboard = () => {
  const {
    orders,
    totalRevenue,
    totalOrders,
    totalOrdersInProgress,
    recentOrders,
    loading,
  }: any = useSelector((state) => state);

  // Get all time product orders for bar chart
  const [chartLabels, setChartLabels] = useState<Array<string>>([]);
  const [chartOrders, setChartOrders] = useState<Array<number>>([]);
  const chartData = { chartLabels: chartLabels, chartOrders: chartOrders };

  // Get recent popular orders for bar chart
  const [chartLabelsRecent, setChartLabelsRecent] = useState<Array<string>>([]);
  const [chartOrdersRecent, setChartOrdersRecent] = useState<Array<number>>([]);
  const chartDataRecent = {
    chartLabels: chartLabelsRecent,
    chartOrders: chartOrdersRecent,
  };

  useEffect(() => {
    const map: any = {};
    orders.forEach(
      (order: IOrder) => (map[order.Product] = (map[order.Product] ?? 0) + 1) // counting how many times the product eists in the array
    );
    setChartLabels(Object.keys(map));
    setChartOrders(Object.values(map));
  }, [orders]);

  useEffect(() => {
    const map: any = {};
    recentOrders.forEach(
      (order: IOrder) => (map[order.Product] = (map[order.Product] ?? 0) + 1)
    );
    setChartLabelsRecent(Object.keys(map));
    setChartOrdersRecent(Object.values(map));
  }, [recentOrders]);

  return (
    <div className="App">
        <div className="statistics">
          <Statistic
            label={"All Orders"}
            value={totalOrders}
            Icon={CartCheck}
            loading={loading}
          />
          <Statistic
            label={"Orders this month"}
            value={recentOrders.length}
            Icon={Calendar2Month}
            loading={loading}
          />
          <Statistic
            label={"Total Revenue"}
            value={`$${totalRevenue}`}
            Icon={PiggyBank}
            loading={loading}
          />
          <Statistic
            label={"Orders in progress"}
            value={totalOrdersInProgress}
            Icon={CartX}
            loading={loading}
          />
        </div>
        <div className="metrics">
          <div className="metric">
            <h5>Products ordered this month</h5>
            <BarChart {...chartDataRecent} />
          </div>
          <div className="metric">
            <h5>Products ordered this year</h5>
            <BarChart {...chartData} />
          </div>
        </div>
    </div>
  );
};

export default Dashboard;
