import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>
          <Text style={styles.boldText}>Hello, Devs</Text>
        </Text>
        <Image
          source={require('./assets/person.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={[styles.smallText, styles.boldText]}>14 tasks today</Text>
      <View style={styles.searchAndImageContainer}>
        <View style={styles.searchContainer}>
          <View style={styles.searchContent}>
            <Image
              source={require('./assets/mynaui_search.png')}
              style={styles.searchImage}
              resizeMode="contain"
            />
            <Text style={styles.searchText}>Search</Text>
          </View>
        </View>
        <Image
          source={require('./assets/Group 2.png')}
          style={styles.additionalImage}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.categoriesText}>Categories</Text>

      <View style={styles.categoryContainer}>
        <View style={styles.exerciseContainer}>
          <Text style={styles.exerciseText}>Exercise</Text>
          <Text style={styles.exerciseTasksText}>12 tasks</Text>
          <Image
            source={require('./assets/young woman working online.png')}
            style={styles.exerciseImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.studyContainer}>
          <Text style={styles.studyText}>Study</Text>
          <Text style={styles.studyTasksText}>12 tasks</Text>
          <Image
            source={require('./assets/Categories card.png')}
            style={styles.studyImage}
            resizeMode="contain"
          />
        </View>
      </View>

      <View style={styles.categoryContainer}>
        <View style={styles.codeContainer}>
          <Text style={styles.codeText}>Code</Text>
          <Text style={styles.codeTasksText}>12 tasks</Text>
          <Image
            source={require('./assets/young woman working online.png')}
            style={styles.codeImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.readContainer}>
          <Text style={styles.readText}>Read</Text>
          <Text style={styles.readTasksText}>12 tasks</Text>
          <Image
            source={require('./assets/read.jpg')}
            style={styles.readImage}
            resizeMode="contain"
          />
        </View>
      </View>

      <View style={styles.categoryContainer}>
        <View style={styles.cookContainer}>
          <Text style={styles.cookText}>Cook</Text>
          <Text style={styles.cookTasksText}>12 tasks</Text>
          <Image
            source={require('./assets/cook.jpg')}
            style={styles.cookImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.artContainer}>
          <Text style={styles.artText}>Art</Text>
          <Text style={styles.artTasksText}>12 tasks</Text>
          <Image
            source={require('./assets/art.jpg')}
            style={styles.artImage}
            resizeMode="contain"
          /> 
          


        </View>
      </View>
      <Text style={styles.categoriesText}>Ongoing Tasks</Text>
      <View style={styles.whiteContainer}>
        <Text style={styles.whiteContainerText}>Mobile App Development</Text>
      </View>

      <View style={styles.whiteContainer}>
        <Text style={styles.whiteContainerText}>Network Development</Text>
      </View>

      <View style={styles.whiteContainer}>
        <Text style={styles.whiteContainerText}>Push Up </Text>
      </View>
      <View style={styles.whiteContainer}>
        <Text style={styles.whiteContainerText}>Front-end Development </Text>
        </View>
        <View style={styles.whiteContainer}>
        <Text style={styles.whiteContainerText}>Back-end Development </Text>
        </View>
        <View style={styles.whiteContainer}>
        <Text style={styles.whiteContainerText}>Version Control  </Text>
</View>
      
<View style={styles.whiteContainer}>
        <Text style={styles.whiteContainerText}>Project Management  </Text>
</View>
      
<View style={styles.whiteContainer}>
        <Text style={styles.whiteContainerText}>Client communication </Text>
</View>
      
<View style={styles.whiteContainer}>
        <Text style={styles.whiteContainerText}>Testing Assuranve   </Text>
</View>
      
<View style={styles.whiteContainer}>
        <Text style={styles.whiteContainerText}>Project  Management </Text>
</View>
      
<View style={styles.whiteContainer}>
        <Text style={styles.whiteContainerText}>API Development  </Text>
</View>
<View style={styles.whiteContainer}>
        <Text style={styles.whiteContainerText}>Accessibility </Text>
</View>
<View style={styles.whiteContainer}>
        <Text style={styles.whiteContainerText}>Content Management </Text>
</View>
<View style={styles.whiteContainer}>
        <Text style={styles.whiteContainerText}>Ux </Text>
</View>
<View style={styles.whiteContainer}>
        <Text style={styles.whiteContainerText}>Security </Text>
</View>
      

      <StatusBar barStyle="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbf9f7',
    paddingTop: 50,
    paddingLeft: 20,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  text: {
    flex: 1,
    fontSize: 26,
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 14,
    marginTop: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  searchAndImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  searchContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  searchContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchImage: {
    width: 30,
    height: 30,
    marginRight: 12,
  },
  searchText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoriesText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
  },
  additionalImage: {
    width: 50,
    height: 50,
    marginLeft: 210,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  exerciseContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    width: '45%',
    marginRight: 10,
  },
  studyContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    width: '45%',
  },
  exerciseText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  exerciseTasksText: {
    fontSize: 12,
    marginTop: 5,
  },
  studyText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  studyTasksText: {
    fontSize: 12,
    marginTop: 5,
  },
  exerciseImage: {
    width: 40,
    height: 40,
    marginTop: 10,
  },
  studyImage: {
    width: 40,
    height: 40,
    marginTop: 10,
  },
  codeContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    width: '45%',
    marginRight: 10,
  },
  readContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    width: '45%',
  },
  codeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  codeTasksText: {
    fontSize: 12,
    marginTop: 5,
  },
  codeImage: {
    width: 40,
    height: 40,
    marginTop: 10,
  },
  readText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  readTasksText: {
    fontSize: 12,
    marginTop: 5,
  },
  readImage: {
    width: 40,
    height: 40,
    marginTop: 10,
  },
  cookContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    width: '45%',
    marginRight: 10,
  },
  cookText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cookTasksText: {
    fontSize: 12,
    marginTop: 5,
  },
  cookImage: {
    width: 40,
    height: 40,
    marginTop: 10,
  },
  artContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    width: '45%',
  },
  artText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  artTasksText: {
    fontSize: 12,
    marginTop: 5,
  },
  artImage: {
    width: 40,
    height: 40,
    marginTop: 10,
  },
  whiteContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  whiteContainerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});



