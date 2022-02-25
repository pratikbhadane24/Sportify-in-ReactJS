export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const alreadyexist = state.cartItems.find(
        // eslint-disable-next-line
        (item) => item._id == action.payload._id
      );

      if (alreadyexist) {
        return {
          ...state,
          cartItems: state.cartItems.map(
            (
              item // eslint-disable-next-line
            ) => (item._id == action.payload._id ? action.payload : item)
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
    case "DELETE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => {
          // eslint-disable-next-line
          return item._id != action.payload._id;
        }),
      };

    default:
      return state;
  }
};
