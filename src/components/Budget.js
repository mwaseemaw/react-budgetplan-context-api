import {React, useContext} from 'react';
import {AppContext} from '../content/AppContext';
const Budget = () => {
  const state = useContext(AppContext);
  return (
    <div className='alert alert-secondary'>
        Budget: {state.budget}
    </div>
  )
}

export default Budget;