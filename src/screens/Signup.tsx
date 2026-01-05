import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Lucide from '@react-native-vector-icons/lucide';
import { AuthContext } from '../context/AuthContext';
import { isValidEmail } from '../utils/validation';
import { loginStyles } from '../styles/loginStyles';

type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
};

type SignupScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Signup'
>;

type Props = {
  navigation: SignupScreenNavigationProp;
};

type SignupForm = {
  name: string;
  email: string;
  password: string;
};

const Signup: React.FC<Props> = ({ navigation }) => {
  const { signup } = useContext(AuthContext);

  const [error, setError] = useState<string>('');
  const [form, setForm] = useState<SignupForm>({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = form;

  const handleChange = <K extends keyof SignupForm>(
    key: K,
    value: SignupForm[K],
  ) => {
    setForm(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSignup = async () => {
    setError('');
    if (!name || !email || !password) {
      return setError('All fields are required');
    }
    if (!isValidEmail(email)) {
      return setError('Invalid email format');
    }
    if (password.length < 6) {
      return setError('Password must be at least 6 characters');
    }
    try {
      await signup(form.name, form.email, form.password);
      navigation.replace('Login');
    } catch (err: any) {
      setError(err?.message || 'Something went wrong');
    }
  };

  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.header}>
        <View style={loginStyles.iconWrapper}>
          <Lucide name="circle-user" size={60} color="#4F46E5" />
        </View>
        <Text style={loginStyles.heading}>Sign Up</Text>
        <Text style={loginStyles.subText}>Join Us Today</Text>
      </View>

      <View style={loginStyles.inputWrapper}>
        <TextInput
          placeholder="Name"
          placeholderTextColor="#6B7280"
          style={loginStyles.input}
          value={name}
          onChangeText={text => handleChange('name', text)}
        />
      </View>

      <View style={loginStyles.inputWrapper}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#6B7280"
          style={loginStyles.input}
          value={email}
          onChangeText={text => handleChange('email', text)}
        />
      </View>

      <View style={loginStyles.inputWrapper}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#6B7280"
          secureTextEntry
          style={[loginStyles.input, { paddingRight: 50 }]}
          value={password}
          onChangeText={text => handleChange('password', text)}
        />
      </View>

      {error ? <Text style={loginStyles.error}>{error}</Text> : null}

      <TouchableOpacity style={loginStyles.button} onPress={handleSignup}>
        <Text style={loginStyles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={loginStyles.footer}
        onPress={() => navigation.goBack()}
      >
        <Text style={loginStyles.footerText}>
          Already have an account? Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;
