import {ICloth} from '../interface';
import {atom, selector} from 'recoil';

const clothListState = atom<ICloth[]>({
  key: 'ClothListState',
  default: [],
});

const clothTopListFilterState = atom<string>({
  key: 'ClothTopListFilterState',
  default: 'shirts',
});

const filteredClothTopListState = selector({
  key: 'FilteredClothTopList',
  get: ({get}) => {
    const filter = get(clothTopListFilterState);
    const list = get(clothListState);

    switch (filter) {
      case 'shirts':
        return list.filter(item => item.category === 'shirts');
      case 'coats':
        return list.filter(item => item.category === 'coats');
      case 'jackets':
        return list.filter(item => item.category === 'jackets');
      case 'blazers':
        return list.filter(item => item.category === 'blazers');
      case 'cardigans':
        return list.filter(item => item.category === 'cardigans');
      case 'sweaters':
        return list.filter(item => item.category === 'sweaters');
      case 'tshirts':
        return list.filter(item => item.category === 'tshirts');
      default:
        return list.filter(item => item.category === 'shirts');
    }
  },
});

const clothMiddleListFilterState = atom({
  key: 'ClothMiddleListFilterState',
  default: 'pants',
});

const filteredClothMiddleListState = selector({
  key: 'FilteredClothMiddleList',
  get: ({get}) => {
    const filter = get(clothMiddleListFilterState);
    const list = get(clothListState);

    switch (filter) {
      case 'pants':
        return list.filter(item => item.category === 'pants');
      case 'skirts':
        return list.filter(item => item.category === 'skirts');
      case 'shorts':
        return list.filter(item => item.category === 'shorts');
      case 'jumpsuits':
        return list.filter(item => item.category === 'jumpsuits');
      case 'dresses':
        return list.filter(item => item.category === 'dresses');
      default:
        return list.filter(item => item.category === 'pants');
    }
  },
});
const clothBottomListFilterState = atom({
  key: 'ClothBottomListFilterState',
  default: 'shoes',
});

const filteredClothBottomListState = selector({
  key: 'FilteredClothBottomList',
  get: ({get}) => {
    const filter = get(clothBottomListFilterState);
    const list = get(clothListState);

    switch (filter) {
      case 'shoes':
        return list.filter(item => item.category === 'shoes');
      case 'bags':
        return list.filter(item => item.category === 'bags');
      case 'accessories':
        return list.filter(item => item.category === 'accessories');
      default:
        return list.filter(item => item.category === 'shoes');
    }
  },
});

export {
  clothListState,
  clothTopListFilterState,
  filteredClothTopListState,
  clothMiddleListFilterState,
  filteredClothMiddleListState,
  clothBottomListFilterState,
  filteredClothBottomListState,
};
