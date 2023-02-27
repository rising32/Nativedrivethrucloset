import {clothState} from '../atoms/cloth';
import {atom, selector} from 'recoil';

const clothMiddleListFilterState = atom({
  key: 'ClothMiddleListFilter',
  default: 'pants',
});

export const filteredClothMiddleListState = selector({
  key: 'FilteredClothMiddleList',
  get: ({get}) => {
    const filter = get(clothMiddleListFilterState);
    const list = get(clothState);

    switch (filter) {
      case 'pants':
        return list.filter(item => (item.category = 'pants'));
      case 'skirts':
        return list.filter(item => (item.category = 'skirts'));
      case 'shorts':
        return list.filter(item => (item.category = 'shorts'));
      case 'jumpsuits':
        return list.filter(item => (item.category = 'jumpsuits'));
      case 'dresses':
        return list.filter(item => (item.category = 'dresses'));
      default:
        return list;
    }
  },
});
