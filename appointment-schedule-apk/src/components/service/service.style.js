import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {

    service: {
        backgroundColor: COLORS.white,
        padding: 12,
        borderWidth: 1,
        borderColor: COLORS.gray4,
        flexDirection: "row",
    },

    containerText:{
        flex: 1,
    },

    containerButton:{
        flex: 1,
        marginTop: 5,
        paddingHorizontal: 20,
    },

    description:{
        fontSize: FONT_SIZE.md,
        color: COLORS.gray3,
        marginTop: 5
    },

    price:{
        fontSize: FONT_SIZE.md,
        color: COLORS.blue,
        marginTop: 3
    },
}
