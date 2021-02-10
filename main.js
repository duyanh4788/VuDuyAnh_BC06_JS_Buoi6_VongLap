function getMyEle(ele) {
    return document.getElementById(ele);
}
/**
 * BT 1 : Tìm Số Nguyên Dương Nhỏ Nhất 
 * 
 * input : 
 * tìm số nguyên dương nhỏ nhất sao cho 1+2+...+n > 1000
 * N = giá trị người dùng nhập vào
 * 
 * hanlding :
 * dom input N lấy giá trị số  
 * tạo biến 
 * i = 0
 * ketqua = 0
 * while > i  < 1000
 * ketqua += i 
 * i++
 * nếu ketqua > 1000 
 * break;
 * 
 * output :
 * xuất kết quả = 45
 */
function TimSoNguyenDuong() {
    var soN = 0;
    var ketQua = 0;
    while (soN < 10000) {
        soN++;
        ketQua += soN;
        if (ketQua > 10000) {
            break;
        }
    }
    getMyEle("thongBaoSND").innerHTML = soN;
}

/**
 * BT 2 : Tính Tổng 2 Số X N 
 * 
 * input : 
 * tính tổng số N >> S(n)= x^1 + x^2 + ... + x^n
 * x tự nhập bằng 4;
 * 
 * hanlding : 
 * tạo biến 
 * soX = 1; ( biến tìm lũy thừa)
 * soN = 0; ( biến tính tổng)
 * x = 4; ( giá trị nhập)
 * n = 4; ( giá trị tích n )
 * dùng VL for tính số lũy thừa = soX * x và kết quả soN = soN + soX
 * 
 * output : 
 * hiển thị kết quả
 * 
 */
function tinhTongXn(){
    var x = 2;
    var n = 2;
    var soX = 1;
    var soN = 0;
    for (i = 0 ; i < n ; i++){
        soX *= x;
        soN += soX
    }
    getMyEle("nhapSoN").innerHTML = soN;
}
/**
 * BT 3 : Tính Giai Thừa 
 * input : 
 * tạo ô input lấy giá trị người dùng : 
 * tính giai thừa 0! = 1 ; n! = 1x2x3...n
 * hanlding : 
 * tạo biến 
 * nhapSo dom đến input lấy giá trị người dùng 
 * giaiThua = 1;
 * ketQua = "";
 * VL for > i=1 ; i < nhapSo ; i++
 * giaiThua *= i
 * 
 * output : 
 * dom html >> " Kết Quả : " + giaiThua 
 * 
 * 
 * 
 */
function tinhGiaiThua(){
    var nhapSo = parseInt(getMyEle("soGiaiThua").value);
    var giaiThua = 1;
    for ( var i = 1 ; i <= nhapSo ; i++){
            giaiThua *= i;
    }
    getMyEle("thongBaoGT").innerHTML = " Kết Quả : " + giaiThua;
    getMyEle("thongBaoGT").style.display = "block";
}

/**
 * BT 4 : Tạo Thẻ DIV 
 * 
 * input : 
 * tạo thẻ div ( chẵn = đỏ ; lẻ = xanh)
 * 
 * hanlding : 
 * tạo biến : 
 * soChan = "";
 * soLe = "";
 * ketQua = 0 ;
 * VL while ( ketQua < 10)
 * ketQua++ ( bước nhảy)
 * neu soChan %2 == 0 
 * soChan += ketQua
 * tạo biến divB tạo thẻ div cho biến;
 * gán divB vào html 
 * gọi div id = thongBaoDiv gán divB
 * gọi divB gán màu 
 *  
 * và soLe += ketQua 
 * tạo biến divR tạo thẻ div
 * gán divR vào html
 * gọi div id = thongBaoDiv gán divR
 * gọi divR gán màu 
 * 
 * output : 
 * in thông báo kết quả 5 divB + 5 divR xen kẽ nhau
 */

function taoTheDIV() {
    ;
    var soChan = "";
    var soLe = "";
    var tongKq = 0;
    while (tongKq < 10) {
        tongKq++;
        if (tongKq % 2 == 0) {
            soChan += tongKq;
            var divB = document.createElement("div");
            divB.innerHTML = " Chẵn ";
            getMyEle("thongBaoDiv").appendChild(divB);
            divB.className = "alert alert-success";
        } else {
            soLe += tongKq;
            var divR = document.createElement("div");
            divR.innerHTML = " Lẻ ";
            getMyEle("thongBaoDiv").appendChild(divR);
            divR.className = "alert alert-danger";
        }
    }
}
/**
 *  BT 5 : In Số Nguyên Tố từ 1 đến N ( N = Người dùng nhập vào )
 * input : 
 * tạo ô input lấy giá trị số người dùng nhập vào ;
 * 
 * hanlding : 
 * 
 * tạo ô input ;
 * tạo biến nhapSo dom đến input lấy giá trị người dùng nhập vào 
 * 
 * tạo biến soNT so sánh số nguyên tố : 
 * var soNT = true ; ( mặc định đúng)
 * 
 * nếu nhapSo < 2 - soNT = sai ( nếu nhỏ hơn 2 ko phải SNT)
 * và  (đặt vl for)
 * for var i = 2 ; i < (nhapSo-1) ; i++{
 * nếu soN % i == 0 - soNT sai
 * break;
 * }
 * 
 * kiểm tra biến flag xuất kết quả ;
 * 
 * nếu soNT = true xuất kết quả : số nguyên tố
 * và sai xuất kết quả : ko phải số nguyên to
 * 
 * 
 */
function inSoNguyen() {

    var nhapSo = getMyEle("hienThiSNT").value;
    var ketQua = "";
    var soNT = true;

    if (nhapSo < 2) {
        soNT = false;
    } else {
        for (var i = 2; i < nhapSo - 1; i++) {
            if (nhapSo % 1 == 0) {
                soNT = false;
            }
        }
    }

    if (soNT == true) {
        ketQua = nhapSo + " là số nguyên tố";
    } else {
        ketQua = nhapSo + " không phải là số nguyên tố ";
    }
    getMyEle("thongBaoInSo").innerHTML = ketQua;
    getMyEle("thongBaoInSo").style.display = "block";
}

