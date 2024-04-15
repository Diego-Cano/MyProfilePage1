import React from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet } from 'react-native';
import styles from './styles'; // Importing styles from styles.js

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>- Diego Cano -</Text>
      </View>
      <Image
        source={require('./assets/profileImage.jpg')} // Make sure the image is in the correct directory
        style={styles.profileImage}
      />
      <ScrollView style={styles.infoSection}>
        <Text style={styles.infoText}>#Welcome to my profile page#</Text>
        <Text style={styles.infoText}>Here is a list of my hobbies:</Text>
        <Text style={styles.infoText}>1. Working out</Text>
        <Text style={styles.infoText}>2. Rowing</Text>
        <Text style={styles.infoText}>3. Hiking</Text>
        <Text style={styles.infoText}>4. Programming</Text>
        <Text style={styles.infoText}>5. Reading</Text>
        <Text style={styles.infoText}>6. Traveling</Text>
        <Text style={styles.infoText}>7. Photography</Text>
        <Text style={styles.infoText}>8. Yoga</Text>
        <Text style={styles.infoText}>9. Gardening</Text>
        <Text style={styles.infoText}>10. Drawing</Text>
      </ScrollView>
      <View style={styles.form}>
        <Text style={styles.infoText}>Please, feel free to contact Me :)</Text>
        <TextInput style={styles.input} placeholder="Your Name" />
        <TextInput style={styles.input} placeholder="Leave a comment" />
        <Text style={styles.button}>Submit</Text>
      </View>
    </View>
  );
}
