let string ="";
let memory=0;
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=>{
    button.addEventListener ('click',(e)=>{
        if(e.target.innerHTML== '='){
            try{ string=eval(string);
            document.querySelector('input').value=string;}
            catch{
                document.querySelector('input').value = "Error";
                string = "";}}
            else if
                (e.target.innerHTML== 'C'){
                    string=""
                    document.querySelector('input').value=string;
                }
                else if (e.target.innerHTML== 'Del') {
                    string = string.slice(0, -1);
                    document.querySelector('input').value = string;
                }
                else if (e.target.innerHTML == '+/-') {
                    if (string) {
                        try {
                            // Evaluate current string
                            let value = eval(string);
                            // Flip the sign
                            value = -value;
                            string = value.toString();//convert -42 to "-42"
                            document.querySelector('input').value = string;
                        } catch {
                            document.querySelector('input').value = "Error";
                            string = "";
                        }
                    }
                }
                
                    else 
                    {(console.log(e.target));
                        if (e.target.innerHTML=== 'X') {
                            string += '*';
                        }
                        else{
            
        
        string = string + e.target.innerHTML;}
        document.querySelector('input').value=string;
    }

});
});