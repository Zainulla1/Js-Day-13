//Exercise-1

//fibonacci sequence in Javascript

var a=0;
var b=1;
for(let i=0;i<=15;i++) {
    var temp=a+b //0+1=1
    a=b
    b=temp
    console.log(temp)
}

//Exercise-2

//Triangle of numbres by using a nested for loop

document.write("Displaying a triangle of numbers:", "<br>");

//Outer for Loop
for(i=1; i<=5; i++)
    {
        //Inner for Loop
        for(j=1; j<=i; j++)
            {
                document.write(j);
            }
            document.write("<br>");
    }

//Exercise-3

//Rigth triangle Pattern

let i,j;

document.write("Displaying a Right triangle pattern:", "<br>");

//Outer for Loop
let k = 1;
for(i = 1; i <= 5; i++)
    {
        //Ineer for loop.
        for(j =1; j <= i; j++)
            {
                document.write(k);
            }
            document.write("<br>");
            k++;
    }
