const GetPersonName = (FirstName: string, LastName: string, email= '', PhoneNumber= '') => {
  if (FirstName && LastName) return `${FirstName} ${LastName}`;
  else if (FirstName) return `${FirstName}`;
  else if (LastName) return `${LastName}`;
  else if (PhoneNumber) return PhoneNumber;
  else return email;
};

export default GetPersonName;
