import Constants from 'expo-constants';

const variables = Constants.expoConfig?.extra?.extraConfig || {};
const BASE_URL = variables.BASE_URL;


const STUDENT = `{initiaURL}/uploadfile`;
const STAFF = `/listusersbyid`;





export default {
  STAFF,
  STUDENT,
  BASE_URL,
};
