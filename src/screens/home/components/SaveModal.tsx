import React, {useState} from 'react';
import {Text, Pressable, View, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import useCloth from '../hooks/useCloth';

const SaveModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = React.useState('');

  const {onSaveOutfit} = useCloth();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const saveOutfit = async () => {
    if (text === '') {
      return;
    }
    await onSaveOutfit(text);
    setModalVisible(false);
    onChangeText('');
  };

  return (
    <>
      <Pressable
        onPress={toggleModal}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'deepskyblue' : 'burlywood',
          },
          {
            position: 'absolute',
            marginTop: 'auto',
            marginBottom: 'auto',
            right: 10,
            paddingHorizontal: 15,
            paddingVertical: 5,
            borderRadius: 15,
          },
        ]}>
        <Text style={{color: 'white'}}>Align & Save</Text>
      </Pressable>
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 22,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            borderColor: 'rgba(0, 0, 0, 0.1)',
            flexDirection: 'column',
            rowGap: 30,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>
            Name and Save your outfit
          </Text>
          <TextInput
            style={{
              width: 200,
              height: 40,
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
              textAlign: 'center',
            }}
            onChangeText={onChangeText}
            value={text}
          />
          <Pressable
            onPress={saveOutfit}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'deepskyblue' : 'burlywood',
              },
              {
                paddingHorizontal: 30,
                paddingVertical: 8,
                borderRadius: 30,
              },
            ]}>
            <Text style={{color: 'white'}}>Save</Text>
          </Pressable>
        </View>
      </Modal>
    </>
  );
};

export default SaveModal;
