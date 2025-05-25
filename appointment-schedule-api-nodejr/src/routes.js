import { Router } from "express";
import controllerDoctor from "./controllers/controller.doctor.js";
import controllerUser from "./controllers/controller.user.js";
import controllerAppointment from "./controllers/controller.appointment.js";
import controllerStatus from "./controllers/controller.status.js";
import jwt from "./token.js";

const router = Router();

// Additional test route
router.get("/teste", (req, res) => {
    res.send("A API Está no ar!!!!!!");
  });

//Doctors
router.get("/doctors",jwt.ValidateToken, controllerDoctor.Listar);
router.post("/doctors",jwt.ValidateToken, controllerDoctor.Inserir);
router.put("/doctors/:id_doctor",jwt.ValidateToken, controllerDoctor.Editar);
router.delete("/doctors/:id_doctor",jwt.ValidateToken, controllerDoctor.Excluir);

//Services
router.get("/doctors/:id_doctor/services",jwt.ValidateToken, controllerDoctor.ListarServicos);

//Users
router.post("/users/register", controllerUser.Inserir);
router.post("/users/login", controllerUser.Login);
router.get("/users/profile", jwt.ValidateToken, controllerUser.Profile);

//Appointments
router.get("/appointments",jwt.ValidateToken, controllerAppointment.ListarByUser);
router.post("/appointments",jwt.ValidateToken, controllerAppointment.Inserir);
router.delete("/appointments/:id_appointment",jwt.ValidateToken, controllerAppointment.Excluir);

//Status
router.get('/status', controllerStatus.Status);

export default router; 