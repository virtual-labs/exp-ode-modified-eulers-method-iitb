function f1(x, y) {
    return ((Math.pow(x, 2)) + y);
}
function getyacc(y0, h, x0, y_past, acc_val) {
    do {
        y_curr[no_iter] = y0 + (h / 2) * (f1(x0, y0) + f1(x0 + h, y_past));
        err = Math.abs(y_past - y_curr[no_iter]);
        y_past = y_curr[no_iter];
        no_iter++;
    } while (err > acc_val);
    return (y_curr);
}
// function gety(x0,y0):number[]{
//     //let h=(xn-x1)/n;
//     let y:number[]=[];
//     y[0]=y0;
//     let i;
//     for(i=1;i<=2;i++){
//         getyacc(y0,h,x0,y_past,acc_val);
//         //x0+=h;
//     }
//     y[i]=y_curr[i-1];
//     return(y)
// }
//# sourceMappingURL=modified_euler.js.map