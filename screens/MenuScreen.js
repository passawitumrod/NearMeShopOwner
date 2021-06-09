import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import foods from '../consts/foods';
import {PrimaryButton} from '../components/Button';
import {DeleteButton} from '../components/Button';
import {MiniButton} from '../components/Button';

const MenuScreen = ({navigation}) => {
  const CartCard = ({item}) => {
    return (
      <View style={style.cartCard}>
        <Image source={item.image} style={{height: 80, width: 80, backgroundColor: 15, borderRadius: 15}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
          <Text style={{fontSize: 13, color: COLORS.grey}}>
            {item.category}
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>{item.price}บาท</Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
        <MiniButton title="    X    " onPress={() => navigation.navigate('MenuScreen')}/>
        </View>
      </View>
    );
  };
  return (
    <View style={{backgroundColor: COLORS.white, flex: 1}}>
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
          <Text
            style={{fontWeight: 'bold', fontSize: 22, color: COLORS.dark, marginBottom: 20, marginLeft: 290}}>
          </Text>
        </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>ปรับเปลี่ยนเมนูอาหารปัจจุบัน</Text>
          </View>
          <Text style={{marginTop: 5, marginBottom: 10, fontSize: 22, color: COLORS.primary}}>
            ร้านป้าตามสั่ง โรงพระเทพ
          </Text>
        
              
            
          
      
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 200}}
        data={foods}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              
            </View>
            
          </View>
        )}
      />
      <View style={{marginTop: -215, marginHorizontal: 60,}}>
              <PrimaryButton title="เพิ่มเมนูอาหาร" onPress={() => navigation.navigate('AddMenuScreen')}/>
            </View>
    </View>
    </View>
    </View>
    </View>
    
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default MenuScreen;
