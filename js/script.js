$(document).ready(function(){
    $('button').on("click", function(){
        //growFont();
        //triangle_1(); 
       // writeNums() ; 
        //drawChess() 
        //console.log(isEven(27)); 
        //console.log(countChars("baba and because and Boob", "o") );   
       // _range(5,25);\
       //reverseArr([0,1,2,3,4,5]);
       /*let arrays = [[1,2,3], [4,5] , [6,7]];
       console.log(mergearr(arrays));*/
       //console.log(every([1,2,3,16], n => n<10));
       fibonacci();

    })
})
function growFont(){
    $('#main').html("<h1> reda neggaz </h1>").append('hello world')
        .animate({ fontSize: "40"}, 1000).animate({color: "#f00"},function(){
         console.log($('#main').css('color'));
    });
}

function triangle_1(){
    _hash = '#'
    for(i=0;i<7; i++){
        console.log(_hash.repeat(i+1)) ;          
    }
}

function writeNums(){
    for(i=0; i<100; i++){
        if(i%3 == 0){
            console.log('Fizz');
        }else if(i%5 == 0){
            console.log('Buzz');
        }else{
            console .log(i+1);
        }

    }

}

function drawChess(){
    car1 = " #";
    car2 = "# ";
    for(i=1; i<=8; i++){
        if(i%2 == 0){
            console.log(car1.repeat(8));
        }else{
            console.log(car2.repeat(8));
        }
    }
}

function returnMin(x,y)
{
    if(x<y){
        return x;
    }else if(x>y){
        return y;
    }else {
        return "the two numbers are equals.";
    }
}

function isEven(x){
    if(x%2 == 0){
        return "this number is even!";
    }else{
        return "this number is odd!";
    }
}

function countChars(s, c){
    var chars = s.split('')
    var count = 0;
    console.log(s);
    for(var i = 0 ; i< chars.length; i++){
        if(chars[i] == c.toLowerCase() || chars[i] == c.toUpperCase()){
            count++;
        }
    }
    return count;
}

function _range(a, b, c){
    let arr = [];
    if (c<0 && a>b){
        for(var i = a; i >=b ;i--){
          arr.push(i);  
        }
    }else if( a<b){
        for(var i = a; i <= b ;i++){
            arr.push(i);  
         }
    }
    console.log(arr);
}

function reverseArr(arr){
    let arr1 = new Array();
    console.log(arr1);
    for(var i = arr.length; i > 0 ; i--){
        arr1[i-1]= arr.shift(arr.length - 1);
    }
    console.log(arr1);
}

function mergearr(arr)
{
    let tempArr = [];
    let count = 0;
    for (var i=0; i< arr.length; i++)
    {
        for (var j = 0; j < arr[i].length; j++)
        {
            tempArr[count] = arr[i][j];
            count +=1;
        }
    }
    return tempArr;
}

function every(array, test) 

{
    for (let element of array) 
    {
      if (!test(element)) 
      {
        return false;
      }
    }
    return true;
}

function fibonacci()
{
    let arr= [];
    let i = 0;
    let num = 10000 ;
    while(i<num)
    {
        if(i==0 || i==1)
        {
            arr.push(i);
        }
        else
        {
            n = arr[arr.length-1]+arr[arr.length-2];
            if(n<num)
            {
                arr.push(n);
            }
            else
            {
                break;
            } 
        }
        i++;
    }
    console.log(arr);
}