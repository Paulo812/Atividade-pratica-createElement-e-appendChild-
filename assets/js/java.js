window.onload = function() {
    // Atividade 1: Crie uma <div> no HTML e, usando JavaScript, adicione dentro dela um parágrafo com o texto “Elemento criado dinamicamente com JavaScript.”
    const activity1 = document.getElementById('activity1');
    const p1 = document.createElement('p');
    p1.textContent = 'Elemento criado dinamicamente com JavaScript.';
    activity1.appendChild(p1);
    
    // Atividade 2: Crie três parágrafos diferentes dentro de uma mesma <div>, cada um com um texto diferente.
    const activity2 = document.getElementById('activity2');
    const texts2 = ['Primeiro parágrafo.', 'Segundo parágrafo.', 'Terceiro parágrafo.'];
    texts2.forEach(text => {
        const p = document.createElement('p');
        p.textContent = text;
        activity2.appendChild(p);
    });
    
    // Atividade 3: Crie uma lista (<ul>) e adicione três itens (<li>) dentro dela usando JavaScript.
    const activity3 = document.getElementById('activity3');
    const ul3 = document.createElement('ul');
    const items3 = ['Item 1', 'Item 2', 'Item 3'];
    items3.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul3.appendChild(li);
    });
    activity3.appendChild(ul3);
    
    // Atividade 4: Modifique o exercício anterior para adicionar cinco itens em vez de três, com os nomes de cinco frutas diferentes.
    const activity4 = document.getElementById('activity4');
    const ul4 = document.createElement('ul');
    const fruits = ['Maçã', 'Banana', 'Mangá', 'Uva', 'Morango'];
    fruits.forEach(fruit => {
        const li = document.createElement('li');
        li.textContent = fruit;
        ul4.appendChild(li);
    });
    activity4.appendChild(ul4);
    
    // Atividade 5: Crie dois parágrafos dentro de uma <div>, e em seguida, remova apenas o segundo parágrafo usando JavaScript.
    const activity5 = document.getElementById('activity5');
    const p5a = document.createElement('p');
    p5a.textContent = 'Primeiro parágrafo.';
    const p5b = document.createElement('p');
    p5b.textContent = 'Segundo parágrafo.';
    activity5.appendChild(p5a);
    activity5.appendChild(p5b);
    activity5.removeChild(p5b);  // Remove o segundo
    
    // Atividade 6: Crie três parágrafos dentro de uma <div> e depois remova o primeiro parágrafo.
    const activity6 = document.getElementById('activity6');
    const p6a = document.createElement('p');
    p6a.textContent = 'Primeiro parágrafo.';
    const p6b = document.createElement('p');
    p6b.textContent = 'Segundo parágrafo.';
    const p6c = document.createElement('p');
    p6c.textContent = 'Terceiro parágrafo.';
    activity6.appendChild(p6a);
    activity6.appendChild(p6b);
    activity6.appendChild(p6c);
    activity6.removeChild(p6a);  // Remove o primeiro
    
    // Atividade 7: Crie uma lista com quatro itens (<li>) e depois remova o último item da lista.
    const activity7 = document.getElementById('activity7');
    const ul7 = document.createElement('ul');
    const items7 = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
    items7.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul7.appendChild(li);
    });
    activity7.appendChild(ul7);
    ul7.removeChild(ul7.lastElementChild);  // Remove o último
    
    // Atividade 8: Crie três elementos de texto (como <p> ou <div>) dentro de uma área e depois remova o elemento do meio.
    const activity8 = document.getElementById('activity8');
    const p8a = document.createElement('p');
    p8a.textContent = 'Primeiro elemento.';
    const p8b = document.createElement('p');
    p8b.textContent = 'Segundo elemento (do meio).';
    const p8c = document.createElement('p');
    p8c.textContent = 'Terceiro elemento.';
    activity8.appendChild(p8a);
    activity8.appendChild(p8b);
    activity8.appendChild(p8c);
    activity8.removeChild(p8b);  // Remove o do meio
    
    // Atividade 9: Crie cinco blocos (divs) com cores e textos diferentes dentro de uma <div> e, ao final do script, remova todos os blocos com o uso de um laço (while ou for).
   const activity9 = document.getElementById('activity9');
const blocks = [
    { class: 'blue', text: 'Bloco 1 - Azul' },
    { class: 'red', text: 'Bloco 2 - Vermelho' },
    { class: 'green', text: 'Bloco 3 - Verde' },
    { class: 'yellow', text: 'Bloco 4 - Amarelo' },
    { class: 'purple', text: 'Bloco 5 - Roxo' }
];
blocks.forEach(block => {
    const div = document.createElement('div');
    div.className = 'block ' + block.class;
    div.textContent = block.text;
    activity9.appendChild(div);
});
// Remoção com laço while ao final do script
while (activity9.firstChild) {
    activity9.removeChild(activity9.firstChild);
}
    
    // Atividade 10: Crie uma <div> vazia e adicione dentro dela um título (<h2>) e um parágrafo (<p>). Em seguida, remova apenas o título, deixando o parágrafo na tela.
    const activity10 = document.getElementById('activity10');
    const h2 = document.createElement('h2');
    h2.textContent = 'Título';
    const p10 = document.createElement('p');
    p10.textContent = 'Parágrafo.';
    activity10.appendChild(h2);
    activity10.appendChild(p10);
    activity10.removeChild(h2);  // Remove apenas o título
};