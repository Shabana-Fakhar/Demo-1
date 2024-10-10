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
     let a=true;
     let b=true;
     console.log(a&&b)
     console.log(a||b)






