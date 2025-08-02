import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface SearchBarProps {
  onPress: () => void;
  placeholder?: string;
}

const SearchBar = ({ onPress, placeholder }: SearchBarProps) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-3">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        onPressIn={onPress}
        placeholder={placeholder || "Search for movies, TV shows, and more..."}
        placeholderTextColor="#ab8bff"
        className="flex-1 text-white ml-3"
      />
    </View>
  );
};

export default SearchBar;
