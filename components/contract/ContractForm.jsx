import React, { useState } from 'react';

function ContractForm({ fetchHandler }) {
  const [formValues, setFormValues] = useState({
    budgetName: '',
    budgetAmount: '',
    targetLocation: '',
    state: '',
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
      <h1 className="text-lg font-bold my-5 text-center">Create Budget Plan</h1>
      <div className="w-full">
        <label className="block" htmlFor="">
          Budget Name
        </label>
        <input
          onChange={changeHandler}
          className={inputStyle}
          type="text"
          name="budgetName"
          value={formValues.budgetName}
        />
      </div>
      <div>
        <label htmlFor="">Budget Amount</label>
        <input
          onChange={changeHandler}
          className={inputStyle}
          type="text"
          name="budgetAmount"
          value={formValues.budgetAmount}
        />
      </div>
      <div>
        <label htmlFor="">Target Location</label>
        <input
          onChange={changeHandler}
          className={inputStyle}
          type="text"
          name="targetLocation"
          value={formValues.targetLocation}
        />
      </div>
      <div>
        <label htmlFor="">State</label>
        <input
          onChange={changeHandler}
          className={inputStyle}
          type="text"
          name="state"
          value={formValues.state}
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

export default ContractForm;
