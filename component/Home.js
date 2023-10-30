import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity   } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default function Home({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <View style = {styles.profile}>
            <Image 
              source={require('../assets/pexels-aleksandar-pasaric-325185.jpg')} 
              style={styles.image}/>
              <Text style={styles.ProfileText}>Joshua Fredrick</Text>
          </View>
           <View>
           <MaterialIcons name="notifications" size={20} color="white" />
           </View>
        </View>

        <View style={styles.budget}>
            <View>
                <Text style = {{color: '#fff', fontSize: 18, fontWeight: 'bold'}}> Estimated Budget </Text>
                <Text style = {{color: '#fff', fontSize: 40, fontWeight: 'bold'}}> # 1,000,000 </Text>
            </View>
            <View>
            <Text style = {{color: '#fff', fontSize: 18, fontWeight: 'bold'}}> Total Balance </Text>
            <Text style = {{color: '#fff', fontSize: 40, fontWeight: 'bold'}}> # 500,000 </Text>
            </View>
        </View>

        <View style={styles.section}>

          <View style={styles.firstSection}>

              <View style = {styles.sectionEach}> 
                <View style = {styles.sectionIcon}>
                 <MaterialIcons name="screen-share" size={34} color="#318DDE"/>
                </View>
               <Text style= {styles.navText}> Send </Text>
              </View>

              <View style = {styles.sectionEach}>
                <View style = {styles.sectionIcon}>
                  <MaterialIcons name="credit-card" size={34} color="#318DDE"/>
                </View>
                  <Text style= {styles.navText}> Pay </Text>
              </View>

              <View style = {styles.sectionEach}>
                <View style = {styles.sectionIcon}>
                  <MaterialIcons name="wifi" size={34} color="#318DDE"/>
                </View>
                  <Text style= {styles.navText}> Recharger </Text>
              </View>

              <View style = {styles.sectionEach}> 
                <View style = {styles.sectionIcon}>
                <MaterialIcons name="receipt" size={34} color="#318DDE"/>
                </View>
                <Text style= {styles.navText}> Bill </Text>
              </View>

          </View>
          
          <View style={styles.secondSection}>

              <View> 

               <Text style= {styles.headerText}> Transaction history </Text>

                <View style= {styles.dateYears}>

                    <View style= {styles.date}> 
                      <MaterialIcons name="today" size={15} color="#000"/>
                      <Text> 22 Sept </Text>
                      <MaterialIcons name="arrow-drop-down" size={15} color="#000"/>
                    </View>

                    <View style= {styles.years}>
                    <MaterialIcons name="event" size={15} color="#000"/>
                      <Text> 2022 </Text>
                      <MaterialIcons name="arrow-drop-down" size={15} color="#000"/>
                    </View>

                </View>

              </View>

              <View style = {styles.secondSectionEach}>

                <View style = {styles.secondSectionIcon}>
                  <MaterialIcons name="wifi-protected-setup" size={34} color="#FF6421"/>
                </View>

                <View  style = {styles.historyNote}>
                  <Text style= {styles.sectionText}> Bank Transfer </Text>
                  <Text style= {styles.navText}> 10:20 Am  </Text>
                </View>

                  <MaterialIcons name="arrow-right" size={30} color="#FF6421"/>
              </View>

              <View style = {styles.secondSectionEach}>
                
              <View style = {styles.secondSectionIcon}>
                  <MaterialIcons name="payment" size={34} color="#FF6421"/>
                </View>

                <View  style = {styles.historyNote}>
                  <Text style= {styles.sectionText}> ATM Withdrawal</Text>
                  <Text style= {styles.navText}> 2:20 Pm  </Text>
                </View>

                  <MaterialIcons name="arrow-right" size={30} color="#FF6421"/>
              
              </View>

              <View style = {styles.secondSectionEach}> 

              <View style = {styles.secondSectionIcon}>
                  <MaterialIcons name="smartphone" size={34} color="#FF6421"/>
                </View>

                <View style = {styles.historyNote}>
                  <Text style= {styles.sectionText}> Mobile App Transfer </Text>
                  <Text style= {styles.navText}> 11:30 Pm  </Text>
                </View>

                  <MaterialIcons name="arrow-right" size={30} color="#FF6421"/>

              </View>

          </View>
           
        </View>

      <View style= {styles.navigationBar}>

           <TouchableOpacity  style= {styles.homeInput} onPress={() => navigation.navigate('Home')}>
              <MaterialIcons name="home-filled" size={34} color="#318DDE"/>
           <Text style= {styles.navText}>Home</Text>
           </TouchableOpacity >
           <TouchableOpacity  style= {styles.navnput} onPress={() => navigation.navigate('Expense')}>
           <MaterialIcons name="receipt-long" size={34} color="#318DDE" />
           <Text style= {styles.navText}>Expense</Text>
           </TouchableOpacity >
           <View style= {styles.navnput}>
           <MaterialIcons name="add-circle-outline" size={38} color="#FF6421" />
           <Text style= {styles.navText}>Budget</Text>
           </View>
           <View style= {styles.navnput}>
           <MaterialIcons name="security" size={34} color="#318DDE" />
           <Text style= {styles.navText}>Security</Text>
           </View>
           <View style= {styles.navnput}>
           <MaterialIcons name="settings" size={34} color="#318DDE" />
           <Text style= {styles.navText}>Setting</Text>
           </View>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#318DDE',
    paddingTop: 50,
  },
  header: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: { 
    width: 50, 
    height: 50,
    borderRadius: 500,
  },
  ProfileText: { 
    fontSize: 15,
    color: '#fff',
    marginLeft: 5,
  },
  navigationBar: { 
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: 65,
  backgroundColor: 'white',
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: 20,
  paddingRight: 20,
  justifyContent: 'space-between',
  borderRadius: 20,
  borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)', // Adjust the shadow color and opacity
    shadowColor: 'black', // Set the shadow color
    shadowOffset: { width: 0, height: -2 }, // Offset to create a top shadow
    shadowOpacity: 0.5, // Adjust the shadow opacity
    shadowRadius: 2, // Adjust the shadow radius
    elevation: 5, // Shadow effect on Android
  },
  homeInput: { 
    width: 55,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 5, // Shadow effect on Android
    shadowColor: 'black', // Shadow effect on iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navnput: { 
    width: 55,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    fontSize: 12,
  },
  section: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -100,
    borderRadius: 30,
  },
  firstSection: {
    flexDirection: 'row',
    marginTop: 120,
    marginLeft: 20,
    marginRight: 20, 
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  sectionEach: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionIcon: {
    width: 53,
    height: 53,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 5, // Shadow effect on Android
    shadowColor: 'black', // Shadow effect on iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  sectionText: {
    fontSize: 18,
  },
  secondSection: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10, 
  },
  dateYears: {
    marginTop: 5,
    marginLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  years: {
    width: 80,
    height: 24,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 5, // Shadow effect on Android
    shadowColor: 'black', // Shadow effect on iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  date: {
    width: 90,
    height: 24,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 5, // Shadow effect on Android
    shadowColor: 'black', // Shadow effect on iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondSectionIcon: {
    width: 53,
    height: 53,
    backgroundColor: 'white',
    borderRadius: 50,
    elevation: 5, // Shadow effect on Android
    shadowColor: 'black', // Shadow effect on iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondSectionEach: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  historyNote: {
    marginRight: 80,

  },
  budget: {
    backgroundColor: '#081723',
    width: 320,
    height: 240,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
    borderRadius: 20,
    zIndex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    padding: 20,
  },
});
