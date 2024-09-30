import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const MovieCard = ({ movie }: any) => {
    return (
        <TouchableOpacity style={styles.card}>
            <Image
                style={styles.image}
                source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        marginBottom: 20
    },
    image: {
        width: 130,
        height: 190,
        borderRadius: 10,
        marginHorizontal: 5
    },
});

export default MovieCard;