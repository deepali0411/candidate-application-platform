export const changeTheData = (state = [], actions) => {
    switch (actions?.type) {
      case "set": {
        return actions?.payload;
      }
      default:
        return state;
    }
  };