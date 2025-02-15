const container = document.querySelector('.buttonContainer');
const row = document.createElement('div')
row.classList.add('row')
const buttons = document.createElement('button')
buttons.classList.add('button')
let expression = '';
const screen = document.querySelector('.screen')

function addButtons(){

    let calcElement = ['+/-','del','AC','%',
        1,2,3,'+',
        4,5,6,'-',
        7,8,9,'*',
        '.',0,'=','/']

    let a = 0;
    for (let i = 1; i <= 5; i++){

        row.id = i;
        container.append(row.cloneNode());
        
        for (let j = 1; j <= 4; j++){

            a += 1;
            // console.log(a)
            let button =  buttons.cloneNode()
            button.textContent = calcElement[a-1];
            button.id = `button-${calcElement[a-1]}`;
            document.getElementById(row.id).append(button)
            button.addEventListener('click', () => {
                
                if (button.id == 'button-+/-'){

                    expression = '' + expression
                }
                else if (button.id == 'button-AC'){

                    expression = ''

                }
                else if (button.id == 'button-del'){

                    sliced = expression.slice(0,expression.length - 1);
                    expression = sliced

                }
                else if (button.id == 'button-='){

                    expression = evaluator(expression)
                    screen.textContent = expression

                }
                else{

                    expression += button.textContent
                    console.log(expression)
                }
                screen.textContent = expression

            })
            
            
        }
        
    }


}

function evaluator(expr){

    let operators = {
        
        '/': (a,b) => a/b,
        '%': (a,b) => a%b,
        '*': (a,b) => a*b,
        '+': (a,b) => a+b,
        '-': (a,b) => a-b,
        
    }
    for (operator in operators){

        if (expr.includes(operator)){

            elements = expr.split(operator)
            for (operand of elements){

                if (operand.includes('.')){

                    return operators[operator](parseFloat(elements[0]),parseFloat(elements[1]));

                }
                else{

                    return operators[operator](parseInt(elements[0]),parseInt(elements[1]));

                }

            }

        }

    }
    
}

addButtons()


