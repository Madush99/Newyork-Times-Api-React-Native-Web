import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../actions/userActions';

const LoginScreen = ({history}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin);
  const {loding, error, userInfo} = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push('/movies');
    }
  }, [history, userInfo]);

  const onSubmitHandler = () => {
    dispatch(login(email, password));
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://wallpapercave.com/wp/wp3285541.jpg',
      }}
      style={styles.image}>
      <View style={styles.card}>
        <Text style={styles.heading}></Text>
        <View style={styles.form}>
          <View style={styles.inputs}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              autoCapitalize="none"
              onChangeText={setEmail}></TextInput>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              placeholder="Password"
              onChangeText={setPassword}></TextInput>
            <TouchableOpacity style={styles.button} onPress={onSubmitHandler}>
              <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: '80%',
    marginTop: '40%',
    borderRadius: 20,
    maxHeight: 380,
    paddingBottom: '30%',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: '10%',
    marginTop: '5%',
    marginBottom: '30%',
    color: 'black',
  },
  form: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: '5%',
  },
  inputs: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '10%',
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingTop: 10,
    fontSize: 16,
    minHeight: 40,
  },
  button: {
    width: '80%',
    backgroundColor: 'black',
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
  },
  buttonAlt: {
    width: '80%',
    borderWidth: 1,
    height: 40,
    borderRadius: 50,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonAltText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
  },
  message: {
    fontSize: 16,
    marginVertical: '5%',
  },
});

export default LoginScreen;
