import {useState, useEffect} from 'react';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import {format} from 'date-fns';
import {
  clothTopListFilterState,
  filteredClothTopListState,
  filteredClothMiddleListState,
  clothMiddleListFilterState,
  filteredClothBottomListState,
  clothBottomListFilterState,
  userState,
  outfitState,
} from '../../../recoil/atoms';
import {ICloth, IOutfit} from '../../../recoil/interface';
import {sendNewOutfit} from '../../../services/UserService';
import {Alert} from 'react-native';

export type Position = 'top' | 'middle' | 'bottom';

export default function useCloth() {
  const user = useRecoilValue(userState);
  const today = format(new Date(), 'dd/MM/yyyy k:m:s');
  const topList = useRecoilValue(filteredClothTopListState);
  const [topFilter, setTopFilter] = useRecoilState(clothTopListFilterState);
  const middleList = useRecoilValue(filteredClothMiddleListState);
  const [middleFilter, setMiddleFilter] = useRecoilState(
    clothMiddleListFilterState,
  );
  const bottomList = useRecoilValue(filteredClothBottomListState);
  const [bottomFilter, setBottomFilter] = useRecoilState(
    clothBottomListFilterState,
  );
  const setOutfites = useSetRecoilState(outfitState);

  const [selectedTopCloth, setSelectedTopCloth] = useState<ICloth | null>(null);
  const [selectedMiddleCloth, setSelectedMiddleCloth] = useState<ICloth | null>(
    null,
  );
  const [selectedBottomCloth, setSelectedBottomCloth] = useState<ICloth | null>(
    null,
  );
  const [selectedTopClothID, setSelectedTopClothID] = useState(0);

  useEffect(() => {
    console.log('selectedTopClothID = ', selectedTopClothID, topList.length);
    if (topList.length > 0) {
      setSelectedTopCloth(topList[selectedTopClothID]);
    } else {
      setSelectedTopCloth(null);
    }
  }, [topList, selectedTopClothID]);
  useEffect(() => {
    if (middleList.length > 0) {
      setSelectedMiddleCloth(middleList[0]);
    } else {
      setSelectedMiddleCloth(null);
    }
  }, [middleList]);
  useEffect(() => {
    if (bottomList.length > 0) {
      setSelectedBottomCloth(bottomList[0]);
    } else {
      setSelectedMiddleCloth(null);
    }
  }, [bottomList]);

  const updateFilter = (position: Position, item: string) => {
    if (position === 'top') {
      setTopFilter(item);
    } else if (position === 'middle') {
      setMiddleFilter(item);
    } else {
      setBottomFilter(item);
    }
  };
  const onSelectCloth = (position: Position, index: number) => {
    console.log('=========', position, index, topList.length);
    if (position === 'top') {
      setSelectedTopClothID(index);
    } else if (position === 'middle') {
      setSelectedMiddleCloth(middleList[index]);
    } else {
      setSelectedBottomCloth(bottomList[index]);
    }
  };
  const onSaveOutfit = async (title: string) => {
    try {
      if (user?.id) {
        if (!selectedTopCloth || !selectedMiddleCloth || !selectedBottomCloth) {
          Alert.alert('Oops!', 'Please pick 3 items');
          return 'invalid';
        }
        const totalPrice =
          selectedTopCloth.price +
          selectedMiddleCloth.price +
          selectedBottomCloth.price;
        const outfit: IOutfit = {
          title,
          userId: user.id,
          totalPrice,
          clothes: [selectedTopCloth, selectedMiddleCloth, selectedBottomCloth],
        };
        const response = await sendNewOutfit({userId: user.id, outfit});
        if (response.success) {
          setOutfites(response.outfits);
          Alert.alert(response.message);
          return response.message;
        } else {
          return 'failed';
        }
      }
    } catch (err) {
      console.log('error=', err);
    }
  };

  return {
    today,
    topFilter,
    middleFilter,
    bottomFilter,
    topList,
    bottomList,
    middleList,
    updateFilter,
    onSelectCloth,
    onSaveOutfit,
    selectedTopCloth,
    selectedMiddleCloth,
    selectedBottomCloth,
  };
}
