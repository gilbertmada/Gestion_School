export const allUsers = [
    'ADMIN',
    'PROF',
    'DIR',
    'SURV'
  ]

  export const admins = [
    'ADMIN',
    'DIR',
  ]

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
  
  export const generateRandomCode = () => {
    return `${getRandomInt(9)}${getRandomInt(9)}${getRandomInt(9)}${getRandomInt(9)}${getRandomInt(9)}${getRandomInt(9)}`;
  }