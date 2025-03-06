//compare two values using absolute difference
function verify_values_abs(value, truevalue) {
    if ((truevalue == 0) && (value == truevalue)) {
        return true;
    }
    let res = false;
    res = (Math.abs(value - truevalue) < 0.001) ? true : false;
    // if(calculated_value <= 1) {
    //     return true
    // } else {
    //     return false;
    // }
    return res;
}
let tb_data = [];
let acc_val;
let x0 = 0;
let y0 = 1;
let x_val = [];
let h = 0.02;
let y_past;
let no_iter = 0;
let y_curr = [];
let err;
let y_val = [];
let y_values = [];
let y_accval;
let y_accval1;
//# sourceMappingURL=data.js.map