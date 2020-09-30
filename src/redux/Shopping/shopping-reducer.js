import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "MMA Gloves",
      description: "Light colored mma training gloves from Venum",
      price: 19.0,
      image:
        "https://olympiadsports.com/web/image/product.template/52/image_256/%5B55%5D%20Venum%202.0%20MMA%20Gloves?unique=04bc38d",
    },
    {
      id: 2,
      title: "Rash Guard",
      description: "Gray colored training rash guard",
      price: 20.0,
      image:
        "https://www.olympiadsports.com/web/image/product.template/546/image_256/%5B556%5D%20HAYABUSAMMASHIRT?unique=ae79e90",
    },
    {
      id: 3,
      title: "MMA Shorts",
      description: "Black and yellow mma training shorts",
      price: 15.0,
      image:
        "https://pbs.twimg.com/profile_images/3743227793/2f03a52733abab5d16f6981273e572d5.jpeg",
    },
    {
      id: 4,
      title: "MMA Shorts",
      description: "Light orange training shorts from Venum",
      price: 15.0,
      image:
        "https://pbs.twimg.com/profile_images/688866151909208066/jczL7fRQ_400x400.jpg",
    },
    {
      id: 5,
      title: "Head Gear",
      description: " New arrival traning head gear",
      price: 15.0,
      image:
        "https://www.olympiadsports.com/web/image/product.template/29/image_256/%5B32%5D%203N%20LEATHER%20HEAD%20GEAR?unique=e976984",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
