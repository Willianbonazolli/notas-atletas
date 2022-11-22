let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
 ];
// definindo as let que seráo usadas
let nomesDosAtletas = 0
let notasObtidas = 0
let mediaValida = 0
// utilizando o for para definir e retornar os nomes
for (let i = 0; i < atletas.length; i++){

  nomesDosAtletas = atletas.map(function(nomes){
      
      return nomes.nome
  })
// criando a função para o .sort 
  notasObtidas = atletas.map(function(notas){
     
      let total = notas.notas
      
      total.sort(function(a, b) {
         
          return a - b;
      });
     
      return total
  })
// ela devolve o total agora toda vez q utilizr o .sort(a, b) ele ira tirar a primeira e ultima nota
}

for (let i = 0; i < atletas.length; i++){
          
          console.log(`Atleta: ${nomesDosAtletas[i]}`)
          
          console.log(`Notas Obtidas: ${notasObtidas[i]}`)
          
          let notasAtleta = notasObtidas[i]
          
          let soma = notasAtleta.reduce(function(total,atual){
              return (total + atual)
          })
          
          let media = soma/notasAtleta.length
          
          console.log(`Média Válida: ${media}`)
}
// Utilizando console.log() para verificar os dados

// Obs perdi a tarde inteira fazendo porque estava esquecendo das crases