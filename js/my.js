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

 function chuyen_c_thanh_f(){
     let c;
     c= +document.getElementById('do_C').value;
     if (isNaN(c)){
        document.getElementById('result3').innerHTML = 'Can nhap lai mot so';
     }
     else {
        document.getElementById('result3').innerHTML = "Do F = " +((c*1.8)+32);
     }
 }

function tinh_tuoi(){
    let dob;
    dob= document.getElementById("DOB").value;
    let today = new Date();
    if (dob!==""){
        dob = new Date(dob);
        let nam_sinh, nam_hien_tai, thang_sinh, thang_hien_tai, ngay_sinh, ngay_hien_tai;
        nam_sinh = dob.getFullYear();
        nam_hien_tai = today.getFullYear();
        thang_sinh = dob.getMonth();
        thang_hien_tai = today.getMonth();
        ngay_sinh = dob.getDate();
        ngay_hien_tai = today.getDate();
        let tuoi = nam_hien_tai - nam_sinh;
        if((thang_hien_tai < thang_sinh)||(thang_hien_tai === thang_sinh && ngay_hien_tai < ngay_sinh)){
            tuoi--;
        }
        document.getElementById('result_tinh_tuoi').innerHTML = tuoi;

    }
    else{
        document.getElementById('error_tinh_tuoi').innerHTML = 'Can nhap ngay thang nam sinh';
    }
}