import React, {useState} from 'react';
import {View, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import places from '../../assets/data/carInformation';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselRentalItem from '../../components/PostCarouselRentalItem';

const SearchResultsMap = (props) => {

    const [selectedPlaceId, setSelectedPlaceId] = useState(initialState=null);
    
    return(
        <View
            style={{
                width: '100%',
                height: '100%',
            }}>
              <MapView
                style={{
                    width: '100%',
                    height: '100%',                    
                }}
                initialRegion={{
                    latitude: 13.14026548883109,
                    longitude: 123.74157848671625,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>
                {places.map(place => (
                    <CustomMarker 
                        coordinate={place.coordinate}
                        price={place.price}
                        isSelected={place.id === selectedPlaceId}
                        onPress={()=> setSelectedPlaceId(place.id)}
                />))}

            </MapView>
            
            <View style={{
                position: 'absolute',
                bottom: 150
            }}>
                <PostCarouselRentalItem post={places[0]}/>
            </View>
        </View>
    );
};

export default SearchResultsMap;