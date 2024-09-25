const form = () => {
  return (
    <DynamicForm
      fields={fields}
      schema={schema}
      onSubmit={onSubmit}
      submitButtonText="Отправить"
    />
  );
};

export default form;
