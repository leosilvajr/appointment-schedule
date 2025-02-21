import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {

    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },

    banner:{
        backgroundColor: COLORS.green,
        justfyContent: "center",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 25
    },

    name:{
        fontSize: FONT_SIZE.md,
        color: COLORS.white,
        fontWeight: "bold",
        marginTop: 5
    },

    specialty:{
        fontSize: FONT_SIZE.md,
        color: COLORS.white,
        marginTop: 3
    },
}
