document.getElementById("botao").addEventListener("click", function() {
    let part = document.getElementById("campoMultilinha1").value;
    part = part.replace(/\n/g, '')

    let regex = /(?:.*?Mostrando \d+ - \d+ de \d+)?(.*)Criado em/;
    let titulo = part.match(regex)[1];

    let ploo = 0;
    regex = /Id (\d+)/;
    ploo = part.match(regex)[1];
    const id = " - ID: " + ploo;

    regex = /Versão(.*)HostSetId/;
    const versao = "\nVersão: " + part.match(regex)[1];

    regex = /HostSetId(\d+)/;
    const host = " - HostSetId: " + part.match(regex)[1];

    regex = /Mensalidade total\s*(.*)/
    const mensal = " - " + part.match(regex)[1];

    let tratado = ""
    if (ploo == 1) {
        tratado = (titulo + id + host + versao);
    }else{
        tratado = (titulo + id + mensal + host + versao);
    }   
    
    document.getElementById("campoMultilinha2").value = tratado;

    let campo = document.getElementById("campoMultilinha2");
    campo.select();
    navigator.clipboard.writeText(campo.value);
    campo.setSelectionRange(0, 0);

    const image = document.getElementById('icone');
    image.classList.toggle('rotated');

    const aviso = document.getElementById("aviso");
    aviso.classList.add("show");

    setTimeout(function() {
        aviso.classList.remove("show");
    }, 2000);
});