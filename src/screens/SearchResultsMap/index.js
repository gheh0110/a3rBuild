import React, {useState, useEffect, useRef} from 'react';
import {View, Text, FlatList} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import carInformation from '../../assets/data/carInformation';
import places from '../../assets/data/carInformation';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselRentalItem from '../../components/PostCarouselRentalItem';

const SearchResultsMap = (props) => {

    const [selectedPlaceId, setSelectedPlaceId] = useState(initialState=null);
    
    useEffect(()=>{
        if (!selectedPlaceId || !flatlist){
            return;
        }
        const index = places.findIndex(place => place.id === selectedPlaceId)
        flatlist.current.scrollToIndex({index})

        const selectedPlace = places[index];
        const region = {
            latitude: selectedPlace.coordinate.latitude,
            longitude: selectedPlace.coordinate.longitude,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
        }
        map.current.animateToRegion(region);  
    }, [selectedPlaceId])


    const flatlist = useRef();
    const viewConfig = useRef({itemVisiblePercentThreshold: 70})
    const onViewChanged= useRef(({viewableItems})=>{
        if (viewableItems.length > 0){
            const selectedPlace = viewableItems[0].item;
            setSelectedPlaceId(selectedPlace.id)
        }
    })

    const map = useRef();
    return(
        <View
            style={{
                width: '100%',
                height: '100%',
            }}>
              <MapView
                ref={map}
                style={{
                    width: '100%',
                    height: '100%',                    
                }}
                initialRegion={{
                    latitude: 13.14026548883109,
                    longitude: 123.74157848671625,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8,
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
                bottom: 40
            }}>
            <FlatList
                ref={flatlist}
                data={places}
                renderItem={({item}) => <PostCarouselRentalItem post={item}/>}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={150}
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                viewabilityConfig={viewConfig.current}
                onViewableItemsChanged={onViewChanged.current}
            />
           
              
            </View>
        </View>
    );
};

export default SearchResultsMap;