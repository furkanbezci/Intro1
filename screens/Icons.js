import React, { useState } from 'react'
import {
    View,
    Text,
    Modal,
    Button,
    TouchableHighlight
} from 'react-native';

// import { TouchableHighlight } from 'react-native-gesture-handler';a




const Icons = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(true);
    console.log(modalVisible)
    return (


        <View style={{ justifyContent: 'flex-end', alignItems: 'center', padding: 10, height: '85%' }}>

            <TouchableHighlight style={{ width: 100, height: 50, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center', borderRadius: 12 }}
                onPress={() => setModalVisible(!modalVisible)}
            >
                <Text>Son</Text>
            </TouchableHighlight>
            <Modal
                visible={modalVisible}
            >
                <View style={{ justifyContent: 'flex-end', height: '85%', alignItems: 'center', padding: 10, }}>
                    <View style={{ marginBottom: 100, }}>
                        <Text style={{ fontSize: 30 }} >Hoşgeldiniz</Text>
                    </View>
                    <View style={''}>

                        <TouchableHighlight style={{ width: 100, height: 50, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center', borderRadius: 12 }}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text>Sağol</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>

        </View>
    )
}
export default Icons;