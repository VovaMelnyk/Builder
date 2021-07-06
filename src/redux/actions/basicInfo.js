<<<<<<< HEAD
import { BASIC_INFO } from "../../constants";

export const changeBasicInputs = ({ target }) => ({
  type: BASIC_INFO,
  name: target.name,
  value: target.value,
=======
import { CHANGE_TYPE } from "../../constants/";

export const changeType = (number) => ({
  type: CHANGE_TYPE,
  payload: { type: number },
>>>>>>> master
});
