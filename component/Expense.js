import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  TouchableOpacity   } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { BarChart } from 'react-native-chart-kit';

const expenseData = [
  { years: '2018', amount: 270 },
  { years: '2019', amount: 190 },
  { years: '2020', amount: 380 },
  { years: '2021', amount: 250 },
  { years: '2022', amount: 400 },
  { years: '2023', amount: 350 },
  // Add more data points as needed
];



export default function Expense({navigation}) {

   const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    decimalPlaces: 0,
  };

  return (
    <View style={styles.container}>

      <View style={styles.headerBar}>
      <MaterialIcons name="arrow-back" size={20} color="#000"/>
      <Text>Expense </Text>
      </View>

      <View style = {styles.containerChat}>
      <BarChart
        data={{
          labels: expenseData.map((item) => item.years),
          datasets: [
            {
              data: expenseData.map((item) => item.amount),
            },
          ],
        }}
        width={330}
        height={200}
        style={{marginRight: 20}}
        chartConfig={chartConfig}
      />
    </View>

    <View style= {styles.sectionContainer}>

    <View style= {styles.sectionContainerFirst}>
      <Text style = {styles.subText}>Top categories</Text>
      <View style= {styles.allDisplay}>
        <Text>All </Text>
      <MaterialIcons name="arrow-drop-down" size={15} color="#318DDE"/>
      </View>
    </View>

        <View style = {styles.sectionContainerSecond}>

        <View>

        <View style = {styles.categories}>
            <View style = {styles.iconCircle}>
              <MaterialIcons name="wifi-protected-setup" size={34} color="#318DDE"/>
            </View>

            <View style = {styles.categoriesContainers}>

              <View style ={styles.containerTex}>
                      <Text style ={ styles.sectionText}>
                        Transaction
                    </Text>
                    <View style={{flexDirection: 'row', }}>
                      <Text style={{marginRight: 5, fontSize: 12, alignItems:'center' }}>0%</Text>
                      <Text>
                        ₦ 0.0
                      </Text>
                    </View>
                </View>

                <View style ={styles.progessBar}>

              </View>

              </View>
              
          </View>

        <View style = {styles.categories}>
            <View style = {styles.iconCircle}>
              <MaterialIcons name="shopping-bag" size={34} color="#318DDE"/>
            </View>

            <View style = {styles.categoriesContainers}>

              <View style ={styles.containerTex}>
                      <Text style ={ styles.sectionText}>
                      Groceries
                    </Text>
                    <View style={{flexDirection: 'row', }}>
                      <Text style={{marginRight: 5, fontSize: 12, alignItems:'center' }}>0%</Text>
                      <Text>
                        ₦ 0.0
                      </Text>
                    </View>
                </View>

                <View style ={styles.progessBar}>

              </View>

              </View>

          </View>

        <View style = {styles.categories}>
            <View style = {styles.iconCircle}>
              <MaterialIcons name="receipt-long" size={34} color="#318DDE"/>
            </View>

            <View style = {styles.categoriesContainers}>

              <View style ={styles.containerTex}>
                      <Text style ={ styles.sectionText}>
                      Bill Payment
                    </Text>
                    <View style={{flexDirection: 'row', }}>
                      <Text style={{marginRight: 5, fontSize: 12, alignItems:'center' }}>0%</Text>
                      <Text>
                        ₦ 0.0
                      </Text>
                    </View>
                </View>

                <View style ={styles.progessBar}>

              </View>

              </View>

          </View>

        <View style = {styles.categories}>
            <View style = {styles.iconCircle}>
              <MaterialIcons name="bolt" size={34} color="#318DDE"/>
            </View>

            <View style = {styles.categoriesContainers}>

              <View style ={styles.containerTex}>
                      <Text style ={ styles.sectionText}>
                      Electronics
                    </Text>
                    <View style={{flexDirection: 'row', }}>
                      <Text style={{marginRight: 5, fontSize: 12, alignItems:'center' }}>0%</Text>
                      <Text>
                        ₦ 0.0
                      </Text>
                    </View>
                </View>

                <View style ={styles.progessBar}>

              </View>

              </View>

          </View>

    
        </View>

        </View>

    </View>

      <View style= {styles.navigationBar}>

           <TouchableOpacity  style= {styles.navnput}  onPress={() => navigation.navigate('Home')}>
              <MaterialIcons name="home-filled" size={34} color="#318DDE"/>
           <Text style= {styles.navText}>Home</Text>
           </TouchableOpacity >
           <TouchableOpacity style= {styles.homeInput}  onPress={() => navigation.navigate('Expense')}>
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
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginRight: 150,
  },
    containerChat: {
      height:220,
      width: 340,
      borderRadius: 10,
      overflow: 'hidden',
      marginLeft: 8,
      backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25, 
    elevation: 5, // Shadow effect on Android
    shadowColor: 'black', // Shadow effect on iOS
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
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
  sectionText: {
    fontSize: 18,
  },
  subText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionContainerFirst: {
    marginTop: 30,
    marginRight: 10,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  allDisplay: {
    width: 59,
    height: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'cemter',
    justifyContent: 'center',
    elevation: 5, // Shadow effect on Android
    shadowColor: 'black', // Shadow effect on iOS
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  categories: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    flexDirection: 'row',
  },
  iconCircle: {
    backgroundColor: '#fff',
    width: 51,
    height: 51,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
      borderBottomColor: 'rgba(0, 0, 0, 0.1)', // Adjust the shadow color and opacity
      shadowColor: 'black', // Set the shadow color
      shadowOffset: { width: 0, height: -2 }, // Offset to create a top shadow
      shadowOpacity: 0.5, // Adjust the shadow opacity
      shadowRadius: 2, // Adjust the shadow radius
      elevation: 5, // Shadow effect on Android
  },
  progessBar: {
    width: 270,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  borderBottomWidth: 1,
  borderBottomColor: 'rgba(0, 0, 0, 0.1)', // Adjust the shadow color and opacity
  shadowColor: 'black', // Set the shadow color
  shadowOffset: { width: 0, height: -2 }, // Offset to create a top shadow
  shadowOpacity: 0.5, // Adjust the shadow opacity
  shadowRadius: 2, // Adjust the shadow radius
  elevation: 5, // Shadow effect on Android
  },
  categoriesContainers: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-between',
  },
  containerTex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
});
