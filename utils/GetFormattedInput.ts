const GetFormattedInput = (
  value: any,
  onChange: any,
  phnNumber: any,
  isUpper: any,
  numFormat: any,
  isEmail?: any
) => {
  let formattedValue = value;

  // Phone number validation: only allow numbers
  if (phnNumber) {
    formattedValue = value.replace(/\D/g, ""); 
    if (formattedValue.length > 10) {
      formattedValue = formattedValue.slice(0, 10); 
    }
  } 
 
  else if (isEmail) {
   
    const emailRegex = /^[a-zA-Z0-9._%+-]*@?[a-zA-Z0-9.-]*\.?[a-zA-Z]{0,}$/;
    if (emailRegex.test(value)) {
      formattedValue = value.trim().toLowerCase();
    } else {
      formattedValue = value; 
    }
  }
  // Uppercase conversion
  else if (isUpper) {
    formattedValue = value?.toUpperCase();
  } 
  // Number formatting
  else if (numFormat) {
    const val = Number(value?.replaceAll(",", ""));
    if (isNaN(Number(val || "a"))) {
      return onChange(value);
    }
    formattedValue = val.toLocaleString("en-IN");
  }

  onChange(formattedValue);  // Pass the formatted value to the onChange function
};

export default GetFormattedInput;
