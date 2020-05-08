
import { useState, useCallback } from 'react';

const useForm = ({ submitCallback, initialInputs = {} } = {}) => {
  const [inputs, setInputs] = useState(initialInputs);

  const onSubmitHandler = useCallback(event => {
    event && event.preventDefault();
    submitCallback && submitCallback();
  }, [submitCallback]);

  const inputChangeHandler = useCallback(event => {
    event.persist && event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.type === 'number'
          ? Number(event.target.value)
          : event.target.value
    }));
  }, []);

  const updateInputsHandler = useCallback(newInputs => {
    setInputs(newInputs);
  }, []);

  return {
    onSubmitHandler,
    inputChangeHandler,
    inputs,
    updateInputsHandler
  };
};

export default useForm;
