import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import STYLES from '../styles/styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {PrimaryButton} from '../components/Button';

const AddMenuScreen = ({navigation}) => {
  return (
    <View
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', marginTop: 40, }}>
          <Text style={{fontWeight: 'bold', fontSize: 22, color: COLORS.dark}}>
            Near
          </Text>
          <Text
            style={{fontWeight: 'bold', fontSize: 22, color: COLORS.primary}}>
            Me
          </Text>
        </View>

        <View style={{marginTop: 30}}>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
            เพิ่มรายการอาหาร
          </Text>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.dark}}>
            หรือเปลี่ยนแปลงรายการปัจจุบัน
          </Text>
        </View>

        <View style={{marginTop: 20}}>
        <View style={STYLES.inputContainer}>
            


            <TextInput
              placeholder="ประเภทของรายการ"
              style={STYLES.input}
              secureTextEntry
            />
          </View>
          <View style={STYLES.inputContainer}>
            


            <TextInput
              placeholder="ชื่อรายการ"
              style={STYLES.input}
              secureTextEntry
            />
          </View>
          <View style={STYLES.inputContainer}>
            
            
            
            <TextInput placeholder="ราคา" style={STYLES.input} />
          </View>
          <View style={STYLES.inputContainer}>
            
            


            <TextInput
              placeholder="คำอธิบายรายการ"
              style={STYLES.input}
              secureTextEntry
            />
          </View>

          <View style={{marginHorizontal: 30 , marginVertical:50}}>
          <TouchableOpacity onPress={() => navigation.navigate('MenuScreen')}>
              <PrimaryButton title="แก้ไขข้อมูลร้าน"/>
          </TouchableOpacity>
          <Text></Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <PrimaryButton title="เปลี่ยนรูปประจำร้าน"/>
          </TouchableOpacity>
          <Text></Text>
          <TouchableOpacity onPress={() => navigation.navigate('MenuScreen')}>
              <PrimaryButton title="ยกเลิกการเปลี่ยนแปลง"/>
          </TouchableOpacity>
          </View>
          <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: -65,
            marginBottom: 0,
          }}>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddMenuScreen;

{/*   Icon at the header of each line


<Icon
              name="?"
              color={COLORS.dark}
              size={20}
              style={STYLES.inputIcon}
            />

*/}