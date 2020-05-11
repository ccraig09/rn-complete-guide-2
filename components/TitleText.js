import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

const TitleText = (props) => (
  <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});

export default TitleText;
