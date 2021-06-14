const initialState = { message: "" };

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_NOTIFICATION": {
      return action.data;
    }

    case "HIDE_NOTIFICATION": {
      return initialState;
    }

    default:
      return state;
  }
};

export const showNotification = (message, time) => {
  window.clearTimeout(window.notification);

  return async (dispatch) => {
    dispatch({
      type: "SHOW_NOTIFICATION",
      data: { message },
    });

    window.notification = setTimeout(() => {
      dispatch({
        type: "HIDE_NOTIFICATION",
      });
    }, time * 1000);
  };
};

export default notificationReducer;
