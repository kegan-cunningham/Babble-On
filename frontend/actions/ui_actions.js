export const TOGGLE_DROPDOWN = "TOGGLE_DROPDOWN";
export const TOGGLE_REQUEST_SUCCESS_MESSAGE = "TOGGLE_REQUEST_SUCCESS_MESSAGE";

export const toggleDropdown = () => {
  return {
    type: TOGGLE_DROPDOWN,
  };
};

export const toggleRequestSuccessMessage = () => {
  return {
    type: TOGGLE_REQUEST_SUCCESS_MESSAGE,
  };
};
