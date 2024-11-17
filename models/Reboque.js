class Caminhao {
   
    #id
    marca;
    modelo;
    cor;
    placa;

    constructor(id, marca, modelo, cor, placa) {
        this.#id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.placa = placa;
    }
    get getId(){
        return this.#id
    }
    set setId(id){
        return this.id = id
    }

}
module.exports = {Caminhao};