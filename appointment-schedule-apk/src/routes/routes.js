import RoutesPrivate from "./routesPrivate.js";
import RoutesOpen from "./routesOpen.js";
import { useContext } from "react";
import { AuthContext } from "../context/auth.js";


function Routes () {
    const {user} = useContext(AuthContext);
    return user.id_user ? <RoutesPrivate/> : <RoutesOpen/>
}

export default Routes