import { StyleSheet, Text } from "react-native";
import colors from "../../constants/colors";

function InstructionText({ children, style }) {
  return (
    <Text style={[styles.instructionText, style]}>{children}</Text> // styles after in the array can override. 
  );
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: colors.accent500,
    fontSize: 24,
  },
});