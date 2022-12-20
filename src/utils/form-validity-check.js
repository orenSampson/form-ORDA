function doesContainsHeb(str) {
  return /[\u0590-\u05FF]/.test(str);
}

export const firstAndLastNameCheck = (value) => {
  const str = value.trim();

  return doesContainsHeb(str) && str.length >= 2;
};

export function isValidIsraeliID(value) {
  let id = String(value).trim();

  if (id.length > 9 || id.length < 5 || isNaN(id)) return false;

  // Pad string with zeros up to 9 digits
  id = id.length < 9 ? ('00000000' + id).slice(-9) : id;

  return (
    Array.from(id, Number).reduce((counter, digit, i) => {
      const step = digit * ((i % 2) + 1);
      return counter + (step > 9 ? step - 9 : step);
    }) %
      10 ===
    0
  );
}

export function isEmail(input) {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return validRegex.test(input);
}

export function isValidGender(input) {
  return input === 'male' || input === 'female';
}

export function ageOver18(birthday) {
  // it will accept two types of format yyyy-mm-dd and yyyy/mm/dd
  var optimizedBirthday = birthday.replace(/-/g, '/');

  //set date based on birthday at 01:00:00 hours GMT+0100 (CET)
  var myBirthday = new Date(optimizedBirthday);

  // set current day on 01:00:00 hours GMT+0100 (CET)
  var currentDate = new Date().toJSON().slice(0, 10) + ' 01:00:00';

  // calculate age comparing current date and borthday
  var myAge = ~~((Date.now(currentDate) - myBirthday) / 31557600000);

  if (myAge <= 18) {
    return false;
  } else {
    return true;
  }
}
