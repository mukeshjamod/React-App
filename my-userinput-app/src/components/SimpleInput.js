import { useState} from 'react';

const SimpleInput = (props) => {
  //const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  //const [enteredNameIsValid, setEnteredNameIsValid]=useState(false);
  const [enteredNameTouched,setEnteredNameTouched] = useState(false)
  //const [formIsValid,setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;
  
  let formIsValid = false;
 
if(enteredNameIsValid)
{
    formIsValid(true);
}
  
//    useEffect(() => {
//      if(enteredNameIsValid){
//         console.log('input is valid');
//      }
//   }, [enteredNameIsValid]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    // if(event.target.value.trim() !== ''){
    //     setEnteredNameIsValid(true);
       
    // }
  };
   
  const nameInputBlurHandler = event =>{
  setEnteredNameTouched(true);

//   if(enteredName.trim() === ''){
//     setEnteredNameIsValid(false);
//     return;
// }
  };


  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    //console.log(enteredName);
    if(!enteredNameIsValid){
        return;
    }
 console.log(enteredName);
//     if(enteredName.trim() === ''){
//         setEnteredNameIsValid(false);
//         return;
//     }
//    setEnteredNameIsValid(true);

    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredName('');
    setEnteredNameTouched(false); 
  };

//   const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

   const nameInputClasses = enteredNameIsValid ? 'form-control invalid': 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
       
          type='text'
          id='name'
          onBlur={nameInputBlurHandler}
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
     {nameInputIsValid && <p className='error-text'>name must not be empty</p>}
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;