// Функция для проверки длины строки

const isLessOrEqual = (string, stringLength) => string.length <= stringLength;
isLessOrEqual('провод', 10); //true
isLessOrEqual('проводник', 6); //false

// Функция для проверки, является ли строка палиндромом

const isPalindrome = (string) => {
  string = string.toLowerCase().replaceAll(' ','');
  let newString = '';
  for (let i = string.length - 1; i >= 0; --i) {
    newString += string[i];
  } if (newString === string) {
    return true;
  }
  return false;
};
isPalindrome('Не гни папин ген'); //true
isPalindrome('zero tolerance'); //false
