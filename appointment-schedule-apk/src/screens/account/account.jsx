import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import icon from "../../constants/icon";
import { styles } from "./account.style";
import Button from "../../components/button/button";
import { useState } from "react";
import api from "../../constants/api";

function Account(props) { //Toda tela que usar navegação precisa de props

    // Variáveis de estado para os inputs e status
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [statusMessage, setStatusMessage] = useState(''); // Estado para armazenar o status da API
    const [isLoading, setIsLoading] = useState(false); // Estado para controle de carregamento

    // Função para criar conta
    async function ExecuteAccount() {
        try {
            const response = await api.post('users/register', { name, email, password });
            if (response.data) {
                console.log(response.data);
                Alert.alert('Conta criada com sucesso.');
                props.navigation.goBack();
            }
        } catch (error) {
            // Verifica se o erro é um erro 401 (não autorizado)
            if (error.response?.status === 401) {
                Alert.alert('Não autorizado. Verifique suas credenciais.');
            }
            // Verifica se há uma mensagem de erro personalizada no servidor
            else if (error.response?.data?.message) {
                Alert.alert(error.response.data.message); // Exibe a mensagem de erro
            } else {
                Alert.alert('Ops, ocorreu um erro. Tente novamente.'); // Mensagem padrão
            }
        }
    }
    
    

    return (
        <View style={styles.container}> 

            <View style={styles.containerLogo}>
                <Image source={icon.logo} style={styles.logo} />
            </View>

            <View>

                <View style={styles.containerInput}>
                    <TextInput placeholder="Nome" style={styles.input} onChangeText={(name) => setName(name)} />
                </View>

                <View style={styles.containerInput}>
                    <TextInput placeholder="E-mail" style={styles.input} onChangeText={(email) => setEmail(email)}/>
                </View>

                <View style={styles.containerInput}>
                    <TextInput 
                        placeholder="Senha" 
                        style={styles.input}
                        secureTextEntry={true} 
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>

                <Button text="Criar Conta" onPress={ExecuteAccount}/>

            </View>

            <View style={styles.footer}> 
                <Text>Já tenho uma conta. </Text>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Text style={styles.footerLink}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Account;
