//Controlar contexto relacionado ao login e autenticacao
import React, { createContext, useState } from "react";

const AuthContext = createContext({}); //Cria o contexto

function AuthProvider(props){ //Vai receber props e vai retornar um componente

    //Todo mundo que for usar o contexto, vai enxergar a variavel global user e setUser

    const [user, setUser] = useState({ //Vamos armazenar dentro dessa variavei user, o objeto completo de user.
        
    }); 

    return <AuthContext.Provider value={{user, setUser}}> 
        {props.children}
    </AuthContext.Provider>
}

export  {AuthProvider, AuthContext}; 