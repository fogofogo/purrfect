export interface IOrder {
  OrderId: any;
  OrderPlaced: any;
  Product: any;
  FirstName: any;
  LastName: any;
  Address: any;
  OrderStatus: any;
  Price: any;
  Email: any;
}

export interface IOrders {
  orders: IOrder[],
  recentOrders: IOrder[],
  totalRevenue: number,
  totalOrders: number,
  totalOrdersInProgress: number
}

export const getOrders = (payload: IOrders) => ({
  type: "GET_ORDERS",
  payload: payload
});

export const setLoading = (payload: boolean) => ({
  type: "SET_LOADING",
  payload: payload
});