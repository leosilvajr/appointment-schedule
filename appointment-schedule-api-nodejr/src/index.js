import express from "express";
import cors from "cors";
import router from "./routes.js";

const app = express(); // Levantar o servidor

// Middleware para permitir requisições JSON
app.use(express.json());

// Middleware para configurar CORS
app.use(cors()); // Permite requisições de qualquer origem

// Rota de Status - Para verificar se a API está online
app.get('/status', (req, res) => {
  res.status(200).json({
    status: 'ok', // Você pode usar 'ok', 'success' ou outro valor
    message: 'API está funcionando', // Mensagem simples
    timestamp: new Date().toISOString() // Hora atual para ajudar em debug
  });
});

// Definindo as rotas principais da API
app.use(router);

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001...");
});
