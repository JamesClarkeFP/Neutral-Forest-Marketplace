import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content } from 'native-base'
import Swiper from 'react-native-swiper'

export default function App() {
  return (
    <Container>
      <Content>
        <Swiper 
          loop={false}
          showsPagination={false}
          index={1}>
          <View style={styles.container}>
            <Text>Basket</Text>
          </View>
          <View style={styles.container}>
            <Text >Store</Text>
          </View>
          <View style={styles.container}>
            <Text>Blog</Text>
          </View>
        </Swiper>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
