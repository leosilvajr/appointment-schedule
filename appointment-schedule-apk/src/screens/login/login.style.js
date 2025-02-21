import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {

    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        justifyContent: "space-between",
        padding: 50
    },

    containerLogo: {        
        alignItems: "center",
    },

    logo: {
    maxWidth: 280,
    objectFit: "contain"
    },

    containerInput: {
        marginBottom: 15
    },

    input: {
        backgroundColor: COLORS.gray5,
        padding: 10,
        borderRadius: 6
    },

    footer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
    },
    footerLink:{
        color: COLORS.blue
    }
}
