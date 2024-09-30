import React, { useEffect, useState } from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getPopularMovies } from "../api/TmdbApi";
import MovieCard from "../components/MovieCard";

const image = require('../assets/images/unsplash_UC0HZdUitWY.png');

const HomeScreen = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const popularMovies = await getPopularMovies();
          setMovies(popularMovies);
        }
        fetchData();
    }, []);
    
    return (
        <View style={styles.container}>
            <StatusBar translucent={true} backgroundColor='transparent' />
            <Image source={image} style={styles.imageStyle} />
            
            <View style={styles.titreContainer}>
                <Text style={styles.titre}>Popular Movies</Text>
                <Text style={styles.seeMore}>See more</Text>
            </View>
            <FlatList
                data={movies}
                renderItem={({item}) => (
                    <MovieCard movie={item} />
                )}
                horizontal={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    imageStyle: {
        width: '100%'
    },
    marginLeft: {
        marginLeft: 30
    },
    titre: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    titreContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: 15,
        marginBottom: 10
    },
    seeMore: {
        color: '#F2C94C'
    }
})

export default HomeScreen;