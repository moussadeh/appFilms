import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const MovieCard = ({ movie, textColor }: any) => {
    return (
        <TouchableOpacity style={styles.card}>
            <Image
                style={styles.image}
                source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}}
            />
            <Text style={{color: textColor}}>{movie.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        maxWidth: 130,
        marginBottom: 20,
        marginHorizontal: 5
    },
    image: {
        width: 130,
        height: 190,
        borderRadius: 10
    },
});

export default MovieCard;