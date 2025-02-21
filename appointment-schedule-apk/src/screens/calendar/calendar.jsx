import { FlatList, View, Text, Alert } from "react-native";
import {  useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { styles } from "./calendar.style";
import Appointment from "../../components/appointment/appointment";
import api from "../../constants/api";
import React from "react";


function Calendar() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false); // Estado para exibir carregamento
  const [error, setError] = useState(null); // Estado para tratar erros

  // Função para carregar os agendamentos
  async function LoadAppointments() {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get("appointments");
      if (response.data) {
        setAppointments(response.data);
      }
    } catch (error) {
      setError("Não foi possível carregar os agendamentos.");
    } finally {
      setLoading(false);
    }
  }

  // Função para excluir um agendamento
  async function DeleteAppointment(id_appointment) {
    try {
      const response = await api.delete(`appointments/${id_appointment}`);
      if (response.data?.id_appointment) {
        setAppointments((prev) =>
          prev.filter((item) => item.id_appointment !== id_appointment)
        );
        Alert.alert("Sucesso", "Agendamento excluído com sucesso!");
      }
    } catch (error) {
      console.log("Erro ao excluir agendamento:", error);
      Alert.alert(
        "Erro",
        error.response?.data?.error || "Não foi possível excluir o agendamento."
      );
    }
  }

  // Carregar os dados quando a tela for exibida
  useFocusEffect(
    React.useCallback(() => {
      LoadAppointments();
    }, [])
  );

  return (
    <View style={styles.container}>
      {loading && <Text style={{ textAlign: "center" }}>Carregando...</Text>}
      {!loading && error && (
        <Text style={{ textAlign: "center", color: "red" }}>{error}</Text>
      )}
      {!loading && !error && appointments.length === 0 && (
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Nenhum agendamento encontrado.
        </Text>
      )}
      {!loading && appointments.length > 0 && (
        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id_appointment.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Appointment
              id_appointment={item.id_appointment}
              doctor={item.doctor}
              service={item.service}
              specialty={item.specialty}
              bookingDate={item.booking_date}
              bookingHour={item.booking_hour}
              onPress={() => DeleteAppointment(item.id_appointment)}
            />
          )}
        />
      )}
    </View>
  );
}

export default Calendar;
