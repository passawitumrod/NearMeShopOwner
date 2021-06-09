import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import STYLES from '../styles/styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {PrimaryButton} from '../components/Button';

const SignInScreen = ({navigation}) => {
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

        <View style={{marginTop: 40}}>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
            บัญชีของร้านตามสั่งเงินดี
          </Text>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.dark}}>
            ปรับเปลี่ยนข้อมูลร้าน
          </Text>
        </View>

        <View style={{marginTop: 20}}>
          <View style={STYLES.inputContainer}>
              <Text style={STYLES.input}>ประเภทร้าน: </Text> 
          </View>
          <View style={STYLES.inputContainer}>
              <Text style={STYLES.input}>เบอร์โทรศัพท์:</Text>
          </View>
          <View style={STYLES.inputContainer}>
              <Text style={STYLES.input}>คำอธิบายร้าน:</Text>
          </View>
          <View style={STYLES.inputContainer}>
              <Text style={STYLES.input}>ที่ตั้งร้าน: </Text>
          </View>
          
          <View style={{marginHorizontal: 30 , marginVertical:50}}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <PrimaryButton title="แก้ไขข้อมูลร้าน"/>
          </TouchableOpacity>
          <Text></Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <PrimaryButton title="เปลี่ยนรูปประจำร้าน"/>
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
            marginTop: 40,
            marginBottom: 20,
          }}>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignInScreen;



