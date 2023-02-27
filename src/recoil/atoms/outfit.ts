import {IOutfite} from './../interface';
import {atom} from 'recoil';

export const outfitState = atom<IOutfite[]>({
  key: 'OutfitState',
  default: [],
});
