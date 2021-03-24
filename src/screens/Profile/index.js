import React, {useState} from 'react';
import {View} from 'react-native';
import {
    Header2Component,
    Image7Component,
    ButtonNonFillComponent,
} from '@components';

const ProfileScreen = (props) => {
    //console.log({props});
    const {navigation} = props;

    function profile() {

    }

    function post() {

    }

    return(
        <View>
            <Header2Component text="Profile" />
            <Image7Component />
            <ButtonNonFillComponent label="My Profile" action={() => profile()} />
            <ButtonNonFillComponent label="My Post" action={() => post()} />
        </View>
    );
};

export default ProfileScreen;