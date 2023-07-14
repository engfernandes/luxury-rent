import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface AvatarProps {
  image: ImageSourcePropType;
  imageDescription: string;
  handlePress: any;
}

function Avatar({image, imageDescription, handlePress}: AvatarProps) {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Image
        source={image}
        accessibilityLabel={imageDescription}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    height: 48,
    width: 48,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default Avatar;
