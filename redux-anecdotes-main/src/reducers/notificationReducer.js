const initialState = { message: "Some text" };

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_NOTIFICATION": {
      return action.data.message;
    }

    default:
      return state;
  }
};

const showNotification = (message) => {
  return {
    type: "SHOW_NOTIFICATION",
    data: message,
  };
};

export default notificationReducer;
