
function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase()
    if(campoPesquisa == ""){
        section.innerHTML = `
            <p> Nada foi encontrado!</p>
        `
        return 
    }
    console.log(campoPesquisa);    
    let resultados = ""
    let nome = ""
    let sexo = ""
    for(let prontuario of prontuarios){
        nome = prontuario.paciente.nome.toLowerCase()
        sexo = prontuario.paciente.sexo.toLowerCase()
        if(nome.includes(campoPesquisa)
             || sexo.includes(campoPesquisa)){
            resultados += `
        <div class="item-resultado">
            <h2>${prontuario.paciente.nome}</h2>
            <p class="descricao-meta">Data de Nascimento: 1980-01-01</p>
            <p class="descricao-meta">Sexo: Masculino</p>
            <p class="descricao-meta">Endereco: Rua dos Bobos, 0</p>
        </div>
    `
        }   
    }
    section.innerHTML = resultados    
}

