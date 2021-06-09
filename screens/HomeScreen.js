//STILL BEING DECIDED WHAT TO BE USE FOR, SINCE IT MIGHT REPLACE POS
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import foods from '../consts/foods';
const {width} = Dimensions.get('screen');   //get size of current screen to calculate card width 
const cardWidth = width - 20;               //card width constant when we have 2 cards per row

const TestAPI = 'http://cold-squid-62.loca.lt/media/images/shopOwner/kekw.jpg';
const TestAPI2 = 'http://cold-squid-62.loca.lt/';
const TestAPI3 = 'media/images/shopOwner/kekw.jpg';


const HomeScreen = ({navigation}) => {
  const Card = ({food}) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('MenuScreen', food)}>
        <View style={style.card}>
          <View style={{alignItems: 'flex-end', top: 20, left:-20 }}>
            <Image source={food.image} style={{height: 120, width: 120, borderRadius: 15}} />
          </View>
          <View style={{marginHorizontal: 20, marginVertical: -80}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{food.name}</Text>
            <Text style={{fontSize: 14, color: COLORS.grey, marginTop: 2}}>
              {food.category}
            </Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              {food.price} บาท
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View>
        <View style={{flexDirection: 'row', marginTop: 40, }}>
          <Text style={{fontWeight: 'bold', fontSize: 22, color: COLORS.dark}}>
            Near
          </Text>
          <Text
            style={{fontWeight: 'bold', fontSize: 22, color: COLORS.primary, marginBottom: 20}}>
            Me
          </Text>
        </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 28, fontWeight: 'bold'}}>ร้าน</Text>
            <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>ป้าตามสั่ง โรงพระเทพ</Text>
          </View>
          <Text style={{marginTop: 5, fontSize: 22, color: COLORS.grey}}>
            บริหารร้านด้วยตัวเลือกต่างๆ เหล่านี้
          </Text>
        </View>
        
      </View>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={foods}
        renderItem={({item}) => <Card food={item} />}
      />
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  card: {
    height: 160,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
});

export default HomeScreen;
