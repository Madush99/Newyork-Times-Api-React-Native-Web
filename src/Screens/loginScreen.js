import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const LoginScreen = ({history}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin);
  const {loding, error, userInfo} = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push('/movies');
    }
  }, [history, userInfo]);

  const onSubmitHandler =

  return <Text>Login</Text>;
};

export default LoginScreen;
