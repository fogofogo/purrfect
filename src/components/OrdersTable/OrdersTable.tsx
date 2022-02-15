import { Table, Spinner } from "react-bootstrap";
import { IOrder } from "../../action";
import "./OrdersTable.scss";

interface IOrdersTable {
  orders: IOrder[],
  loading: boolean
}

const OrdersTable = ({ orders, loading }: IOrdersTable) => {

  return (
    <div className="OrdersTable">
    <h5>Recent orders</h5>
      <Table striped hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Order Placed</th>
            <th>Product</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order: IOrder, index: number) => (
            <tr key={index}>
              <td>{order.OrderId}</td>
              <td>{order.OrderPlaced}</td>
              <td>{order.Product}</td>
              <td>{order.FirstName}</td>
              <td>{order.LastName}</td>
              <td>{order.Address}</td>
              <td>{order.Email}</td>
              <td>{order.Price}</td>
              <td>{order.OrderStatus}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {loading && (
        <div className="spinner-wrapper">
          <Spinner animation="border" variant="danger" />
        </div>
      )}
    </div>
  );
};

export default OrdersTable;
