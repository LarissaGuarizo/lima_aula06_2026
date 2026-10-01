const nomeAluno = document.querySelector("#nome")
const emailAluno = document.querySelector("#email")
const matriculaAluno = document.querySelector("#matricula")
const salvarAluno = document.querySelector("#salvar")
const tabelaAluno = document.querySelector("#tabela")


salvarAluno.addEventListener("click", function(){
    
    const linha = document.createElement('tr')
    const colunaNomeAluno = document.createElement('td')
    const colunaEmailAluno= document.createElement('td')
    const colunaMatriculaAluno = document.createElement('td')

    colunaNomeAluno.textContent = nome.value
    colunaEmailAluno.textContent = email.value 
    colunaMatriculaAluno.textContent = matricula.value

    linha.append(colunaNomeAluno)
    linha.append(colunaEmailAluno)
    linha.append(colunaMatriculaAluno)

    tabela.append(linha)
});

const nomeProfessor = document.querySelector("#nome")
const emailProfessor = document.querySelector("#email")
const disciplinaProfessor = document.querySelector("#matricula")
const salvarProfessor = document.querySelector("#salvar")
const tabelaProfessor = document.querySelector("#tabela")


salvarProfessor.addEventListener("click", function(){
    
    const linha = document.createElement('tr')
    const colunaNomeProfessor = document.createElement('td')
    const colunaEmailProfessor= document.createElement('td')
    const colunaDisciplinaProfessor = document.createElement('td')

    colunaNomeProfessor.textContent = nome.value
    colunaEmailProfessor.textContent = email.value 
    colunaMatriculaProfessor.textContent = matricula.value

    linha.append(colunaNomeProfessor)
    linha.append(colunaEmailProfessor)
    linha.append(colunaMatriculaProfessor)

    tabela.append(linha)
});


