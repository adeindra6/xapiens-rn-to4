import React, {useState} from 'react';
import {View} from 'react-native';
import {
    HelloComponent,
    TitleComponent,
    PlainInputTextComponent,
} from '@components';

const WelcomeScreen = (props) => {
    //console.log({props});
    const {navigation} = props;
    const [search, setSearch] = useState(null);

    function searchHandler(text) {
        console.log(`Search Handler: ${text}`);
        setSearch(text);
    }

    return(
        <View>
            <HelloComponent text="Hello," />
            <TitleComponent text="Juana Antonieta" />
            <PlainInputTextComponent
                value={search}
                placeholder="Search Course"
                password={false}
                onChangeText={(text) => {
                    searchHandler(text);
                }}
            />
        </View>
    );
};

export default WelcomeScreen;