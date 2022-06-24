interface IProgressoIgnite {
    date: string,
    chapter: number, 
    module: string,
    class: string,
    note?: string
}

let Pikachu:IProgressoIgnite = {
    date: "15/06/2022",
    chapter: 3,
    module: "2 - Trabalhando com Banco de Dados",
    class: "Criando container do postgres.",
    note: "Refatorei a estrutura do código de acordo com a estrutura que utilizamos na PRECATO."
}