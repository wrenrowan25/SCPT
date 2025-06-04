// =====================
// Import Dependencies
// =====================
import { useEffect, useState } from 'react'; // React hooks for state management and side effects
import { Image, SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native'; // React Native components for layout and UI

// =====================
// Main Screen Component
// =====================
export default function HomeScreen() { // Define the functional component HomeScreen

  // =====================
  // State Initialization
  // =====================
  const [message, setMessage] = useState('Loading...'); // Initialize 'message' state variable with default value 'Loading...'

  // =====================
  // API Call on Component Mount
  // =====================
  useEffect(() => { // Hook that runs once when component mounts
    fetch('http://192.168.56.1:5000/') // Make GET request to backend server (replace with local IP as needed)
      .then(res => res.text()) // Convert response to plain text
      .then(data => setMessage(data)) // Update state with data received from backend
      .catch(() => setMessage("Could not connect to backend")); // If fetch fails, display connection error
  }, []); // Empty dependency array ensures this runs only once on mount

  // =====================
  // Render UI Components
  // =====================
  return (
    <SafeAreaView style={styles.container}> {/* SafeAreaView ensures content doesn't overlap phone status bars */}
      <StatusBar barStyle="light-content" /> {/* Sets status bar text to light color for visibility */}
      <Image
        source={require('../assets/images/ride-scpt-logo.png')} // Load and display the Ride SCPT logo
        style={styles.logo} // Apply styling from styles.logo
        resizeMode="contain" // Scale image to fit while maintaining aspect ratio
      />
      <Text style={styles.title}>Ride SCPT Public Portal</Text> {/* Main app title text */}
      <Text style={styles.subtitle}>{message}</Text> {/* Display message from backend or error */}
    </SafeAreaView>
  );
}

// =====================
// StyleSheet Definitions
// =====================
const styles = StyleSheet.create({
  container: {
    flex: 1, // Fills entire screen
    backgroundColor: '#2aaa56', // Sets Ride SCPT green background color
    alignItems: 'center', // Horizontally center all children
    justifyContent: 'center', // Vertically center all children
    padding: 20, // Add padding around container
  },
  logo: {
    width: 250, // Width of logo image
    height: 100, // Height of logo image
    marginBottom: 20, // Add space below logo
  },
  title: {
    fontSize: 24, // Large font for title text
    color: 'white', // White text color
    fontWeight: 'bold', // Bold font weight
  },
  subtitle: {
    fontSize: 16, // Smaller font for backend message
    color: 'white', // White text color
    marginTop: 10, // Add spacing above message text
  },
});
