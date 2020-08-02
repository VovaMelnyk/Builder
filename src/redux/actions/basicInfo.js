import { BASIC_INFO } from "../../constants";
import { CHANGE_TYPE } from "../../constants/";

export const changeBasicInputs = ({ target }) => ({
  type: BASIC_INFO,
  name: target.name,
  value: target.value,
});

export const changeType = (number) => ({
  type: CHANGE_TYPE,
  payload: { type: number },
});
