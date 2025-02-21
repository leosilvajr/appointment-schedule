import { FlatList, Text, View } from "react-native"
import { styles } from "./home.style"
import Doctor from "../../components/doctor/doctor";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import api from "../../constants/api";

function Home (props) { //Recebendo as propriedades

  const [doctors, setDoctors] = useState([]);

  function ClickDoctor (id_doctor, name, specialty, icon){ 
      props.navigation.navigate("services", {id_doctor, name, specialty, icon})
  }

  async function LoadDoctors(){
    try {
      const response = await api.get(`doctors`);

      if(response.data){
        setDoctors(response.data); //Populando a variavel de estado com o response
      }

  } catch (error) {
      //Tratamento de erro
      if(error.response?.data.error){
          Alert.alert(error.response.data.error);
      }
      else{
          Alert.alert('Ops, ocorreu um erro. Tente novamente.');
      }
  }
  }

  useEffect(() => {
    LoadDoctors(); //Executar função quando a tela for carregada.
});


    //Criar um Container que vai ser uma View para renderizar todo o fundo da pagina.
    return <View style={styles.container} >  
        <Text style={styles.text}>Agende seus serviços médicos.</Text>

        <FlatList data={doctors}
                  keyExtractor={(doc) => doc.id_doctor}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => {
                    return <Doctor id_doctor={item.id_doctor}
                                   name={item.name} 
                                   icon={item.icon} 
                                   specialty={item.specialty}
                                   onPress={ClickDoctor}
                                   />
                                   
                  }}/>
     </View>
}

export default Home