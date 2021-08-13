 function giai_phuong_trinh_bac_nhat() {
    var a, b;
    a = +document.getElementById('a').value;
    b = +document.getElementById('b').value;
    console.log(a);
    if(a == 0) {
        if(b == 0) {
            document.getElementById('result').innerHTML = 'Vo so nghiem';
        } else {
            document.getElementById('result').innerHTML = 'Vo nghiem';
        }
    } else {
        document.getElementById('result').innerHTML = "Ngiem x = " + -b/a;
    }
 }


 function giai_phuong_trinh_bac_hai() {
     // code 
     var a, b, c;
     a = +document.getElementById('a2').value;
     b = +document.getElementById('b2').value;
     c = +document.getElementById('c').value;
     if(a == 0) {
        if(b == 0) {
            if (c == 0){
                document.getElementById('result2').innerHTML = 'Vo so nghiem';
            }
            else{
                document.getElementById('result2').innerHTML = 'Vo nghiem';
            }
        } 
        else {
            document.getElementById('result2').innerHTML = "Phuong trinh co 1 ngiem x = " + -c/b;
        }
    } 
    else {
        var delta = b*b - 4*a*c;
        if (delta<0){
            document.getElementById('result2').innerHTML = 'Vo nghiem';
        }
        else if (delta == 0){
            document.getElementById('result2').innerHTML = "Phuong trinh co 1 ngiem x = " + -b/(2*a);
        }
        else{
            document.getElementById('result2').innerHTML = "Phuong trinh co 2 ngiem x1 = " + (-b-Math.sqrt(delta))/(2*a) + ", x2 = "+(-b+Math.sqrt(delta))/(2*a);
        }
    }
 }