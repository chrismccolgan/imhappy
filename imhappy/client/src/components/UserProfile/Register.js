import React, { useReducer, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserProfileContext } from './UserProfileProvider';
import { MomentContext } from '../Moment/MomentProvider';

const initState = {
  firstName: '',
  lastName: '',
  email: '',
  birthday: '',
  password: '',
  confirmPassword: '',
  isLoading: false,
};

const reducer = (prevState, action) => {
  return {
    ...prevState,
    ...action,
  };
};

const Register = () => {
  const history = useHistory();

  const { register } = useContext(UserProfileContext);
  const { addMoment } = useContext(MomentContext);

  const [registerState, dispatch] = useReducer(reducer, initState);

  const handleInputChange = (event) => {
    dispatch({
      [event.target.name]: event.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch({ isLoading: true });

    if (
      registerState.password &&
      registerState.password !== registerState.confirmPassword
    ) {
      return alert("Passwords don't match. Do better.");
    }

    const userProfile = {
      firstName: registerState.firstName,
      lastName: registerState.lastName,
      email: registerState.email,
      birthday: registerState.birthday,
    };

    register(userProfile, registerState.password)
      .then((user) => {
        const newMoment1 = {
          entry: `Happy birthday, ${user.firstName}!`,
          date: user.birthday,
          isSignificant: true,
          userProfileId: user.id,
          categoryId: 4,
        };

        const newMoment2 = {
          entry: 'Joined IMHAPPY',
          date: user.createDateTime,
          isSignificant: false,
          userProfileId: user.id,
          categoryId: 2,
        };

        debugger;
        addMoment(newMoment1);
        addMoment(newMoment2);
      })
      .then(() => {
        dispatch({ isLoading: false });
        history.push('/');
      });
  };

  return (
    <form onSubmit={handleRegister}>
      <fieldset>
        <label htmlFor='registerFirstName'>First Name</label>
        <input
          id='registerFirstName'
          name='firstName'
          type='text'
          onChange={handleInputChange}
        />

        <label htmlFor='registerLastName'>Last Name</label>
        <input
          id='registerLastName'
          name='lastName'
          type='text'
          onChange={handleInputChange}
        />

        <label htmlFor='registerEmail'>Email</label>
        <input
          id='registerEmail'
          name='email'
          type='text'
          onChange={handleInputChange}
        />

        <label htmlFor='registerBirthday'>Birthday</label>
        <input
          id='registerBirthday'
          name='birthday'
          type='date'
          onChange={handleInputChange}
        />

        <label htmlFor='registerPassword'>Password</label>
        <input
          id='registerPassword'
          name='password'
          type='password'
          onChange={handleInputChange}
        />

        <label htmlFor='registerConfirmPassword'>Confirm Password</label>
        <input
          id='registerConfirmPassword'
          name='confirmPassword'
          type='password'
          onChange={handleInputChange}
        />

        <button disabled={registerState.isLoading} type='submit'>
          Register
        </button>
      </fieldset>
    </form>
  );
};

export default Register;
