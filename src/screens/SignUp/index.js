import React, {useState} from 'react';
import {View, TouchableOpacity, Alert} from 'react-native';
import {
    Image6Component,
    Header2Component,
    SubtitleComponent,
    PlainInputTextComponent,
    ButtonRedirectComponent,
} from '@components';
import {useForm} from '@libs';

const SignUpScreen = (props) => {
    //console.log({props});
    const {navigation} = props;
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    function nameHandler(text) {
        console.log(`Name Handler: ${text}`);
        setName(text);
    }

    let {Name, verifName} = useForm();
    function validateName(name) {
        let verifiedName = verifName(name);
        return verifiedName;
    }

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

    function signup(name, email, password) {
        if(validateName(name) && validateEmail(email) && validatePassword(password)) {
            console.log(name);
            console.log(email);
            console.log(password);
            navigation.navigate('Welcome');
        }
        else {
            Alert.alert("Warning", 
                "1. Nama hanya boleh mengandung alpha-numeric \n" +
                "2. Pastikan E-mail benar \n" +
                "3. Password minimal 6 karakter"
            );
        }
    }

    return(
        <View>
            <Image6Component />
            <Header2Component text="Sign up" />
            <SubtitleComponent text="Create your account" />
            <PlainInputTextComponent
                value={name}
                placeholder="Name"
                password={false}
                onChangeText={(text) => {
                    nameHandler(text);
                }}
            />
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
            <ButtonRedirectComponent action={() => signup(name, email, password)} label="Sign up" />
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <SubtitleComponent text="Log in" />
            </TouchableOpacity>
        </View>
    );
};

export default SignUpScreen;