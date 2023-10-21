const roundNumber = (numberString: string) => {
  const number = parseFloat(numberString);
  if (!isNaN(number)) {
    const rounded = number.toFixed(2);
    return rounded.endsWith(".00") ? rounded.replace(".00", "") : rounded;
  }
  return "Invalid Input";
};

export default roundNumber;
