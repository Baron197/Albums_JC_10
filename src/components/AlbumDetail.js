import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

class AlbumDetail extends Component {
    render() {
        const { title, artist, thumbnail_image, image, url } = this.props.album;
        const { 
            thumbnailStyle, 
            thumbnailContainerStyle,
            headerContentStyle,
            headerTextStyle,
            imageStyle
        } = styles;
        return (
            <Card>
                <CardSection>
                    <View style={thumbnailContainerStyle}>
                        <Image 
                            source={{ uri: thumbnail_image }} 
                            style={thumbnailStyle}
                        />
                    </View>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{title}</Text>
                        <Text>{artist}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Image
                        source={{ uri: image }}
                        style={imageStyle}
                    />
                </CardSection>
                <CardSection>
                    <Button
                        onPress={() => Linking.openURL(url)}
                    >
                        Buy Now
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    thumbnailStyle: {
        height: 50,
        width: 50,
        borderRadius: 50
    },
    headerContentStyle: {
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    imageStyle: {
        height: 350,
        width: '100%'
    }
})

export default AlbumDetail;