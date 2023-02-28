import axios from 'axios';
import {IUser, ICloth, IOutfit} from './../recoil/interface';
import {LoginData} from './../screens/auth/authLayout/LoginForm';
import Config from 'react-native-config';

const apiClient = axios.create({
  baseURL: Config.API_HOST,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export type ILoginRes = {
  success: boolean;
  user: IUser;
  clothes: ICloth[];
  outfits: IOutfit[];
};
export type IOutfitData = {
  userId: string;
  outfit: IOutfit;
};
export type IOutfitRes = {
  success: boolean;
  message: string;
  outfits: IOutfit[];
};
// export const sendLogin = (data: LoginData) => {
//   apiClient.post<ILoginRes>('/logIn', data).then(res => {
//     return res;
//   });
// };
export const sendLogin = async (data: LoginData) => {
  const res = await apiClient.post<ILoginRes>('/logIn', data);
  return res.data;
};
export const sendRegister = async (data: LoginData) => {
  const res = await apiClient.post<ILoginRes>('/signUp', data);
  return res.data;
};
export const sendNewOutfit = async (data: IOutfitData) => {
  const res = await apiClient.post<IOutfitRes>('/saveOutfit', data);
  return res.data;
};

async function request<TResponse>(
  url: string,
  config: RequestInit,
): Promise<TResponse> {
  const response = await fetch(url, config);
  return await response.json();
}

export const api = {
  get: <TResponse>(url: string) => request<TResponse>(url, {}),
  post: <TBody extends BodyInit_, TResponse>(url: string, body: TBody) =>
    request<TResponse>(url, {method: 'POST', body}),
};

// export const sendLogin = (data: LoginData) => {
//   request<ILoginRes>(`${Config.API_HOST}/logIn`, {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   })
//     .then(res => {
//       console.log('++++++++', res.user);
//       return res;
//     })
//     .catch(error => {
//       console.error(error);
//     });
// };
