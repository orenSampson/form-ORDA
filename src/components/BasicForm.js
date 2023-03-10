import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import useInput from '../hooks/use-input';
import useInputDate from '../hooks/use-input-date';
import {
  firstAndLastNameCheck,
  isValidIsraeliID,
  isEmail,
  isValidGender,
  ageOver18,
} from '../utils/form-validity-check';

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(firstAndLastNameCheck);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(firstAndLastNameCheck);

  const {
    value: IDValue,
    isValid: IDIsValid,
    hasError: IDHasError,
    valueChangeHandler: IDChangeHandler,
    inputBlurHandler: IDBlurHandler,
    reset: resetID,
  } = useInput(isValidIsraeliID);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: genderValue,
    isValid: genderIsValid,
    valueChangeHandler: genderChangeHandler,
    reset: resetGender,
  } = useInput(isValidGender);

  const {
    value: birthdayValue,
    isValid: birthdayIsValid,
    hasError: birthdayHasError,
    valueChangeHandler: birthdayChangeHandler,
    reset: resetbirthday,
  } = useInputDate(ageOver18);

  let formIsValid = false;

  if (
    firstNameIsValid &&
    lastNameIsValid &&
    IDIsValid &&
    emailIsValid &&
    genderIsValid &&
    birthdayIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    alert(`?????? ${firstNameValue} ${lastNameValue}, ?????????? ???????? ????????????`);

    console.log('Submitted!');
    console.log(
      firstNameValue,
      lastNameValue,
      IDValue,
      emailValue,
      genderValue,
      birthdayValue
    );

    resetForm();
  };

  const resetForm = () => {
    resetFirstName();
    resetLastName();
    resetID();
    resetEmail();
    resetGender();
    resetbirthday();
  };

  const firstNameClasses = firstNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const lastNameClasses = lastNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const IDClasses = IDHasError ? 'form-control invalid' : 'form-control';
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="firstName">???? ????????</label>
          <input
            type="text"
            id="firstName"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">???? ?????????? ???????????? ???????????? ???????????? 2 ????????????</p>
          )}
        </div>

        <div className={lastNameClasses}>
          <label htmlFor="lastName">???? ??????????</label>
          <input
            type="text"
            id="lastName"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">???? ?????????? ???????????? ???????????? ???????????? 2 ????????????</p>
          )}
        </div>
      </div>
      <div className="control-group">
        <div className={IDClasses}>
          <label htmlFor="id">?????????? ????????</label>
          <input
            type="text"
            id="id"
            value={IDValue}
            onChange={IDChangeHandler}
            onBlur={IDBlurHandler}
          />
          {IDHasError && (
            <p className="error-text">???? ?????????? ?????????? ???????? ??????????</p>
          )}
        </div>

        <div className={emailClasses}>
          <label htmlFor="email">???????? ????????????????</label>
          <input
            type="text"
            id="email"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && (
            <p className="error-text">???? ?????????? ???????? ???????????????? ????????</p>
          )}
        </div>
      </div>

      <div className="control-group">
        <div className="form-control">
          <label id="demo-radio-buttons-group-label">??????</label>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            row
            value={genderValue}
            onChange={genderChangeHandler}
            name="radio-buttons-group"
          >
            <FormControlLabel value="male" control={<Radio />} label="??????" />
            <FormControlLabel value="female" control={<Radio />} label="????????" />
          </RadioGroup>
        </div>
      </div>
      <div className="control-group">
        <div className={IDClasses}>
          <label htmlFor="date">?????????? ????????</label>
          <input
            type="date"
            id="date"
            value={birthdayValue}
            onChange={birthdayChangeHandler}
          />
          {birthdayHasError && (
            <p className="error-text">?????????? ?????????? ???????? ?????????? ?????? ?????? 18</p>
          )}
        </div>
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>????????</button>
        <button onClick={resetForm}>?????????? ????????</button>
      </div>
    </form>
  );
};

export default BasicForm;
