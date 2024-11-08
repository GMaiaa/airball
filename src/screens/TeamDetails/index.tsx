import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

// Componente para o jogador
const Player = ({ name }: { name: string }) => {
  return (
    <View style={styles.playerContainer}>
      <Image
        source={{ uri: "https://via.placeholder.com/50" }} // Substitua pelo avatar do jogador
        style={styles.playerImage}
      />
      <Text style={styles.playerName}>{name}</Text>
    </View>
  );
};

const TeamDetails = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Time Lakers</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <Text style={styles.icon}>🔄</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.icon}>⚙️</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Quadra */}
      <View style={styles.courtContainer}>
        <Image
          source={{ uri: "https://via.placeholder.com/300x400" }} // Imagem de exemplo da quadra
          style={styles.courtImage}
        />
        {/* Botões de adicionar jogadores na quadra */}
        <TouchableOpacity style={[styles.addButton, { top: "40%", left: "45%" }]}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.addButton, { top: "60%", left: "25%" }]}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.addButton, { top: "60%", left: "65%" }]}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>

        {/* Jogadores na quadra */}
        <View style={[styles.playerOnCourt, { top: "30%", left: "10%" }]}>
          <Player name="Maria" />
        </View>
        <View style={[styles.playerOnCourt, { top: "30%", left: "80%" }]}>
          <Player name="José" />
        </View>
        <View style={[styles.playerOnCourt, { top: "50%", left: "50%" }]}>
          <Player name="João" />
        </View>
      </View>

      {/* Banco de reservas */}
      <ScrollView horizontal contentContainerStyle={styles.benchContainer}>
        <TouchableOpacity style={styles.addButtonBench}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButtonBench}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButtonBench}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButtonBench}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButtonBench}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#1e1e1e",
  },
  backButton: {
    fontSize: 18,
    color: "#fff",
  },
  title: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  iconsContainer: {
    flexDirection: "row",
    gap: 10,
  },
  icon: {
    fontSize: 18,
    color: "#fff",
  },
  courtContainer: {
    flex: 1,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  courtImage: {
    width: "90%",
    height: 300,
    resizeMode: "contain",
  },
  addButton: {
    position: "absolute",
    width: 40,
    height: 40,
    backgroundColor: "#FF6F00",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  addText: {
    color: "#fff",
    fontSize: 24,
  },
  playerOnCourt: {
    position: "absolute",
    alignItems: "center",
  },
  playerContainer: {
    alignItems: "center",
  },
  playerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: "#fff",
    borderWidth: 2,
  },
  playerName: {
    color: "#fff",
    fontSize: 12,
    marginTop: 4,
  },
  benchContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addButtonBench: {
    width: 50,
    height: 50,
    backgroundColor: "#FF6F00",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
});

export default TeamDetails;
