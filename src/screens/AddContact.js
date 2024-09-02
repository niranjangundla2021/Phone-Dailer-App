import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    PermissionsAndroid,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import Contacts from 'react-native-contacts';
  
  const AddContact = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const checkTextInput = () => {
    
      if (!name.trim()) {
        
        return;
      }
     
      if (!email.trim()) {
        return;
      }
      if (!number.trim()) {

        if (!/^[0-9]+$/.test('YourString'))
           {
          alert('Please enter a valid phone number');
          console.log('Enter Only Number');
        } else {
            console.log('Success');
        }
        return;
      }
     
      alert('Success');
      return 0;
    };

    const getPermission = () => {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
        buttonPositive: 'Please accept bare mortal',
      }).then(res => {
        if (res == 'granted') {
          let newPerson = {
            emailAddresses: [
              {
                label: 'work',
                email: email,
              },
            ],
            phoneNumbers: [
              {
                label: 'mobile',
                number: number,
              },
            ],
            familyName: name,
            givenName: name,
          };
  
          Contacts.addContact(newPerson);
          navigation.goBack()
        }
      });
    };
  
    return (
      <View style={{flex: 1, backgroundColor: '#000'}}>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>     
          </TouchableOpacity>
        </View>
        <Image
          source={require('../images/user.png')}
          style={{width: 60, height: 60, marginTop: 50, alignSelf: 'center'}}
        />
        <TextInput
          placeholder="Enter Name"
          placeholderTextColor={'#fff'}
          value={name}
          maxLength={4}
          onChangeText={
            (value) => setName(value)
          }
          // onChangeText={txt => setName(txt)}
          style={{
            width: '90%',
            height: 50,
            borderWidth: 0.5,
            borderRadius: 10,
            borderColor: '#fff',
            paddingLeft: 15,
            alignSelf: 'center',
            marginTop: 50,
            color:'#fff'
          }}
        />
        <TextInput
          placeholder="Enter Email"
          placeholderTextColor={'#fff'}
          value={email}
          onChangeText={
            (value) => setEmail(value)
          }
          // onChangeText={txt => setEmail(txt)}
          style={{
            width: '90%',
            height: 50,
            borderWidth: 0.5,
            borderRadius: 10,
            borderColor: '#fff',
            paddingLeft: 15,
            alignSelf: 'center',
            marginTop: 20,
            color:'#fff'
          }}
        />
        <TextInput
          keyboardType='numeric'
          placeholder="Enter Mobile Number"
          placeholderTextColor={'#fff'}
          value={number}
          onChangeText={
            (value) => setNumber(value)
          }
          // onChangeText={number => setNumber(number)}
          maxLength={10}
          style={{
            width: '90%',
            height: 50,
            borderWidth: 0.5,
            borderRadius: 10,
            borderColor: '#fff',
            paddingLeft: 15,
            alignSelf: 'center',
            marginTop: 20,
            color:'#fff'
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#fff',
            borderRadius: 10,
            height: 50,
            width: '90%',
            marginTop: 50,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            if (checkTextInput() == 0) {
              getPermission();
            } else
            {
              alert('Please fill all the fields');
            }
            

           
          }}>
          <Text style={{color: '#000'}}>Save Contact</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default AddContact;