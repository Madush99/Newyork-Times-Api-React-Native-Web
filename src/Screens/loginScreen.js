import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../actions/userActions';
import Loader from '../components/loader';
import Message from '../components/message';

const LoginScreen = ({history}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin);
  const {loading, error, userInfo} = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push('/movies');
    }
  }, [history, userInfo]);

  const onSubmitHandler = () => {
    dispatch(login(email, password));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message />
      ) : (
        <ImageBackground
          source={{
            uri: 'https://free4kwallpapers.com/uploads/originals/2019/03/04/neon-japan-wallpaper.jpg',
          }}
          style={styles.image}>
          <View style={styles.card}>
            <Text style={styles.heading}>LOGIN</Text>
            <Text style={styles.heading2}>
              WELCOME TO NEWYORK TIMES MOVIE REVIEWS
            </Text>

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
                <TouchableOpacity
                  style={styles.button}
                  onPress={onSubmitHandler}>
                  <Text style={styles.buttonText}>LOG IN</Text>
                </TouchableOpacity>
                <Text style={styles.txt}>FORGET PASSWORD ?</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '900px',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: '70%',
    marginTop: '10%',
    borderRadius: 20,
    maxHeight: 380,
    paddingBottom: '30%',
  },
  txt: {
    fontFamily: 'Cochin',
    paddingTop: '10px',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '17px',
  },
  heading: {
    fontFamily: 'Cochin',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: '5%',
    marginBottom: '5px',
    color: 'black',
    alignSelf: 'center',
  },
  heading2: {
    fontFamily: 'Cochin',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: '30px',
    marginBottom: '30px',
    color: 'black',
    alignSelf: 'center',
  },
  form: {
    flex: 1,
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
    fontFamily: 'Cochin',
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
