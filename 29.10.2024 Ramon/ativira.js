/* Um sistema de filas de banco
   Um usuário seleciona uma opção (senha normal e senha preferencial)
   Dependendo da sua seleção, ele é colocado em um vetor fila diferente
   Criar uma função que chama um usuário para o atendimento
   Se o ultimo usuário chamado foi preferencial, chama um normal
   Se o ultimo usuário chamado foi um normal, verifica a existência de um preferencial
   Caso não haja um usuário preferencial, chama outro normal. */


    //só para avisar que eu usei um código do gpt como base
    
   class FilaBanco {
    constructor() {
        this.filaNormal = [];
        this.filaPreferencial = [];
        this.ultimoChamado = null;
    }

    adicionarUsuario(tipo) {
        if (tipo === 'preferencial') {
            this.filaPreferencial.push('Usuário Preferencial');
        } else if (tipo === 'normal') {
            this.filaNormal.push('Usuário Normal');
        } else {
            console.log('Tipo inválido. Use "normal" ou "preferencial".');
        }
    }

    chamarUsuario() {
        if (this.ultimoChamado === 'preferencial') {
            if (this.filaNormal.length > 0) {
                const usuario = this.filaNormal.shift();
                this.ultimoChamado = 'normal';
                return usuario;
            } else {
                console.log('Não há usuários normais na fila.');
                return null;
            }
        } else {
            if (this.filaPreferencial.length > 0) {
                const usuario = this.filaPreferencial.shift();
                this.ultimoChamado = 'preferencial';
                return usuario;
            } else if (this.filaNormal.length > 0) {
                const usuario = this.filaNormal.shift();
                this.ultimoChamado = 'normal';
                return usuario;
            } else {
                console.log('Não há usuários na fila.');
                return null;
            }
        }
    }
}
const banco = new FilaBanco();
banco.adicionarUsuario('normal');
banco.adicionarUsuario('preferencial');
banco.adicionarUsuario('normal');
banco.adicionarUsuario('preferencial');

console.log(banco.chamarUsuario()); // Preferencial
console.log(banco.chamarUsuario()); // Normal
console.log(banco.chamarUsuario()); // Normal
console.log(banco.chamarUsuario()); // Preferencial
console.log(banco.chamarUsuario()); // Normal
console.log(banco.chamarUsuario()); // Normal
