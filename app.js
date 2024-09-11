function pesquisar() {

    // Obtém o elemento HTML com o ID "resultados-pesquisa" e armazena-o na variável section.
    let section = document.getElementById("resultados-pesquisa");


    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // Se o campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p> Nenhum resultado para sua pesquisa. </p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar o HTML dos resultados.

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada objeto (dado) no array de dados.

    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)) {

            // Cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.instagram}" href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Perfil do Instagram</a>
            </div>
        `;

        }
        console.log(dado.titulo.includes(campoPesquisa))

        // Concatena uma nova div com as informações do dado atual à string resultados.
        // A sintaxe `` permite a interpolação de strings, inserindo os valores das propriedades do objeto dado.
        
    } 

    if (!resultados) {
        resultados = "<p> Nada foi encontrado! </p>"


    }

    // Atribui o conteúdo da string resultados ao innerHTML do elemento section,
    // substituindo o conteúdo anterior e renderizando os resultados na página.
    section.innerHTML = resultados;

}