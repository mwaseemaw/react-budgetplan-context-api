import React from 'react';

function AddExpenseForm() {
  return (
    <form>
        <div className='row mt-3'>
          <div className='col-sm'>
          Name<input required type='text' className='form-control' id='name'></input>
          </div>
          <div className='col-sm'>
            Cost<input required type='number' className='form-control' id='cost'></input>
          </div>
          <div className='col-sm'>
            <button type='submit' className='btn btn-dark'>Save</button>
          </div>
        </div>
    </form>
  )
}

export default AddExpenseForm;