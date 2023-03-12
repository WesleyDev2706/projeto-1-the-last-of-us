/* 
passo 1 mostrar imagem referente ao botão pressionado
passo 2 pegar html do botão
asso 3 identificar clickp
passo 4 desmacar botão anterior
passo 5 marcar botão slecionado como clicado
passo 6 esconder imagem anterior
passo 7 aparecer imagem correspondete ao botão
*/
//passo 1 pegar html do botão
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
//PAsso 2 identificar click
botoesCarrossel.forEach((botao, indice)=> {
    botao.addEventListener('click' , () => {
console.log(indice);
        //passo 3 desmacar botão anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        
        //PASSO 4 marcar botão slecionado como clicado
        
        botao.classList.add('selecionado');
//passo 5 esconder imagem anterior
const imagemAtiva =document.querySelector(".ativa");
imagemAtiva.classList.remove('ativa');

//passo 6 aparecer imagem correspondete ao botão
imagens[indice].classList.add('ativa');
    })
})
