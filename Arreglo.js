// con la Función
var arrNumeros = [3,54,34,1,0,2,12,29,5];
for (i=0; i < arrNumeros.length;i++) 
    {console.log (arrNumeros[i]);}

function mayorMenor ( a, b ){ return a - b; }
console.log (arrNumeros.sort( mayorMenor ));

// Forma manual
var Numeros1 = [3,54,34,1,0,2,12,29,5];
for (i=0; i < Numeros1.length;i++) 
    { var j =i-1;
      var temp= Numeros1[i];
      while (temp < Numeros1[j]) 
            {
                Numeros1[j+1]= Numeros1[j];
                j=j-1;
            }  
        Numeros1[j+1]=temp;
        
    }
    
    for (i=0; i < Numeros1.length;i++) 
        {console.log (Numeros1[i]);}
    