export const changeTheData = (state = [], actions) => {
    switch (actions?.type) {
      case "set": {
        return state !=[]? [...state,...actions?.payload] :  actions?.payload;
      }
      default:
        return state;
    }
  };