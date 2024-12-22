import axios from 'axios';
import { Platform } from 'react-native';
import URL from './Constant';

const apiInstance = axios.create({ baseURL: URL.BASE_URL });

// export const webCacheRequest = async (key: any) => {
//   const response = axios.get(`${URL.WEB_ASSETS_URL}/${key}`);

//   return response;
// };

export const AddStaff = async (data: any) => {
  const response = apiInstance.post(URL.STAFF, data);
  return response;
};

export const AddStudent = async (data: any) => {
  const response = apiInstance.post(URL.STAFF, data);
  return response;
};

export default {
  AddStaff,
  AddStudent,
};
