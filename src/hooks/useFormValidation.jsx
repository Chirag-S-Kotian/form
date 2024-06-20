import { useState, useEffect } from 'react';

const useFormValidation = (formData) => {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const validate = () => {
      let tempErrors = {};
      if (!formData.name) tempErrors.name = 'Name is required';
      if (!formData.email) tempErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is invalid';
      if (!formData.age) tempErrors.age = 'Age is required';
      else if (formData.age <= 0) tempErrors.age = 'Age must be greater than 0';
      if (formData.attendingWithGuest === 'Yes' && !formData.guestName) tempErrors.guestName = 'Guest name is required';
      setErrors(tempErrors);
    };

    validate();
  }, [formData]);

  return errors;
};

export default useFormValidation;
