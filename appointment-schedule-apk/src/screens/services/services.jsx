import { Alert, FlatList, Image, Text, View } from "react-native"
import { styles } from "./services.style"
import icon from "../../constants/icon";
import Service from "../../components/service/service";
import api from "../../constants/api";
import { useEffect, useState } from "react";

function Services (props) { //Adicionar props para receber os parametros do objeto

  const id_doctor = props.route.params.id_doctor
  const name = props.route.params.name
  const specialty = props.route.params.specialty
  const iconDoctor = props.route.params.icon

  const [doctors_services, setDoctorServices] = useState([]); // Lista de servicos

  //Função para rexecutar ao clicar no botao de Agendar (Schedule)
  function ClickService(id_service){
    props.navigation.navigate("schedule", {id_doctor, id_service}) //Necessario redirecionar para a pagina Schedule
  }

  async function LoadServices(){
    try {
        const response = await api.get(`doctors/${id_doctor}/services`);

        if(response.data){
          setDoctorServices(response.data);
        }

    } catch (error) {
        //Tratamento de erro
        if(error.response?.data.error){
            Alert.alert(error.response.data.error);
        }
        else{
            console.log(error);
            Alert.alert('Ops, ocorreu um erro. Tente novamenteeee.');
        }
    }
  }

    useEffect(() => {
        LoadServices(); //Executar função quando a tela for carregada.
    });


    //Criar um Container que vai ser uma View para renderizar todo o fundo da pagina.
    return <View style={styles.container} >  

        <View style={styles.banner}>
            <Image source={iconDoctor == "M" ? icon.male : icon.female}/>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.specialty}>{specialty}</Text>
        </View>

        <FlatList data={doctors_services}
                  keyExtractor={(serv) => serv.id_service}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => {
                    return <Service id_service={item.id_service}
                                    description={item.description}
                                    price={item.price}
                                    onPress={ClickService}
                    />     
        }}/>      
     </View>
}

export default Services; 