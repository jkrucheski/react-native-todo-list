//LanguagePicker.tsx

import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Modal, View, Text, Pressable, StyleSheet} from 'react-native';

const LanguagePicker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const {i18n} = useTranslation(); //i18n instance

  //array with all supported languages
  const languages = [
    {name: 'en', label: 'English'},
    {name: 'es', label: 'Español'},
    {name: 'pt', label: 'Português'},
  ];

  const LanguageItem = ({name, label}: {name: string; label: string}) => (
    <Pressable
      style={styles.modalButton}
      onPress={() => {
        i18n.changeLanguage(name); //changes the app language
        setModalVisible(!modalVisible);
      }}>
      <Text style={styles.modalTextStyle}>{label}</Text>
    </Pressable>
  );

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {languages.map(lang => (
              <LanguageItem {...lang} key={lang.name} />
            ))}
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>{i18n.language}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 80,
    justifyContent: 'center',
    alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  modalButton: {
    width: '100%',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    margin: 10,
  },
  modalTextStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    margin: 10,
  },
  buttonOpen: {
    backgroundColor: '#f36293fd',
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default LanguagePicker;

//styles omitted