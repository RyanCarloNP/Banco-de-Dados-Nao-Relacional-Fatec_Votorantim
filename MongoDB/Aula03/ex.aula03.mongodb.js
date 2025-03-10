//Ex01
use('Funcionarios')
const dadosFuncionarios = [
    {
        nome: "João Silva",
        cargo: "Desenvolvedor",
        sexo: "Masculino",
        salario: 5000,
        departamento: "TI",
        dataContratacao: new Date("2023-01-01"),
        projetos: ["Projeto A", "Projeto B"],
        dataCadastro: new Date()
    },
    {
        nome: "Maria Santos",
        cargo: "Analista de Dados",
        sexo: "Feminino",
        salario: 4800,
        departamento: "TI",
        dataContratacao: new Date("2023-06-15"),
        projetos: ["Projeto C"],
        dataCadastro: new Date()
    },
    {
        nome: "Carlos Oliveira",
        cargo: "Desenvolvedor",
        sexo: "Masculino",
        salario: 5100,
        departamento: "TI",
        dataContratacao: new Date("2022-03-10"),
        projetos: ["Projeto B"],
        dataCadastro: new Date()
    },
    {
        nome: "Ana Pereira",
        cargo: "Gerente de Projetos",
        sexo: "Feminino",
        salario: 7500,
        departamento: "Gestão",
        dataContratacao: new Date("2021-09-20"),
        projetos: ["Projeto A", "Projeto C"],
        dataCadastro: new Date()
    },
    {
        nome: "Luis Fernandes",
        cargo: "Contador",
        sexo: "Masculino",
        salario: 4200,
        departamento: "Contabilidade",
        dataContratacao: new Date("2020-11-05"),
        projetos: [],
        dataCadastro: new Date()
    },
    {
        nome: "Luiza Costa",
        cargo: "Analista Financeira",
        sexo: "Feminino",
        salario: 4600,
        departamento: "Financeiro",
        dataContratacao: new Date("2023-04-18"),
        projetos: ["Projeto D"],
        dataCadastro: new Date()
    },
    {
        nome: "João Souza",
        cargo: "Desenvolvedor",
        sexo: "Masculino",
        salario: 4900,
        departamento: "TI",
        dataContratacao: new Date("2023-07-01"),
        projetos: ["Projeto A"],
        dataCadastro: new Date()
    }
]
db.funcionarios.insertMany(dadosFuncionarios)

use('Funcionarios')
db.funcionarios.find()

//Ex02
use('Funcionarios')
db.funcionarios.insertOne({
    nome: "Ryan Carlo",
    cargo: "Desenvolvedor SQL",
    sexo: "Masculino",
    salario: 5000,
    departamento: "TI",
    dataContratacao: new Date("2023-01-01"),
    projetos: ["Projeto A", "Projeto B"],
    dataCadastro: new Date()
})
//Ex03
use('Funcionarios')
db.funcionarios.updateMany(
    { departamento: "TI" },
    { $inc: { salario: + 100 } }
)
//Ex04
use('Funcionarios')
db.funcionarios.updateOne(
    { nome: "João Silva" },
    { $push: { projetos: "Projeto C" } }
)
//Ex05
use('Funcionarios')
db.funcionarios.updateMany(
    {},
    { $unset: { dataContratacao: "" } }
)
//Ex06
use('Funcionarios')
db.funcionarios.updateMany(
    { departamento: "TI" },
    { $set: { bonificacao: 500 } }
)
//Ex07
use('Funcionarios')
db.funcionarios.deleteOne(
    { nome: "João Silva" }
)
//Ex08
use('Funcionarios')
db.funcionarios.deleteMany(
    { departamento: "Contabilidade" }
)
//Ex09
use('Funcionarios')
db.funcionarios.find(
    { cargo: "Desenvolvedor" },
    { _id: 0, nome: 1, sexo: 1, salario: 1, }
)
//Ex10
use('Funcionarios')
db.funcionarios.find(
    { salario: { $gt: 4000 } }
)
//Ex11
use('Funcionarios')
db.funcionarios.find(
    { dataContratacao: { $lt: new Date("2023-01-01") } }
)
//Ex12
use('Funcionarios')
db.funcionarios.find(
    {
        $or: [
            { projetos: { $eq: "Projeto A" } },
            { projetos: { $eq: "Projeto B" } }
        ]
    }
)
//Ex13
use('Funcionarios')
db.funcionarios.find(
    {
        $nor: [
            { projetos: { $eq: "Projeto B" } }
        ]
    }
)
//Ex14
use('Funcionarios')
db.funcionarios.find(
    { sexo: "Feminino" },
    { _id: 0, nome: 1, salario: 1, departamento: 1, sexo: 1 }
)
//Ex15
use('Funcionarios')
db.funcionarios.find(
    {
        $and: [
            { salario: { $gt: 4000 } },
            { dataContratacao: { $lt: new Date("2023-01-01") } }
        ]
    }
)
//Ex16
use('Funcionarios')
db.funcionarios.find(
    { projetos: { $size: { $gt: 1 } } }
    //{ projetos: { $gt: [{size: "$projetos"}, 1] } }
)
//Ex17
use('Funcionarios')
db.funcionarios.find(
    { dataCadastro: { $gt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } }
)
//Ex18
use('Funcionarios')
db.funcionarios.find(
    { nome: /^joão/i }
)
//Ex19
use('Funcionarios')
db.funcionarios.find(
    { nome: /silva$/i }
)
//Ex20
use('Funcionarios')
db.funcionarios.find(
    {
        $or: [
            { nome: /luis/i },
            { nome: /luiz/i }
        ]
    }
)
//Ex21
use('Funcionarios')
db.funcionarios.find(
    {
        $and: [{ salario: { $gt: 4000 } },
        { departamento: "TI" }]
    }
)
//Ex22
use('Funcionarios')
db.funcionarios.find(
    {
        $and: [{ dataContratacao: { $lt: new Date("2024-01-01") } },
        { $nor: [{ departamento: "TI" }] }]
    }
)
//Ex23
use('Funcionarios')
db.funcionarios.find(
    {
        $and: [
            {
                $or: [
                    { projetos: { $eq: "Projeto A" } },
                    { projetos: { $eq: "Projeto B" } }
                ]
            },
            { salario: { $lte: 5000 } }
        ]
    }
)
//Ex24
use('Funcionarios')
db.funcionarios.find(
    {
        $and: [
            {
                $nor: [
                    { departamento: { $eq: "TI" } }
                ]
            },
            {
                $nor: [
                    { projetos: { $eq: "Projeto A" } }
                ]
            }
        ]
    }
)
//Ex25
use('Funcionarios')
db.funcionarios.find(
    {
        $or: [
            { dataContratacao: { $lt: "2023-01-01" } },
            { sexo: "Feminino" }
        ]
    }
)
//Ex26
use('Funcionarios')
db.funcionarios.find(
    {
        $and: [
            { dataContratacao: { $gt: "2023-01-01" } },
            { salario: { $gt: 4000 } },
            {
                $or: [
                    { departamento: "TI" },
                    { departamento: /analise/i },
                    { departamento: /analista/i }
                ]
            }
        ]
    }
)