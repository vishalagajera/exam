const joi = require('@hapi/joi');

export const isValidStep1 = (email, password, confirmPassword) => {
  if (
    email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) &&
    password.length >= 8 &&
    confirmPassword.length >= 8 &&
    password === confirmPassword &&
    password.length != 0 &&
    confirmPassword.length != 0
  ) {
    return false;
  } else {
    return true;
  }
};

export const isValidStep2 = (firstName, lastName) => {
  if (firstName.length <= 2) {
    return true;
  } else if (lastName.length <= 2) {
    return true;
  } else if (firstName.length === 1 && lastName.length === 1) {
    return true;
  } else {
    return false;
  }
};
export const isValidStep3 = (state, city, personalAddress, pinCode) => {
  if (personalAddress.length > 2 && pinCode.length === 6 && state !== '' && city !== '') {
    return true;
  } else {
    return false;
  }
};

export const isValidStep4 = (institutionName, endDateSchool, startDateSchool) => {
  if (institutionName.length > 2 && endDateSchool !== '' && startDateSchool !== '') {
    return true;
  } else {
    return false;
  }
};
export const isValidStep5 = () => {
  // const schema = joi.string().required()
  // let result = schema.validate(jobTitle);
  // console.log(result);
  //  if (result) {
  //   return false;
  //  } 
  //  return true;
};
export const isValidStep6 = () => {

};

