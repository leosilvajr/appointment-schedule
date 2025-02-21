import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style";

function Button(props) {
    return (
        <TouchableOpacity
            style={[
                styles.btn,
                props.theme == "danger" ? styles.danger : styles.primary,
                props.disabled ? styles.disabled : null, // Aplica o estilo desabilitado
            ]}
            onPress={props.disabled ? null : props.onPress} // Impede o onPress se o botão estiver desabilitado
            disabled={props.disabled} // Desabilita a interação do TouchableOpacity
        >
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
}

export default Button;
