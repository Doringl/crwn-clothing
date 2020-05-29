import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectUserOrders = createSelector(
  [selectCurrentUser],
  (currentUser) =>
    currentUser === null
      ? []
      : currentUser.orders === []
      ? []
      : currentUser.orders
);
