/**
 * A simple component to use
 * Do the "providesModule" provides module name to haste map
 * So you can reference it from other file by
 * import MainPageButton from "MainPageButton.react"
 * @providesModule TransitionContainer.react
 */
'use strict';
import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-360';

const TransitionContainer = (props) => {
    return (
        <View style={
            [
                styles.mainPanel,
                {
                    position: 'absolute',
                    zIndex: 100,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: 500,
                    right: 0,
                    width: 800,
                    transform: [{
                        translate: [0, 0, -200]
                    }]
                }
            ]
        }>
            <View style={styles.card}>
                <Text style={styles.title}>
                    {`Going to ${props.nextPlace}`}
                </Text>
            </View>  
        </View>
      )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 5,
        borderColor: 'gray',
        height: 200,
        padding: 20,
        flex: 1, 
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#363636',
        textAlign: 'center',
        fontSize: 40
    },
    mainPanel: {
        flexDirection: 'row',
        height: 300,
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
})

export default TransitionContainer;
