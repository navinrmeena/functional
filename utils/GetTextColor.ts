export const textColor = (attr: any) => {
  if (typeof attr !== 'number' || [0, '', null, undefined].includes(attr) || Number.isNaN(attr)) return 'white';

  return attr > 0 ? '$green' : '$red';
};

