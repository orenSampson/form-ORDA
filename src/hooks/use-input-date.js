import { useReducer } from 'react';

const initialInputState = {
  value: '',
  changed: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    console.log('action.type :>> ', action.type);
    console.log('action.value :>> ', action.value);

    return { value: action.value, changed: true };
  }

  if (action.type === 'RESET') {
    return { ...initialInputState };
  }

  return inputStateReducer;
};

const useInputDate = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);

  console.log('valueIsValid :>> ', valueIsValid);

  const hasError = !valueIsValid && inputState.changed;

  const valueChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    reset,
  };
};

export default useInputDate;
