import {IOutfit} from './../interface';
import {atom} from 'recoil';

export const outfitState = atom<IOutfit[]>({
  key: 'OutfitState',
  default: [],
});
