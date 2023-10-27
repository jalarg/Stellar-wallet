function handleCheck(
  isChecked: boolean,
  setIsChecked: (isChecked: boolean) => void
) {
  isChecked ? setIsChecked(false) : setIsChecked(true);
}

export default handleCheck;
