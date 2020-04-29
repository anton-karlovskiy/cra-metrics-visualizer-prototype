
import { useState, useCallback } from 'react';

const useForm = callback => {
  const [inputs, setInputs] = useState({});

  const onSubmitHandler = useCallback(event => {
    event && event.preventDefault();
    callback && callback();
  }, [callback]);

  const inputChangeHandler = useCallback(event => {
    event.persist && event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
    }));
  }, []);

  return {
    onSubmitHandler,
    inputChangeHandler,
    inputs
  };
};

export default useForm;
