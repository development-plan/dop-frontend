import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

const Box: () => React$Node = () => {
    return (
        <>
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <View>
                        <View>
                            <Text>Hello World</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default Box;
