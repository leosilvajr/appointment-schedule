import { Text, View } from "react-native"
import { styles } from "./profile.style"
import api from "../../constants/api"
import { useContext, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import Button from "../../components/button/button";
import {AuthContext} from "../../context/auth"

function Profile() {

    const {setUser} = useContext(AuthContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false); // Estado para exibir carregamento
    const [error, setError] = useState(null); // Estado para tratar erros

    async function LoadProfile() {
        setLoading(true);
        setError(null);
        try {
          const response = await api.get("users/profile");
          if (response.data?.name) {
            setName(response.data.name);
            setEmail(response.data.email);
          }
        } catch (error) {
          setError("Não foi possível carregar os agendamentos.");
        } finally {
          setLoading(false);
        }
      }

      function Logout(){
        api.defaults.headers.common['Authorization'] = ``; 
        setUser({});
      }

    useEffect(() => {
        LoadProfile();
    });

    return <View style={styles.container}>
        <View style={styles.item}>
            <Text style={styles.title}>Nome</Text>
            <Text style={styles.text}>{name}</Text>
        </View>

        <View style={styles.item}>
            <Text style={styles.title}>E-mail</Text>
            <Text style={styles.text}>{email}</Text>
        </View>

        <View style={styles.item}>
            <Button text="Logout" theme="danger" onPress={Logout}/>
        </View>

    </View>
}

export default Profile