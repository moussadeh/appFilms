import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { getBestMovies, getPopularMovies, getMarvelMovies } from "../api/TmdbApi";
import MovieCard from "../components/MovieCard";
import Bouton from "../components/Bouton";
import LinearGradient from "react-native-linear-gradient";
import Elilipse from "../components/Elilipse";
import BoutonLarg from "../components/BoutonLarg";
import ParagraphLast from "../components/ParagraphLast";

const image = require('../assets/images/unsplash_UC0HZdUitWY.png');
const blackfriday = require('../assets/images/blackfriday.png');

const HomeScreen = () => {
    const [popularMovies, setMovies] = useState([]);
    const [bestMovies, setBestMovies] = useState([]);
    const [marvelMovies, setMarvelMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const popularMovies = await getPopularMovies();
          setMovies(popularMovies);

          const bestMovies = await getBestMovies();
          setBestMovies(bestMovies);

          const marvelMovies = await getMarvelMovies();
          setBestMovies(marvelMovies);
        }
        fetchData();
    }, []);
    
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <StatusBar translucent={true} backgroundColor='transparent' />
            <Image source={image} style={styles.imageStyle} />
            <View style={styles.buttonContainer}>
                <Bouton text="WishList" bgColor="#333333" />
                <Bouton text="Details" bgColor="#F2C94C" />
            </View>
            <View style={styles.ellipseContainer}>
                <Elilipse />
                <Elilipse />
                <Elilipse />
                <Elilipse />
                <Elilipse />
            </View>

            <LinearGradient 
                colors={['#FFFFFF', 'transparent']}
                style={styles.gradiantContainer}
                start={{ x: 0.5, y: 1 }}
                end={{ x: 0.5, y: 0 }}
            />
            
            <View style={styles.titreContainer}>
                <Text style={styles.titre}>Popular Movies</Text>
                <Text style={styles.seeMore}>See more</Text>
            </View>
            <FlatList
                data={popularMovies}
                renderItem={({item}) => (
                    <MovieCard movie={item} />
                )}
                horizontal={true}
            />

            <View style={styles.titreContainer}>
                <Text style={styles.titre}>Best Movies</Text>
                <Text style={styles.seeMore}>See more</Text>
            </View>
            <FlatList
                data={bestMovies}
                renderItem={({item}) => (
                    <MovieCard movie={item} />
                )}
                horizontal={true}
            />

            <View style={styles.titreContainer}>
                <Text style={styles.titre}>Marvel Studio</Text>
                <Text style={styles.seeMore}>See more </Text>
            </View>
            <FlatList
                data={marvelMovies}
                renderItem={({item}) => (
                    <MovieCard movie={item} />
                )}
                horizontal={true}
            /> 

            <View style={styles.lastBlock}>
                <Image source={blackfriday} style={styles.blackfridayStyle} />
                <ParagraphLast />
                <BoutonLarg text="Check Details" bgColor="#F2C94C" />
            </View> 
        </ScrollView>
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
        color: 'black',
        paddingHorizontal: 10
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
        color: '#F2C94C',
        paddingHorizontal: 10
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    gradiantContainer: {
        width: '100%',
        height: 130,
        position: 'absolute',
        top: 300
    },
    ellipseContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 20
    },
    lastBlock: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: 20
    },
    blackfridayStyle: {
        width: '90%'
    }
})

export default HomeScreen;