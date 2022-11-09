// var arr = document.task3('li');
// var out='';
// for(var key in arr){
//     out += arr[key].innerHTML;
// }
// alert(out);


// let a=prompt("a= ");
// let b=prompt("b= ");
// let c=prompt("c= ");

let n=Number(prompt("n= "));
let ar=[];
for (let i=1; i<=n; i++){
    let a=prompt("a= ");
    ar.push (a)
}


// for () {
//         out = array[a, b, c];
// }
// alert(out);


for (let i = 1; i <=n; i++) {
        document.write(ar[i-1],"<br/>")
    }
