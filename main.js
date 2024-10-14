//Arithmatic operators +,-,*,/,%,++,--
//var sum=10+20;
//console.log(sum)
//var sum=10-5;
//console.log(sum)
//var sum=10*10;
//console.log(sum)
//var sum=10%10;
//console.log(sum)
//var sum=20;
//console.log(sum++)
//console.log(sum)
//var sum=20;
//console.log(sum--)
//console.log(sum)


//comparison operator ==,===,!=,<,>,<=,>=
//var sum=20==20;
//console.log(sum)
//var sum=20==="20";
//console.log(sum)
//var sum=20!=20;
//console.log(sum)
//var sum=20<=20;
//console.log(sum)
//var sum=20>=10;
//console.log(sum)
//logical operator &&,||,!
//var sum=20==20 && 10==10;
//console.log(sum)
//var sum=20==20 || 10==10;
//console.log(sum)
//var sum=20==20;
//console.log(!sum)
//Assignment operator =,+=,-=,*=,/=
//var sum=20;
//var b=10;
//sum/=b
//console.log(sum)
//console.log(b)
//var sum=20;
//var b=10;
//var result1=sum=sum+b;
//var result2=sum+=b;
//console.log(result1)
//console.log(result2)
//Ternary operators if-else
//var age=19;
//console.log(isAdult)
//conditional statements
//var age=12
//if(age>=22){
    //console.log("yes is adult")

//}else if(age>=21){
   // console.log("you will be,next year")

//}else if(age<=13){
    //console.log("you are a teenagger")

//} else{
   // console.log("No,This ia not")

//}
//Switch statement
//var age=22
//witch(age){
   // case 22:
   // console.log("you are adult")
   // break;
    //case 21:
       // console.log("Try next year")
       // break;
       // case 13:
           // console.log("you are teenager")
           // break;
           // default:
                //console.log("NO!you are not")
//}
//datatypes
//strings type data
//var  data="Hello pakistan"
//numeric data
//var num=1;
//bolean type data
//var data="false"
//float typedata
//var data=1.5;
//To check datatypes
//Number
//var data=11.01;
//var type=typeof(data);
//console.log(type)
//string
//var data="hello pakistan"
//var type=typeof(data)
//console.log(type)
//bolean

//var data=true
//var type=typeof(data)
//console.log(type)
//Null


//varr data=true
//var type=typeof(data)
//console.log(type)
//undefined
//var data;
//var type=typeof(data)
//console.log(type)
//object type data
//var data={name:"shabana",age:22};
//var type=typeof(data);
//console.log(type)
//console.log(data)
//Functions
/*function sum(a,b){
    return a+b;
}
var num1=1;
var num2=10;
    
var result1= sum(num1,num2);
var result2=sum(10,30);

console.log(result1)
console.log(result2)*/
//control Flow
/*var number=5;
if(number>5){
    console.log("yes number is greater than 5")
}else if(number==5){
    console.log("number is equal to  5")
}else{
    console.log("number is less than 5")
}*/
//Ternaty operator
/*var age=17;
var isAdult=(age>=18)? console.log("you are adult"): console.log("you are not adult")*/
//Switch Statement
/*let fruit="strawberry";
switch (fruit){
    case "apple":
        console.log("you choose apple")
        break;
        case "banana":
            console.log("you choose banana")
            break;
            default:
                console.log("unknown fruit")
}*/
         


    //Loops
    //For loop
   /*for(i=0; i<5; i++){
        console.log(i)
    }*/

    //While loop
   /*let count=0;
    while(count<4){
        ++count
        console.log(count)

    }*/

        //Dwhile loop
       /*let count=0
        do{
            count++
            console.log(count)

        }while(count<3)*/

//For in loop
/*let car={
    make :"toyota",
    model : "corolla",
    year :2024
}
for(let key in car){
console.log(key +";" +car[key] )
}*/



/*let data=['one','two','three','four','five']
for(let i of data){
    console.log(i)
}*/



