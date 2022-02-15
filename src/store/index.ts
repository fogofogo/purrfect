let initialState = {
  orders: [],
  recentOrders: [],
  totalRevenue: 0,
  totalOrders: 0,
  totalOrdersInProgress: 0,
  loading: false,
}

export const orderReducer = function (state = initialState, action: any) {
  switch (action.type) {
    case "GET_ORDERS":
      return {
        ...state,
        orders: action.payload.orders,
        recentOrders: action.payload.recentOrders,
        totalRevenue: action.payload.totalRevenue,
        totalOrders: action.payload.totalOrders,
        totalOrdersInProgress: action.payload.totalOrdersInProgress
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state;
  }
};