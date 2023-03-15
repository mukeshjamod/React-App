import { useState } from 'react';
import useInput from '../hooks/user-input';

const SimpleInput = (props) => {
 
     const{
      value: enteredName,
      isValid:enteredNameIsValid,
      hasError:nameInputHasError,
      valueChangeHandler: nameChangedHandler,
      inputBlurHandler:nameBlurHandler,
      reset:resetNameInput
     } = useInput(value => value.trim() !== '');

     const {
      value:enteredEmail,
      isValid:enteredEmailIsValid,
      hasError:emailInputHasError,
      valueChangeHandler: emailChangedHandler,
      inputBlurHandler:emailBlurHandler,
      reset: resetEmailInput
     } = useInput(value=>value.trim() !== '');

     
    //  const [enteredEmail, setEnteredEmail] = useState('');
    //  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
     
    //  const enteredEmailIsValid = enteredEmail.includes('@');
    //  const enteredEmailIsInValid = enteredEmailIsValid && enteredEmailTouched;
    
     // const enteredNameIsValid = enteredName.trim() !== '';
     // const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;
     
     // const [enteredName, setEnteredName] = useState('');
     // const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  //const [enteredNameIsValid, setEnteredNameIsValid]=useState(false);
  //const [formIsValid,setFormIsValid] = useState(false);
  //const nameInputRef = useRef();

  //    useEffect(() => {
  //      if(enteredNameIsValid){
  //         console.log('input is valid');
  //      }
  //   }, [enteredNameIsValid]);
  // if(event.target.value.trim() !== ''){
  //     setEnteredNameIsValid(true);

  // }
  //   if(enteredName.trim() === ''){
  //     setEnteredNameIsValid(false);
  //     return;
  // }
  
  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };
  // const nameInputBlurHandler = event => {
  //   setEnteredNameTouched(true);

  // };

  
    // const emailInputChangeHandler = (event) => {
    //   setEnteredEmail(event.target.value);
    // };
  
  
    // const emailInputBlurHandler = (event) => {
    //   setEnteredEmailTouched(true);
    // };

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }




  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // setEnteredNameTouched(true);
    //console.log(enteredName);
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);

    // setEnteredEmailTouched(true);
    // if (!enteredEmailIsValid) {
    //   return;
    // }
    console.log(enteredEmail);
    //     if(enteredName.trim() === ''){
    //         setEnteredNameIsValid(false);
    //         return;
    //     }
    //    setEnteredNameIsValid(true);

    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    // setEnteredName('');
    // setEnteredNameTouched(false);
    // setEnteredEmail('');
    // setEnteredEmailTouched(false);

    resetNameInput();
    resetEmailInput();

  };

  //   const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = enteredEmailIsValid ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input

          type='text'
          id='name'
          onBlur={nameBlurHandler}
          onChange={nameChangedHandler}
          value={enteredName}
        />
        { nameInputHasError && <p className='error-text'>name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input

          type='email'
          id='email'
          onBlur={emailBlurHandler}
          onChange={emailChangedHandler}
          value={enteredEmail}
        />
      { emailInputHasError && <p className='error-text'>  email is invalid.please includes '@'</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;