import { useState, useEffect, useCallback } from 'react';

export default function useForm({ initialValues, validate, onSubmit }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e, name) => {
    setValues({
      ...values,
      [name ? name : e.target.name]: e.target.value,
    });
  };

  const handleBlur = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 모든 필드에 방문했다고 표시
    setTouched(
      Object.keys(values).reduce((touched, field) => {
        touched[field] = true;
        return touched;
      }, {})
    );

    const errors = validate(values);
    setErrors(errors);
    if (Object.values(errors).some((v) => v)) {
      return;
    }

    await onSubmit(values);
  };

  const runValidator = useCallback(() => validate(values), [values]);

  useEffect(() => {
    const errors = runValidator();
    setErrors(errors);
  }, [runValidator]);

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  };
}
