let i = 0;

 function salvar(){
    i = i +1;
    
    let novo: HTMLInputElement|null = document.querySelector('#aluno');
    let ul: HTMLUListElement|null = document.querySelector('ul');
    let li: HTMLLIElement|null = document.createElement('li');

    let aluno: string[] = []

    if(novo && ul && li){
        aluno[i]= novo.value;

        let aladire = document.createTextNode(aluno[i]);

        li.appendChild(aladire);

        ul.appendChild(li);
    }
 }