import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: 12,
        // borderWidth: 1,
        alignItems: "center", // Centraliza todo o conteúdo da tela
    },

    item: {
        width: "90%", // Define um tamanho adequado para os itens
        borderColor: COLORS.gray4,
        padding: 15,
        alignItems: "center", // Centraliza o conteúdo interno
        marginBottom: 10, // Dá um espaço entre os itens
    },

    title: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3,
        marginBottom: 4
    },

    text: {
        fontSize: FONT_SIZE.md,
        color: COLORS.gray1,
    },

    buttonContainer: {
        marginTop: 20,
        alignItems: "center", // Centraliza o botão horizontalmente
    },

    button: {
        width: 250, // Define uma largura menor para o botão
    }
};
