import { useState, useEffect, useCallback } from 'react';

export default function useForm({ initialValues, validate, onSubmit }) {
  console.log(initialValues);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeData = (newData, name) => {
    setValues({
      ...values,
      [name]: newData,
    });
  };
  const changeNewForm = (newForm) => {
    setValues({
      ...newForm,
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
    handleChangeData,
    changeNewForm,
  };
}
