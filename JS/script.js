const msg_erro = document.getElementById('erro')

async function busca_endereco(cep) {

    msg_erro.innerHTML = ''

    try {
        const consulta_cep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consulta_cep_json = await consulta_cep.json();
        if (consulta_cep_json.erro) {
            throw Error('CEP não existe! Tente novamente');

        }

        const bairro = document.getElementById('bairro')
        const cidade = document.getElementById('cidade')
        const estado = document.getElementById('estado')

        cidade.value = consulta_cep_json.localidade
        estado.value = consulta_cep_json.uf
        bairro.value = consulta_cep_json.logradouro

        console.log(consulta_cep_json);
        return consulta_cep_json
    } catch (erro) {
        msg_erro.innerHTML = '<p class="msg_erro">CEP não existe! Tente novamente</p>'
    }
}


const cep = document.getElementById('cep')
cep.addEventListener('focusout', () => {
    if (!cep.value) {
        msg_erro.innerHTML = ''
    }else{

    busca_endereco(cep.value)
}
})


