// // // // // // Assignment 3 // // // // // //


// // // // // Chapter 21 - 25


// // // Question 1


// var firstName=prompt("Enter your Name") ;

// var lastName=prompt("Enter your Father's Name") ;

// var fullName=firstName +" "+lastName ;

// document.write("<h2>"+ "Welcome " + fullName + " to my website " +"</h2>");


// // // Question 2


// var favMobile=prompt("Enter your Favourite Phone model") ;

// var words= favMobile.length ;

// document.write("My Favourite phone is <b>"+favMobile+"</b>") ;

// document.write("<br><br> Length of String is "+"<b>"+words +"</b>" ) ;


// // // Question 3


// var words="Pakistani"

// var find=words.indexOf("n")


// document.write("String : <b>"+words+"</b>") ;

// document.write("<br><br> Index of 'n' : <b>"+find+"</b>") ;


// // // Question 4


// var greet="Hello World"

// var last= greet.lastIndexOf("l")

// document.write("String : <b>"+greet+"</b>") ;

// document.write("<br><br> Last index of 'l' : <b>"+last+"</b>") ;


// // // Question 5


// var words="Pakistani"

// var find=words.charAt(3)


// document.write("String : <b>"+words+"</b>") ;

// document.write("<br><br> Character at index <b>3</b> is : <b>"+find+"</b>") ;


// // // Question 6


// var firstName=prompt("Enter your Name") ;

// var lastName=prompt("Enter your Father's Name") ;

// var fullName= firstName.concat(" " , lastName)

// document.write("<h2>"+ "Welcome to my website : "+ fullName + "</h2>");


// // // Question 7


// var city="Hyderabad" ;

// var replace= city.replace("Hyder" , "Islam")

// document.write("City : <b>"+city+"</b>") ;

// document.write("<br><br> After Replacement : <b>"+replace+"</b>") ;


// // // Question 8


// var message = "Ali and Sami are best friends. <br> They play cricket and football together.";

// var replace= message.replace(/and/g , "&")


// document.write("<b> First Message : </b>"+message) ;

// document.write("<br><br> <b> After Replacement : </b>"+replace) ;


// // // Question 9


// // // Without conversion


// var value="472"

// var type= typeof value ;

// document.write("Value : <b>"+value+"</b>") ;

// document.write("<br> Type : <b>"+type+"</b>") ;


// // // // With conversion


// var value = parseInt(value)

// var type= typeof value ;

// document.write("<br><br> Value : <b>"+value+"</b>") ;

// document.write("<br> Type : <b>"+type+"</b>") ;



// // // Question 10


// var userInput=prompt("Enter a text to Convert into uppercase it")

// var inputCap= userInput.toUpperCase()


// document.write("User Input : <b>"+userInput+"</b>") ;

// document.write("<br>Upper Case : <b>"+inputCap+"</b>") ;



// // // Question 11


// var userInput=prompt("Enter a text to Capitialize it")

// var userInput= userInput.toLowerCase()

// var firstLetter= userInput.charAt(0).toUpperCase()

// var inputCap = firstLetter + userInput.slice(1)
 


// document.write("User Input : <b>"+userInput+"</b>") ;

// document.write("<br>Upper Case : <b>"+inputCap+"</b>") ;



// // // Question 12


// var num= 35.36

// var type= typeof num ;

// document.write("Value : <b>"+num+"</b>") ;

// document.write("<br> Type : <b>"+type+"</b>") ;


// var num= num.toString()

// var noDot= num.replace(".", "")

// var type= typeof num

// document.write("<br><br> Value : <b>"+noDot+"</b>") ;

// document.write("<br> Type : <b>"+type+"</b>") ;


// // // Question 13


// var userName=prompt("Enter your Input: ");

// var split=[];

// var arr=[];

// for(var i=0;i<userName.length ;i++)
// {
//     split[i]=userName.split(" ");

//     arr[i]=userName.charCodeAt(i);

//     if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)

//     {
//             message="Correct User Name";
//     }
//     while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)

//     {
//         alert("please enter a valid userName");          

//         userName=prompt("Enter your Input: ");

//         for(var i=0;i<userName.length;i++)
//         {
//             split[i]=userName.split("&nbsp;");
//             arr[i]=userName.charCodeAt(i);
//             if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//             {
//                 break;
//             }
//         }
//     }

// }
// alert(message)


// // //  Question 14


// var bakeItems= ["cake", "apple pie", "cookie" , "chips", "patties"]

// var want=prompt("Welcome to ABC bakery. What do you want to order")

// var ifAvailable=want.toLowerCase()

// var state= false

// for(i=0 ; i < bakeItems.length ; i++){
//     if(ifAvailable === bakeItems[i]){
//         document.write(want + " is <b>available</b> at index " + i + " in our Bakery")
//         state = true
//     break;
//     }
// }

// if(state=== false){
//     document.write(want + " is <b>not available</b> in our Bakery")
        
// }


// // // Question 15





// // // Question 16


// var str="University Of Karachi"
// var change= str.split([])

// for(i=0 ; i <change.length ; i++){
//     document.write(change[i]+"<br>")
// }


// // // Question 17


// var userInput= prompt("Type Something")

// var lastLetter= userInput.slice(-1)


// document.write("User Input : " +userInput)

// document.write("<br> last letter of input : "  +lastLetter)


// // // Question 18


// var line="The quick brown fox jumps over the lazy dog"

// var lineSmall=line.toLowerCase()

// var split=lineSmall.split(" ")

// nums=0

// for(i=0 ; i < split.length ; i++){
//     if(split[i] == "the"){
//         value = nums++
//     }
// }
// document.write("<b>TEXT : </b> "+ line )
// document.write("<br> there are "+value+" occurences of word the")


