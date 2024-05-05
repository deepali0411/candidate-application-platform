export const changeTheData = (state = [], actions) => {
    switch (actions?.type) {
      case "set": {
        return [...state,...actions?.payload];
      }
      default:
        return state;
    }
  };