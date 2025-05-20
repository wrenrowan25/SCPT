import { useEffect, useState } from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';

export default function HomeScreen() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('http://192.168.56.1:5000/') // Replace with your local IP
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(() => setMessage("Could not connect to backend"));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image
        source={require('../assets/images/ride-scpt-logo.png')}
        style={styles.logo}
        resizeMode="contain"
        />
      <Text style={styles.title}>Ride SCPT Public Portal</Text>
      <Text style={styles.subtitle}>{message}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2aaa56',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 250,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    marginTop: 10,
  },
});