//control flow interruption
/*for (let i=0; i<10; i++){
    if(i===3){
        console.log("validatio checked")
continue;
    }
console.log(i)

}*/

   //Error handling
  /* var a=10;
   var b=1;
   try{
    if(b==0){
        throw("There is an error : 0")
    }
    if(b==1){
     throw("There is an error : 1")
    }
    var result=a/b;
    console.log(result)
   }catch (err){
    console.log(err)
    
   }*/


    //Functions
   // function declaratin
  /* function factorial(n){
    if(n===1){
        return 1

    }
    console.log(n)
    return n=factorial(n-1);
   }
   
   console.log(factorial(5))*/
   

   //sync
  /* function fetchData(callback){
    setTimeout(()=>(
        console.log("network data")
    ),1000);

    
   }
   function processdata(){
    console.log("process network data")
   }
   fetchData(processdata)
   console.log("Hello i'am working")*/



   //promise
   /*let promise = new Promise((resolve, reject) => {
    
   
   
     let success=true;
     if(success){
      resolve("operation succeded")

     }else{
        reject("operation failed")
     }
   });
   promise
   .then((message)=>{
       console.log((message));
   })
   .catch((err)=>{
     console.log(err);
   })*/




     //async await
     
     /*async function fetchdata() {
        let promise = new Promise((res, rej) => {
          setTimeout(() => res("data fetched"), 1000);
        });
      
        let result = await promise;
        console.log(result);
      }
      
      fetchdata();*/
      

     //Short circuiting and logical operation
     /*let a=true;
     let b=true;
     console.log(a&&b)
     console.log(a||b)*/



      //Class:Classes in JavaScript are a fundamental building block for creating reusable and modular code.
// They provide a blueprint for creating objects, encapsulating data and related behavior.


     class Car{
        constructor(brand,model){
            this.brand=brand;
            this.model=model;
        }
     
     drive() {
        console.log(`The ${this.brand} ${this.model} is driving.`);

     }

    }
    //constructor is used to change behaviour
    //constructor is called automaticallyy when object is created
   var car= new Car("toyota","civic")
   var car2=new Car("honda","city")
  car2.drive()
  console.log(car2.brand)




  
//inheritance is a fundamental concept in oop which allow one class to inherit properties and methods from other class

// Parent class Vehicle
class Vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    // A method in the parent class
    stop() {
        console.log(`${this.brand} ${this.model} has stopped.`);
    }
}

//extend ()create a child class thart inherit properties and methods from parent class.
//super()  Calls the parent class constructor and allows access to the parent class methods
// Child class Car extending Vehicle
class Car extends Vehicle {
    constructor(brand, model) {
        // Call the parent class constructor first
        super(brand, model);
    }
   brandNew(){
            console.log(`${this.brand }  is Brand new`);
        }
  
    }
// Creating an instance of Car
var car= new Car("Honda", "Civic");

// Calling methods
car.brandNew();  
car.stop(); 







 //encapsulation :This helps to protect data from external access and modification

//polymorphism :wecan inherit same parent class in multiple children classes


 class Vehicle {
    #brand = "Corolla"
    constructor(brand,model)  {

     this.#brand =brand;
     this.model = model;
    }
   
    drive(){
    console.log(`The ${this.#brand} ${this.model} is driving`);
    }

    start(){
        console.log(`The ${this.#brand} ${this.model} is Start`);
        }

  stop(){
            console.log(`The ${this.#brand} ${this.model} is stop`);
            }
}
    class Car extends Vehicle {
        constructor(brand, model) {
    
            super(brand=brand, model= model)
        }

        brandNew(){
            console.log(`${this.brand }  is Brand new`);
        }

        stop(){
            console.log("Your are stop")
        }
            
        
        
    }


var car =new Car("landcursior", "honda ")



car.stop()

var vehicle = new Vehicle ("Toyota" , "Corolla")

vehicle.stop()






