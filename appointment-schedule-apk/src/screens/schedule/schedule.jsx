import { View, Text, Alert } from "react-native";
import { styles } from "./schedule.style";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from "../../constants/calendar";
import { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import Button from "../../components/button/button";
import api from "../../constants/api";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

function Schedule(props) {
    // Propriedades que vêm da tela Serviços
    const id_doctor = props.route.params.id_doctor;
    const id_service = props.route.params.id_service;

    // Variáveis para armazenar o dia e horário selecionados
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedHour, setSelectedHour] = useState("");

    // Função para confirmar a reserva
    async function ClickConfirmReservation() {
        try {
            const response = await api.post(`appointments`, {
                id_doctor,
                id_service,
                booking_date: selectedDate,
                booking_hour: selectedHour,
            });

            if (response.data?.id_appointment) {
                Alert.alert("Sucesso", "Agendamento efetuado com sucesso!");
                props.navigation.popToTop(); // Voltar para a raiz
            }
        } catch (error) {
            // Tratamento de erro
            if (error.response?.data.error) {
                Alert.alert(error.response.data.error);
            } else {
                console.error(error);
                Alert.alert("Ops, ocorreu um erro. Tente novamente.");
            }
        }
    }

    // Efeito que garante que o botão fique desabilitado ao carregar
    useEffect(() => {
        // Inicialmente, o botão estará desabilitado
        setSelectedDate(""); // Garantindo que a data seja vazia
        setSelectedHour(""); // Garantindo que o horário seja vazio
    }, []);

    return (
        <View style={styles.container}>
            <View>
                <Calendar
                    theme={styles.theme}
                    onDayPress={(day) => {
                        setSelectedDate(day.dateString);
                    }}
                    markedDates={{
                        [selectedDate]: { selected: true, disableTouchEvent: true },
                    }}
                    minDate={new Date().toISOString()}
                />
                <View>
                    <Text style={styles.textHour}>Horário</Text>
                </View>

                <View>
                    <Picker
                        selectedValue={selectedHour}
                        onValueChange={(itemValue, itemIndex) => {
                            setSelectedHour(itemValue);
                        }}
                    >
                        {/* Mensagem padrão no Picker */}
                        <Picker.Item label="Informe aqui o seu horário" value="" />
                        <Picker.Item label="08:00" value="08:00" />
                        <Picker.Item label="09:00" value="09:00" />
                        <Picker.Item label="10:00" value="10:00" />
                        <Picker.Item label="11:00" value="11:00" />
                        <Picker.Item label="12:00" value="12:00" />
                        <Picker.Item label="14:00" value="14:00" />
                        <Picker.Item label="15:00" value="15:00" />
                        <Picker.Item label="16:00" value="16:00" />
                        <Picker.Item label="17:00" value="17:00" />
                    </Picker>
                </View>
            </View>

            <View>
                {/* Botão desabilitado até que a data e o horário sejam preenchidos */}
                <Button
                    text="Confirmar Agendamento"
                    onPress={ClickConfirmReservation}
                    disabled={!selectedDate || !selectedHour}
                />
            </View>
        </View>
    );
}

export default Schedule;
