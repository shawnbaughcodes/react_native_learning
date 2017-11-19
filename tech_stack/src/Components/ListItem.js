import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './Common';
import * as Actions from '../Actions';

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }
    showDescription() {
        const { library, expanded } = this.props;
        if (expanded) {
            console.log(this.state);
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>{library.description}</Text>
                </CardSection>
            );
        }
    }
    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;
        console.log(this.props);
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.showDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
};
export default connect(mapStateToProps, Actions)(ListItem);
