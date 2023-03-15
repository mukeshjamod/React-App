import useInput from "../hooks/user-input";

const isEmail = value => value.includes('@');
const isNotEmpty = value => value.trim() !== '';

const BasicForm = (props) => {
const {
  value : enteredFirstName,
  isValid:enteredFirstNameIsValid,
  hasError:firstNameError,
  valueChangeHandler:firstNameChangeHandler,
  inputBlurHandler:firstInputBlurHandler,
  reset:resetFirstName
  
}=useInput(isNotEmpty);

const {
  value: enteredLastName,
  isValid:enteredLastNameIsValid,
  hasError:lastNameError,
  valueChangeHandler:lastNameChangeHandler,
  inputBlurHandler:lastNameBlurHandler,
  reset:resetLastName
}=useInput(isNotEmpty);

const {
  value: enteredEmail,
  isValid:enteredEmailIsValid,
  hasError:emailError,
  valueChangeHandler:emailChangeHandler,
  inputBlurHandler: emailBlurHandler,
  reset:resetEmail}
=useInput(isEmail);

let formIsValid = false;

  if (enteredFirstNameIsValid && enteredEmailIsValid && enteredLastNameIsValid) {
    formIsValid = true;
  }
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if(!formIsValid)
    {
      return;
    }

  console.log(enteredFirstName);
  console.log(enteredLastName);
  console.log(enteredEmail);

  resetFirstName();
  resetLastName();
  resetEmail();
  };
  const firstNameClasses = firstNameError ? 'form-control invalid' : 'form-control';
  const lastNameClasses = lastNameError ? 'form-control invalid' : 'form-control';
  const emailClasses = emailError ? 'form-control invalid' : 'form-control';

    return (
      <form onSubmit={formSubmissionHandler}>
        <div className='control-group'>
          <div className={firstNameClasses}>
            <label htmlFor='name'>First Name</label>
            <input  type='text'
          id='name'
          onBlur={firstInputBlurHandler}
          onChange={firstNameChangeHandler}
          value={enteredFirstName}/>
          </div>
          {firstNameError && <p className='error-text'> first name must be not null</p>}

          <div className={lastNameClasses}>
            <label htmlFor='name'>Last Name</label>
            <input type='text' id='name'
            onBlur={lastNameBlurHandler}
            onChange={lastNameChangeHandler}
            value={enteredLastName} />
          </div>
          {lastNameError && <p className="error-text ">last name must not be empty</p>}
        </div>

        <div className={emailClasses}>
          <label htmlFor='name'>E-Mail Address</label>
          <input type='text' id='name' 
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          value={enteredEmail}/>
        </div>
        {emailError && <p className="error-text">please entered correct email</p>}

        <div className='form-actions'>
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    );
  };

  export default BasicForm;