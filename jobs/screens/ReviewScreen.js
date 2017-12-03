import React, { Component } from 'react';
import { View, Text, Platform, ScrollView, Linking } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import { MapView } from 'expo';
import { connect } from 'react-redux';

class ReviewScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
            title: 'Review Jobs',
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="favorite" size={30} color={tintColor} />;
            },
            style: {
                marginTop: Platform.OS === 'android' ? 24 : 0
            },
            headerRight:
                <Button
                    title="Settings"
                    backgroundColor="rgba(0,0,0,0)"
                    color="rgba(0,122,255,1)"
                    onPress={() => { navigation.navigate('settings'); }}/>
        })

    renderLikedJobs() {
        return this.props.likedJobs.map(job => {
            const { company, formattedRelativeTime, url,
                longitude, latitude, jobtitle, jobkey } = job;
            const initialRegion = {
                longitude,
                latitude,
                latitudeDelta: 0.045,
                longitudeDelta: 0.02
            }
            return (
                <Card title={jobtitle} key={jobkey}>
                    <View style={{ height: 200 }}>
                        <MapView
                            style={{ flex: 1 }}
                            cacheEnabled={Platform.OS === 'android'}
                            scrollEnabled={false}
                            initialRegion={initialRegion}
                        >
                        </MapView>
                        <View style={styles.detailWrapper}>
                        <Text style={styles.italics}>{company}</Text>
                        <Text style={styles.italics}>{formattedRelativeTime}</Text>
                        </View>
                        <Button
                            title="Apply Now"
                            backgroundColor="#03A9F4"
                            onPress={() => Linking.openURL(url)}
                        />
                    </View>
                </Card>
            )
        })
    }
    render() {
        return (
            <ScrollView>
                {this.renderLikedJobs()}
            </ScrollView>
        );
    }
}
const styles ={
    italics: {
        fontStyle: 'italic'
    },
    detailWrapper: {
        marginBottom: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
}
function mapStateToProps(state) {
    return { likedJobs: state.likedJobs };
}
export default connect(mapStateToProps)(ReviewScreen);
