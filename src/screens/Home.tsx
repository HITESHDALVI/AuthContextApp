import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { homeStyles } from '../styles/homeStyles';
import Lucide from '@react-native-vector-icons/lucide';
import home from '../assets/home.jpg';

export default function Home() {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={homeStyles.screen}>
      <View style={homeStyles.topBar}>
        <Text style={homeStyles.logo}>Dashboard</Text>
        <View style={homeStyles.userMenu}>
          <View style={homeStyles.avatarSmall}>
            <Lucide name="user" size={25} color="#FFF" />
          </View>
        </View>
      </View>
      <Image source={home} style={homeStyles.heroImage} />
      <View style={homeStyles.heroSection}>
        <Text style={homeStyles.greeting}>Good evening,</Text>
        <Text style={homeStyles.userName}>{user?.name}</Text>
        <View style={homeStyles.emailRow}>
          <Text style={homeStyles.email}>{user?.email}</Text>
          <View style={homeStyles.verifiedBadge}>
            <Text style={homeStyles.verifiedText}>✓ Verified</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={homeStyles.logoutBtn} onPress={logout}>
        <Text style={homeStyles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
