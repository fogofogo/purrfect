import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Airtable from "airtable";
import Dashboard from "./pages/Dashboard/Dashboard";
import RecentOrders from "./pages/RecentOrders/RecentOrders";
import Header from "./components/Header/Header";
import { getOrders, setLoading, IOrder } from "./action";
import { Container } from "react-bootstrap";
import "./App.scss";

const api_key = "keyoqSlTPT86h9cSr";
const base = new Airtable({ apiKey: api_key }).base("app8wLQrrIMrnn673");

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      try {
        dispatch(setLoading(true));
        base("orders")
          .select({ view: "Grid view" })
          .all()
          .then((orders) => {
            let total: any = 0;
            let startDate = new Date("10/1/2021"); // Show all the recent orders till today
            let endDate = new Date();
            const data: IOrder[] = orders.map((order, index) => {
              total += order.fields.price;
              return {
                OrderId: order.fields["order_id"],
                OrderPlaced: order.fields["order_placed"],
                Product: order.fields["product_name"],
                FirstName: order.fields["first_name"],
                LastName: order.fields["last_name"],
                Address: order.fields["address"],
                OrderStatus: order.fields["order_status"],
                Price: order.fields["price"],
                Email: order.fields["email"],
              };
            });
            dispatch(
              getOrders({
                orders: data,
                recentOrders: data.filter((a) => {
                  var date = new Date(a.OrderPlaced);
                  return date >= startDate && date <= endDate;
                }),
                totalRevenue: Math.round(total * 100) / 100,
                totalOrders: data.length,
                totalOrdersInProgress: data.filter(
                  (order) => order.OrderStatus === "in_progress"
                ).length,
              })
            );
            dispatch(setLoading(false));
          });
      } catch (error) {
        dispatch(setLoading(false));
      }
    };

    fetch();
  }, [dispatch]);

  return (
    <div className="App">
      <Container>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/recent-orders" element={<RecentOrders />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default App;
