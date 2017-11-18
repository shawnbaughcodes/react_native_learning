import React, { Component } from 'react';
import { Text, TouchableWithoutFeeback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './Common';


class ListItem extends Component {
    render() {
        const { titleStyle } = styles;
        const { title } = this.props.library;

        return (
            <TouchableWithoutFeeback>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeeback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};
export default ListItem;
