import {ICloth} from '../interface';
import {atom} from 'recoil';

export const clothState = atom<ICloth[]>({
  key: 'ClothState',
  default: [],
});
