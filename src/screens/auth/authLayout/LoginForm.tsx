import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {
  Text,
  TextInput,
  View,
  TextInputProps,
  StyleSheet,
  Pressable,
} from 'react-native';
import {
  PUBLICSCREENS,
  PublicRootStackParamList,
} from '../../../navigation/types';

type LoginData = {
  name: string;
  password: string;
};

const SingleInput = React.forwardRef<TextInput, TextInputProps>(
  (props, ref) => {
    return (
      <TextInput {...props} ref={ref} style={[styles.input, props.style]} />
    );
  },
);

type Props = {
  navigation: StackNavigationProp<
    PublicRootStackParamList,
    PUBLICSCREENS.LOGIN,
    undefined
  >;
};
const LoginForm = ({navigation}: Props) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginData>({
    defaultValues: {
      name: '',
      password: '',
    },
  });
  const onSubmit = (data: LoginData) => {
    console.log(data);
  };
  return (
    <View
      style={{
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}>
      <Text style={styles.labelText}>Name</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <SingleInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Input your name"
          />
        )}
        name="name"
      />
      {errors.name && <Text>This is required.</Text>}

      <Text style={styles.labelText}>Password</Text>
      <Controller
        control={control}
        rules={{
          required: true,
          minLength: 3,
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <SingleInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Input your password"
          />
        )}
        name="password"
      />
      {errors.password && <Text>This is required.</Text>}

      <Pressable
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          paddingVertical: 10,
          width: 200,
          borderRadius: 15,
          marginVertical: 15,
        }}
        onPress={handleSubmit(onSubmit)}>
        <Text style={{color: 'white'}}>Login</Text>
      </Pressable>
      <Pressable
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 10,
          width: 200,
          borderRadius: 15,
          borderColor: 'black',
          borderWidth: 1,
        }}
        onPress={() => {
          navigation.replace(PUBLICSCREENS.SIGNUP);
        }}>
        <Text>Sign up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  labelText: {
    color: 'black',
    marginTop: 10,
    marginBottom: 3,
  },
});

export default LoginForm;
