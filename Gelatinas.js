
class Saborgelatina {
   constructor(sabor1,sabor2,sabor3,color1,color2,tipazucar1,tipazucar2,tipazucar3){
       this.sabor1 =sabor1;
       this.sabor2 =sabor2;
       this.sabor3 =sabor3;
       this.color1= color1;
       this.color2= color2;
       this.tipazucar1=tipazucar1;
       this.tipazucar2=tipazucar2;
       this.tipazucar3=tipazucar3;
   }
   //Combinacion de sabores
   combinarSabor() {
       if (this.sabor1=="maracuya" && this.sabor2=="mango") {
         return console.log("Sabor MARACUMANGO" )
       } 
       else if (this.sabor2=="mora" && this.sabor3=="lulo") {
        return console.log("Sabor MORALULO" )
        }
       
      else if (this.sabor1=="coco" && this.sabor3=="fresa") {
       return console.log("Sabor COCOFRESA" )
       }
       else {   
           return console.log("Sabor inderminado" )
          }
    } 
    //Combinacion de sabores
    combinarColores() {
      if (this.color1=="rojo" && this.color2=="amarillo") {
        return console.log("color NARANJA" )
      } 
      else if (this.color1="azul" && this.color2=="amarillo") {
       return console.log("color VERDE" )
       }
      
     else if (this.color2=="rojo" ) {
      return console.log("Color Rojo" )
      }
      else {   
          return console.log("Color inderminado" )
         }
   } 
   //Tipo Azucar
   tipoAzucar() {
    if (this.tipazucar1=="morena" ) {
      return console.log("Con azucar Morena" )
    } 
    else if (this.tipazucar2=="normal" ) {
      return console.log("Con azucar Normal" )
    } 
       
   else if (this.tipazucar3=="ligth" ) {
    return console.log("Con azucar light" )
  } 
    else {   
        return console.log("Sin azucar" )
       }
  } 
}

var NvoSabor = new Saborgelatina("maracuya","mango");
NvoSabor.combinarSabor()

var NvoSabor = new Saborgelatina("","mora","lulo");
NvoSabor.combinarSabor()

var NvoSabor = new Saborgelatina("coco","","fresa");
NvoSabor.combinarSabor()

var NvoSabor = new Saborgelatina("","","fresa");
NvoSabor.combinarSabor()
//colores
var NvoSabor = new Saborgelatina("","","","rojo","amarillo");
NvoSabor.combinarColores()

var NvoSabor = new Saborgelatina("","","","azul","amarillo");
NvoSabor.combinarColores()

var NvoSabor = new Saborgelatina("","","","","rojo");
NvoSabor.combinarColores()

var NvoSabor = new Saborgelatina("","","","rojo","");
NvoSabor.combinarColores()

//tipo azucar
var NvoSabor = new Saborgelatina("","","","","","morena");
NvoSabor.tipoAzucar()

var NvoSabor = new Saborgelatina("","","","","","","normal");
NvoSabor.tipoAzucar()

var NvoSabor = new Saborgelatina("","","","","","","","ligth");
NvoSabor.tipoAzucar()

var NvoSabor = new Saborgelatina("","","","","","","","");
NvoSabor.tipoAzucar()

//combinaciones
var NvoSabor1 = new Saborgelatina("coco","","fresa");
var NvoSabor2 = new Saborgelatina("","","","azul","amarillo");
var NvoSabor3 = new Saborgelatina("","","","","","morena");

console.log("NUEVA GELATINA:")

NvoSabor1.combinarSabor()+ NvoSabor2.combinarColores()+NvoSabor3.tipoAzucar()