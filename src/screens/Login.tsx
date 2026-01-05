import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Lucide from '@react-native-vector-icons/lucide';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthContext } from '../context/AuthContext';
import { isValidEmail } from '../utils/validation';
import { loginStyles } from '../styles/loginStyles';
import { RootStackParamList } from '../navigation/AppNavigation';

type LoginNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

type Props = {
  navigation: LoginNavigationProp;
};

type LoginForm = {
  email: string;
  password: string;
  showPassword: boolean;
};

const Login: React.FC<Props> = ({ navigation }) => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error('AuthContext must be used within AuthProvider');
  }

  const { login } = auth;

  const [error, setError] = useState<string>('');
  const [form, setForm] = useState<LoginForm>({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = <K extends keyof LoginForm>(
    key: K,
    value: LoginForm[K],
  ) => {
    setForm(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleLogin = async (): Promise<void> => {
    setError('');
    if (!form.email || !form.password) {
      return setError('Please enter user credentials');
    }
    if (!isValidEmail(form.email)) {
      return setError('Invalid email format');
    }
    try {
      await login(form.email, form.password);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.header}>
        <View style={loginStyles.iconWrapper}>
          <Lucide name="fingerprint" size={60} color="#4F46E5" />
        </View>
        <Text style={loginStyles.heading}>Login</Text>
        <Text style={loginStyles.subText}>Enter your credentials</Text>
      </View>
      <View style={loginStyles.inputWrapper}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#6B7280"
          keyboardType="email-address"
          autoCapitalize="none"
          style={loginStyles.input}
          value={form.email}
          onChangeText={text => handleChange('email', text)}
        />
      </View>
      <View style={loginStyles.inputWrapper}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#6B7280"
          secureTextEntry={!form.showPassword}
          style={[loginStyles.input, { paddingRight: 50 }]}
          value={form.password}
          onChangeText={text => handleChange('password', text)}
        />
        <TouchableOpacity
          onPress={() => handleChange('showPassword', !form.showPassword)}
          style={loginStyles.eyeButton}
        >
          <MaterialCommunityIcons
            name={form.showPassword ? 'eye-off-outline' : 'eye-outline'}
            size={22}
            color="#6B7280"
          />
        </TouchableOpacity>
      </View>
      {error ? <Text style={loginStyles.error}>{error}</Text> : null}
      <TouchableOpacity style={loginStyles.button} onPress={handleLogin}>
        <Text style={loginStyles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={loginStyles.footer}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={loginStyles.footerText}>
          Don't have an account? Sign up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
