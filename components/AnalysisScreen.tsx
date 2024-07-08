import React from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from "react-native";
import { LineChart, PieChart, BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { Card } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;

const AnalysisScreen = () => {
  const navigation = useNavigation();

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientTo: "#08130D",
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity
          style={styles.iconWrapper}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Statistics</Text>
      </View>

      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>MON</Text>
        <Text style={styles.dateText}>TUE</Text>
        <Text style={styles.dateText}>WED</Text>
        <Text style={styles.dateText}>THU</Text>
        <Text style={styles.dateText}>FRI</Text>
        <Text style={styles.dateText}>SAT</Text>
        <Text style={styles.dateText}>SUN</Text>
      </View>
      <Card containerStyle={styles.card}>
        <Text style={styles.cardTitle}>Drone Analytics</Text>
        <PieChart
          data={[
            {
              name: "Training",
              population: 40,
              color: "rgba(64, 165, 244, 1)", // Blue color for Training
              legendFontColor: "#fff",
              legendFontSize: 15,
            },
            {
              name: "Mapping",
              population: 30,
              color: "#FFD700", // Gold color for Mapping
              legendFontColor: "#fff",
              legendFontSize: 15,
            },
            {
              name: "Inspection",
              population: 20,
              color: "#32CD32", // Green color for Inspection
              legendFontColor: "#fff",
              legendFontSize: 15,
            },
            {
              name: "Other",
              population: 10,
              color: "#FF6347", // Red color for Other
              legendFontColor: "#fff",
              legendFontSize: 15,
            },
          ]}
          width={screenWidth - 40}
          height={220}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
        />
      </Card>
      <Card containerStyle={styles.card}>
        <Text style={styles.cardTitle}>FLIGHT DISTANCE</Text>
        <BarChart
          data={{
            labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          }}
          width={screenWidth - 40}
          height={220}
          chartConfig={chartConfig}
          verticalLabelRotation={30}
        />
      </Card>
      <Card containerStyle={styles.card}>
        <Text style={styles.cardTitle}>AVERAGE ALTITUDE</Text>
        <LineChart
          data={{
            labels: ["1", "2", "3", "4", "5", "6"],
            datasets: [
              {
                data: [5, 4, 6, 7, 8, 6],
                color: (opacity = 1) => `rgba(64, 165, 244, ${opacity})`,
                strokeWidth: 2,
              },
            ],
          }}
          width={screenWidth - 40}
          height={220}
          yAxisLabel=""
          chartConfig={chartConfig}
          bezier
        />
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", 
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },  
  title: {
    fontSize: 24,
    color: "orange",
    textAlign: "center",
    marginVertical: 10,
    marginHorizontal: 20,
    fontWeight: "bold",
  },
  iconWrapper: {
    backgroundColor: "#333",
    borderRadius: 20,
    padding: 5,
    margin: 10,
    alignSelf: "flex-start",
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  dateText: {
    color: "orange",
    fontSize: 14,
  },
  card: {
    backgroundColor: "#333",
    borderColor: "#444",
  },
  cardTitle: {
    fontSize: 18,
    color: "orange",
    textAlign: "center",
    marginBottom: 10,
  },
});

export default AnalysisScreen;
