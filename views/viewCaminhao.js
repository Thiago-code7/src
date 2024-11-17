const {ControllerCaminhao} = require('../controller/ControllerReboque');

const caminhaoController = new ControllerCaminhao();

console.log("===Criando Caminhões===");
caminhaoController.adicionarCaminhao("001","Mercedes","MB-710","Branca","MVZ-0363");
caminhaoController.adicionarCaminhao("002","Ford","Cargo-816","Vermelha","EPW-8K99");
caminhaoController.adicionarCaminhao("003","Volkswagen","Delivery-10160","Azul","ESS-1234");
caminhaoController.adicionarCaminhao("004","Mercedes","MB-710","Vermelha","NNJ-0P11");
caminhaoController.adicionarCaminhao("005","Mercedes","Accelo-1016","Amarela","NTT-6465");
caminhaoController.adicionarCaminhao("006","VolksWagen","Delivery8-150","Branca","GTR-3439");

console.log("===Listando Caminhões===");
caminhaoController.listarCaminhao();