export const FormatUserObject = (userDetails: any) => {
  const taxStatus = userDetails?.TaxStatus || (userDetails?.CountryOfResidence && userDetails?.CountryOfResidence !== 'India' ? 'nri' : 'resident_individual');
  return {
    ...userDetails,
    TaxStatus: taxStatus,
  };
};
