import React from 'react';
import { View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Post = (props) => {

    const post = props.post;

    const navigation = useNavigation();

    const goToRentalDetailedPost = () => {
        navigation.navigate('Rental Detailed Post', {postId: post.id})
    };

    

    const getImage = () => {
        if (post.carName === 'MITSUBISHI'){
            return require('../../assets/images/mitsubishi.png')
        }
        if (post.carName === 'SEDAN'){
            return require('../../assets/images/sedan.png')
        }
        if (post.carName === 'NISSAN'){
            return require('../../assets/images/nissan.png')
        }
        if (post.carName === 'TOYOTA'){
            return require('../../assets/images/toyota.png')
        }
    };
    
    return(
        <Pressable onPress={goToRentalDetailedPost} style={styles.container}>
            <Image
                style={styles.image}
                source={getImage()}
        />

            <View style={styles.descriptionContainer}>
                <View style={styles.middleContainer}>
                    <Text style={styles.type}>{post.carName}{'  '}
                        <Ionicons name={'people-outline'} size={25}/>
                        <Text> {post.capacity}{'  '}M{post.carMileage}k</Text>
                    </Text>
                    <Text style={styles.name}> {post.operator} </Text>
                </View>
                <View style={styles.rightContainer}>
                    <Ionicons name={'pricetag'} size={18} color={'#42d742'}/>
                    <Text style={styles.price}>₱{post.price}/day</Text>
                </View>     
            </View>


        

        


        </Pressable>
    );
};

export default Post;