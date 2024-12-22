import _ from 'lodash';

function areEqual(prevProps: any, nextProps: any) {
  if (_.isEqual(prevProps, nextProps)) return true;

  return false;
}

export default areEqual;
