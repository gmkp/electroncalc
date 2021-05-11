var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', '/', '*'];
var decimalAdd = false;

for (var i = 0; i <keys.length; i++){
    keys[i].onclick = function(e){
        var input = document.querySelector('.screen');
        var inputVal = input.innerHTML;
        var btnVal = this.innerHTML;

        if(btnVal == 'C'){
            input.innerHTML = '';
            decimalAdd = false;
        }

        else if (btnVal == '='){
            var equation = inputVal;
            var lastChar = equation[equation.length -1];
            equation = equation.replace(/x/g, '*')
            .replace(/÷/g, '/');
           
            if(operators.indexOf(lastChar) > -1 ||
            (lastChar == '.')){
                equation = equation.replace(/.$/,'');
            }
            if(equation){
                input.innerHTML = eval(equation);
            
            }
                decimalAdd = false;
        } else
        {
            input.innerHTML += btnVal;
        }
        
    }  
}