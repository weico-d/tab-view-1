import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import YTabView from './YTabView';
import YTabpane from './YTabView/YTabPane';
import { YTabViewStyle } from './YTabView/style';

export default function App() {

  const onIndexChange = (index: number) => { console.log('tab change：' + index) }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <YTabView
        config={{ onIndexChange, position: 'top', align: 'left' }} >
        <YTabpane key={0} label={'我是1'} id={'tab1'}  >
          <View style={[YTabViewStyle.scene, { backgroundColor: 'orange' }]} >
            <Text>tab1</Text>
          </View>
        </YTabpane>
        <YTabpane key={1} label={'我是2'} id={'tab2'}>
          <View style={[YTabViewStyle.scene, { backgroundColor: 'green' }]} >
            <Text>tab2</Text>
          </View>
        </YTabpane>
        <YTabpane key={2} label={'我是3'} id={'tab3'} >
          <View style={[YTabViewStyle.scene, { backgroundColor: 'red' }]} >
            <Text>tab3</Text>
          </View>
        </YTabpane>

        <YTabpane key={3} label={'我是4444'} id={'tab4'} >
          <View style={[YTabViewStyle.scene, { backgroundColor: 'blue' }]} >
            <Text>tab4</Text>
          </View>
        </YTabpane>

        <YTabpane key={4} label={'我是54'} id={'tab5'} >
          <View style={[YTabViewStyle.scene, { backgroundColor: 'yellow' }]} >
            <Text>tab5</Text>
          </View>
        </YTabpane>


        <YTabpane key={'tab6'} label={'我是66666'} id={'tab6'} >
          <View style={[YTabViewStyle.scene, { backgroundColor: 'pink' }]} >
            <Text>tab6</Text>
          </View>
        </YTabpane>

        <YTabpane key={'tab7'} label={'我是7'} id={'tab7'} >
          <View style={[YTabViewStyle.scene, { backgroundColor: 'gray' }]} >
            <Text>tab7</Text>
          </View>
        </YTabpane>


        <YTabpane key={'tab8'} label={'我是8'} id={'tab8'} >
          <View style={[YTabViewStyle.scene, { backgroundColor: 'gray' }]} >
            <Text>tab8</Text>
          </View>
        </YTabpane>

      </YTabView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff'
  },
});
