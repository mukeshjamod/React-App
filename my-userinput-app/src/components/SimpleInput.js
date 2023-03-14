import React from 'react'

const SimpleInput = (props) => {
  return (
   <form>
    <div className='form-control'>
        <label htmlfor='name'>Your Name </label>
        <input type='text' id='name'></input>
    </div>
    <div className='form-actions'>
    <button>Submit</button>
    </div>
   </form>
  )
}

export default SimpleInput;