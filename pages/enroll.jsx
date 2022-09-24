import React from 'react'
import EnrollForm from '../components/enroll/EnrollForm'

function EnrollPage() {
  async function fetchHandler(formValues) {
    const url = 'http://127.0.0.1:5000/addBudget';
    const fetchOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        formValues,
      }),
    };
    try {
      const response = await fetch(url, fetchOptions);
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message)
      }
      console.log(result);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <EnrollForm fetchHandler={fetchHandler}/>
  )
}

export default EnrollPage