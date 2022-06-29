// Atividade de Objetos Array

const eu = {
    nome: "Igor",
    sobrenome: "Sousa",
    estadoCivil: "Solteiro"
}
console.log(eu);

eu.idade = 18;

// =============================================

delete eu.sobrenome;
console.log(eu);

// =============================================

console.log(eu);

// =============================================

let cadastro = [
    {
        nome: "Igor",
        idade: 18,
        gênero: "Masculino",
        amigos: ["Raphael","Vitor", "Lucas", "Arthur"]
    },
    {
        nome: "Camila",
        idade: 18,
        gênero: "Feminino",
        amigos: ["Raphael","Vitor", "Lucas", "Arthur"]
    },
    {
        nome: "Iury",
        idade: 23,
        gênero: "Masculino",
        amigos: ["Glauco","Matheus","Kelson","Kaio"]
    },
    {
        nome: "Italo",
        idade: 33,
        gênero: "Masculino",
        amigos: ["Marcelo","Lucas","Henrique","Kelvin"]
    },
    {
        nome: "Kelvin",
        idade: 35,
        gênero: "Masculino",
        amigos: ["Italo","Kaio","Kelson","Vitor"]
    },
];
console.log(cadastro);
// =============================================

for(let friends = 0; friends < cadastro.length; friends++ ){
    console.log(cadastro[friends].amigos[cadastro])
};