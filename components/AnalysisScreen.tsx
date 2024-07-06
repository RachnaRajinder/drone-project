// AnalysisScreen.js
import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import { PieChart, BarChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const data = [
  {
    name: "Flight Time",
    population: 21500000,
    color: "#f00",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Battery Life",
    population: 2800000,
    color: "#0f0",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Signal Strength",
    population: 527612,
    color: "#00f",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];

const barData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientTo: "#08130D",
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
};

const AnalysisScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Drone Analysis</Text>
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Pie Chart</Text>
        <PieChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </View>
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Bar Chart</Text>
        <BarChart
          data={barData}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          verticalLabelRotation={40}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  chartContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
});

export default AnalysisScreen;
