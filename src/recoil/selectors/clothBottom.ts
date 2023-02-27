import {clothState} from '../atoms/cloth';
import {atom, selector} from 'recoil';

const clothBottomListFilterState = atom({
  key: 'ClothBottomListFilter',
  default: 'shoes',
});

export const filteredClothBottomListState = selector({
  key: 'FilteredClothBottomList',
  get: ({get}) => {
    const filter = get(clothBottomListFilterState);
    const list = get(clothState);

    switch (filter) {
      case 'shoes':
        return list.filter(item => (item.category = 'shoes'));
      case 'bags':
        return list.filter(item => (item.category = 'bags'));
      case 'accessories':
        return list.filter(item => (item.category = 'accessories'));
      default:
        return list;
    }
  },
});
