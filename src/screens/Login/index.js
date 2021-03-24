import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, Alert} from 'react-native';
import {
    Image5Component,
    Header2Component,
    SubtitleComponent,
    PlainInputTextComponent,
    ButtonRedirectComponent,
} from '@components';
import {useForm} from '@libs';

const LoginScreen = (props) => {
    //console.log({props});
    const {navigation} = props;
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    function emailHandler(text) {
        console.log(`E-mail Handler: ${text}`);
        setEmail(text);
    }

    let {Email, verifEmail} = useForm();
    function validateEmail(email) {
        let verifiedEmail = verifEmail(email);
        return verifiedEmail;
    }

    function passwordHandler(text) {
        console.log(`Password Handler: ${text}`);
        setPassword(text);
    }

    let { Password, verifPassword } = useForm();
    function validatePassword(password) {
        let verifiedPassword = verifPassword(password);
        return verifiedPassword;
    }

    function login(email, password) {
        if(validateEmail(email) && validatePassword(password)) {
            console.log(email);
            console.log(password);
            navigation.navigate('Welcome');
        }
        else {
            Alert.alert("Warning", "Pastikan E-mail benar dan Password minimal 6 karakter");
        }
    }

    return(
        <View>
            <Image5Component />
            <Header2Component text="Log in" />
            <SubtitleComponent text="Login with social networks" />
            <View style={styles.space}>
                <PlainInputTextComponent
                    value={email}
                    placeholder="Email"
                    password={false}
                    onChangeText={(text) => {
                        emailHandler(text);
                    }}
                />
                <PlainInputTextComponent
                    value={password}
                    placeholder="Password"
                    password={true}
                    onChangeText={(text) => {
                        passwordHandler(text);
                    }}
                />
                <Text>{' '}</Text>
                <TouchableOpacity>
                    <SubtitleComponent text="Forgot Password?" />
                </TouchableOpacity>
                <Text>{' '}</Text>
                <ButtonRedirectComponent action={() => login(email, password)} label="Log in" />
                <Text>{' '}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <SubtitleComponent text="Sign Up" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

let {height} = Dimensions.get("window");
const styles = StyleSheet.create({
    space: {
        marginTop: height * 0.01,
    },
});

export default LoginScreen;