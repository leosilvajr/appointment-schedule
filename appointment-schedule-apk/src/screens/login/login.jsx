import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import icon from "../../constants/icon";
import { styles } from "./login.style";
import Button from "../../components/button/button";
import { useState, useContext } from "react";
import api from "../../constants/api";
import { AuthContext } from "../../context/auth";

function Login(props) {

    //Todo mundo que for usar o contexto, vai enxergar a variavel global user e setUser
    const {setUser} = useContext(AuthContext);

    //Variaveis de estado, para armazenar os valores dos inputs
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');

    async function ExecuteLogin() {
        try {
            // Convertendo o email para lowercase
            const normalizedEmail = email.toLowerCase();
            
            const response = await api.post('users/login', { email: normalizedEmail, password });
    
            if (response.data) {
                // Injetando o token no header
                api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
                setUser(response.data);
            }
        } catch (error) {
            if (error.response) {
                // Tratamento simplificado de status code
                const statusCode = error.response.status;
                const messages = {
                    400: 'Verifique os dados enviados. Pode haver algum erro nos campos preenchidos.',
                    401: 'Credenciais inválidas. Verifique seu e-mail e senha.',
                    403: 'Você não tem permissão para acessar esse recurso.',
                    404: 'O endereço ou recurso solicitado não foi encontrado.',
                    500: 'Ocorreu um erro inesperado no servidor. Tente novamente mais tarde.'
                };
    
                const alertMessage = messages[statusCode] || `Ocorreu um erro com o código ${statusCode}: ${error.response.data?.error || 'Erro desconhecido no servidor'}`;
                Alert.alert('Erro', alertMessage);
            } else if (error.request) {
                // A requisição foi feita, mas nenhuma resposta foi recebida
                Alert.alert(
                    'Sem resposta do servidor',
                    'Não foi possível obter uma resposta do servidor. Verifique sua conexão com a internet ou tente novamente mais tarde.'
                );
            } else {
                // Outro tipo de erro ocorreu
                Alert.alert(
                    'Erro inesperado',
                    `Algo deu errado ao tentar realizar o login: ${error.message}`
                );
            }
        }
    }
    
    return (
        <View style={styles.container}> 

            <View style={styles.containerLogo}>
                <Image source={icon.logo} style={styles.logo} />
            </View>

            <View>
                <View style={styles.containerInput} >
                    <TextInput placeholder="E-mail" style={styles.input} onChangeText={(text) => setEmail(text)} />
                </View>

                <View style={styles.containerInput}>
                    <TextInput 
                        placeholder="Senha" 
                        style={styles.input}
                        secureTextEntry={true} 
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>

                <Button text="Acessar" onPress={ExecuteLogin}/>
            </View>

            <View style={styles.footer}> 
                <Text>Não tenho uma conta. </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('account')} >
                    <Text style={styles.footerLink}>Crie uma conta agora.</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default Login;
