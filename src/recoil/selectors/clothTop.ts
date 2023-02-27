import {clothState} from '../atoms/cloth';
import {atom, selector} from 'recoil';

const clothTopListFilterState = atom({
  key: 'ClothTopListFilter',
  default: 'shirts',
});

export const filteredClothTopListState = selector({
  key: 'FilteredClothTopList',
  get: ({get}) => {
    const filter = get(clothTopListFilterState);
    const list = get(clothState);

    switch (filter) {
      case 'shirts':
        return list.filter(item => (item.category = 'shirts'));
      case 'coats':
        return list.filter(item => (item.category = 'coats'));
      case 'jackets':
        return list.filter(item => (item.category = 'jackets'));
      case 'blazers':
        return list.filter(item => (item.category = 'blazers'));
      case 'cardigans':
        return list.filter(item => (item.category = 'cardigans'));
      case 'sweaters':
        return list.filter(item => (item.category = 'sweaters'));
      case 'tshirts':
        return list.filter(item => (item.category = 'tshirts'));
      default:
        return list;
    }
  },
});
