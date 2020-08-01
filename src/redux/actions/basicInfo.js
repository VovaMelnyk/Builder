import { CHANGE_TYPE } from "../../constants/";

export const changeType = (number) => ({
  type: CHANGE_TYPE,
  payload: { type: number },
});
