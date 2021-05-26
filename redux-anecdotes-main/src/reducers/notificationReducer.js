const initialState = { message: "" };

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_NOTIFICATION": {
      return action.data.message;
    }

    case "HIDE_NOTIFICATION": {
      return initialState;
    }

    default:
      return state;
  }
};

export const showNotification = (message) => {
  return {
    type: "SHOW_NOTIFICATION",
    data: { message },
  };
};

export const hideNotification = () => {
  return {
    type: "HIDE_NOTIFICATION",
  };
};

export default notificationReducer;
