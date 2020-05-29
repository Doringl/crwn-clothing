export const addItemToOrders = (orders, ordersToAdd) => {
  const existingItem = orders.find((orders) => orders.id === ordersToAdd.id);

  if (existingItem) {
    return orders.map((orders) =>
      orders.id === ordersToAdd.id
        ? { ...orders, quantity: orders.quantity + 1 }
        : orders
    );
  }

  return [...orders, { ...ordersToAdd, quantity: 1 }];
};
