import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

const BodyText = (props) => (
  <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  body: {
    fontFamily: "open-sans",
  },
});

export default BodyText;
