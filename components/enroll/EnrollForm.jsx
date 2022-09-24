import React, { useState } from 'react';

function EnrollForm({ fetchHandler }) {
  const [formValues, setFormValues] = useState({
    uniqueName: '',
    media: '',
    budgetIdentifier: '',
  });

  function submitHandler(event) {
    event.preventDefault();
    console.log(formValues);
    fetchHandler(formValues);
  }

  function changeHandler(event) {
    console.log(formValues);
    setFormValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  const inputStyle =
    'w-full appearance-none border rounded leading-tight py-2 px-3 text-sm text-gray-700 appearance-none border rounded leading-tight';
  return (
    <form
      className="w-1/2 rounded border my-10 border-gray-200 bg-white p-5 mx-auto"
      onSubmit={submitHandler}
    >
      <h1 className="text-lg font-bold my-5 text-center">Enroll in a Budget</h1>
      <div className="w-full">
        <label className="" htmlFor="">
          Name
        </label>
        <input
          onChange={changeHandler}
          className={inputStyle}
          type="text"
          name="uniqueName"
          value={formValues.uniqueName}
        />
      </div>
      <div className="w-full">
        <label className="" htmlFor="">
          Social Media
        </label>
        <input
          onChange={changeHandler}
          className={inputStyle}
          type="text"
          name="media"
          value={formValues.media}
        />
      </div>
      <div>
        <label htmlFor="">Budget Identifier</label>
        <input
          onChange={changeHandler}
          className={inputStyle}
          type="text"
          name="budgetIdentifier"
          value={formValues.budgetIdentifier}
        />
      </div>
      <input
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        type="submit"
        value="Submit"
      />
    </form>
  );
}

export default EnrollForm;
