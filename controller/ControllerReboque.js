const {dataBaseCaminhao} = require('../Config/dataBaseReboque');

const {Caminhao} = require('../models/Reboque');

class ControllerCaminhao{

 adicionarCaminhao(id, marca, modelo, cor, placa){
    try {
        const novoCaminhao = new Caminhao(id, marca, modelo, cor, placa)
        dataBaseCaminhao.push(novoCaminhao)
        console.log("Caminhão adicionado com sucesso!")
        return novoCaminhao
    } catch (error) {
        console.error("Erro ao adicionar caminhão:", error.message);
    }
 }
listarCaminhao(){
    try {
        const caminhoes = dataBaseCaminhao.map(caminhao =>({
            id: caminhao.getId,
            marca: caminhao.marca,
            modelo: caminhao.modelo,
            cor: caminhao.cor,
            placa: caminhao.placa,
        }))
        console.table(caminhoes);
    } catch (error) {
        console.error("Erro ao listar caminhoes", error.message)
        
    }
}


}
module.exports = {ControllerCaminhao};