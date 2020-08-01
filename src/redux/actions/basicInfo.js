import { BASIC_INFO } from "../../constants";

export const changeBasicInputs = ({ target }) => ({
  type: BASIC_INFO,
  name: target.name,
  value: target.value,
});
