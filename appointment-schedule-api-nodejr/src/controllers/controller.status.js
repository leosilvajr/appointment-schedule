// controller.status.js
async function Status(req, res) {
    res.status(200).json({ message: "API funcionando corretamente 🚀" });
}

export default { Status };
