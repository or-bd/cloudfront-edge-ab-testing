export const getNodeStyle = (isValid: boolean) => {
  return {
    backgroundColor: isValid ? '#794ad5' : 'white',
    color: isValid ? 'white' : 'black',
    fontWeight: isValid ? 'bold' : 'normal',
    width: '80px'
  };
};
