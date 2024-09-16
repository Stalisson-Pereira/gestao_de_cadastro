sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("gestaodecadastro.controller.Main", {
        onInit: function () {

        },
        onCadastrarCliente:
        function() {
            this.byId("idDialog").open()
        },
        onCloseDialog: 
        function(){
            this.byId("idDialog").close()
        },
        onSaveDialog:
        function() {

            let { nome, idade, telefone, email} = this.byId(
            "idInputName", "idInputAge", "idInputPhone", "idInputEmail").getValue()
            if (!nome || !idade || !email || !telefone) {
                MessageToast.show("Preencha todos os campos obrigatórios")
                return
            }
            let novoCliente = {
                nome: nome,
                idade: idade,
                telefone: telefone,
                email: email
            }
            console.log("Cliente a ser cadastrado:", novoCliente)
        },
        onCadastrar: 
        function() {
            MessageToast.show("Cliente cadastrado com sucesso!")
            this.onCloseDialog()
        },

        onCadastrarProduto:
        function() {
            this.byId("idDialogProduct").open()
        },
        onCloseDialogProduct: 
        function(){
            this.byId("idDialogProduct").close()
        },
        onSaveDialogProduct:
        function() {
            let { nome, descricao, preco, quantidade} = this.byId(
                "inputName", "inputDesc", "inputPrice", "inputQuant").getValue()
                if (!nome || !descricao || !preco || !quantidade) {
                    MessageToast.show("Preencha todos os campos obrigatórios")
                    return 
                }
                let novoProduto = {
                    nome: nome,
                    descricao: descricao,
                    preco: preco,
                    quantidade: quantidade
                }
                console.log("Produto a ser cadastrado:", novoProduto)
        },
        onCadastrarProduct: 
        function() {
            MessageToast.show("Produto cadastrado com sucesso!")
            this.onCloseDialogProduct()
        }
    });
});
