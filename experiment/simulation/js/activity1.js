let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">ODE: Modified Euler's method</h4>
            <p>Objective: </p>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Activity", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse center-text divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        $$ x_0 = 0, y_0 = 1  $$
        $$ \\frac{dy}{dx} = f(x, y) = x^2 + y  $$
        $$ h = 0.02  $$
        $$ y(0.04) = ?  $$
        <br>
        <div class="row">
            <div class='col-3'>
                <span>Select the accuracy: </span>
            </div>
            <div class='col-3'>
                <span id="acc-dsp">
                    <select id='acc-inp' class='form-select fs-16px'>
                        <option selected>Select</option>
                        <option value="0.001">3 decimal accuracy</option>
                        <option value="0.0001">4 decimal accuracy</option>
                    </select>
                </span>
            </div>
            <div class='col-2'>
                <span>
                <button class='btn btn-info btn-sm std-btn' style='position: relative;' onclick='calculate_xy();' id='temp-btn-2' >Next</button>
                </span>
            </div>

            <div id="table-div-act1" style="display:none; margin-top: 2%">
                $$ y_{1}^{p} = y_0 + h f(x_0, y_0)  $$
                $$ y_{1}^{c} = y_0 + \\frac{h}{2}[f(x_0,y_0) + f(x_1,y_{1}^{p})]  $$

                <h6 style="font-weight: 600; text-align: left; color:maroon">Enter the values upto 5 decimal places</h6>
                <div id="table-div"></div>
            </div>

            <div id="table-div-act2" style="display:none; margin-top: 3%">
                <h6 style="font-weight: 600;">Calculate the value of y(0.04)</h6>
                <h6 style="font-weight: 600; text-align: left; color:maroon">Enter the values upto 5 decimal places</h6>
                <div id="table-div2"></div>
            </div>

            <button class='btn btn-info std-btn' style='margin: auto; display:none;' id='act1-btn3' onclick='exp_complete();' >Next</button>

        </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb1-box');
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function calculate_xy() {
    // input value of accuracy
    let inp_acc;
    inp_acc = document.getElementById(`acc-inp`);
    acc_val = inp_acc.value;
    console.log("accuracy = ", acc_val);
    let btn = document.getElementById('temp-btn-2');
    btn && btn.remove();
    inp_acc.disabled = true;
    // let acc_dsp: HTMLSpanElement = <HTMLSpanElement>(
    // 	document.getElementById('acc-dsp')
    // );
    // acc_dsp.innerHTML = '';
    // acc_dsp.innerText = `${acc_val}`;
    // calculate x
    x_val[0] = x0;
    for (let i = 1; i <= 2; i++) {
        x_val[i] = parseFloat((x_val[i - 1] + h).toFixed(2));
    }
    console.log("x_val= ", x_val);
    y_past = y0 + h * f1(x0, y0);
    console.log("y past= ", y_past);
    // calculate y
    getyacc(y0, h, x0, y_past, acc_val);
    console.log("y_curr= ", y_curr);
    fill_table();
    let div = (document.getElementById('table-div-act1'));
    div.style.display = 'block';
}
function fill_table() {
    let div = document.getElementById('table-div');
    let header = [''];
    tb_data = [['']];
    let n_inputs = [];
    let i = 0;
    for (i = 0; i < no_iter; i++) {
        header.push(`Iteration ${i + 1}`);
        tb_data[0].push(y_curr[i]);
        n_inputs.push(i + 1);
    }
    y_accval = y_curr[i - 1];
    console.log("y curr val= ", y_accval);
    let tb = new Verify_Table(header, tb_data, 0, n_inputs, y_curr, "", div, true, exp);
    tb.load_table();
}
function exp() {
    x0 += h;
    getyacc(y_accval, h, x0, y_past, acc_val);
    console.log("y_curr= ", y_curr);
    let j = 0;
    for (j = 0; j < no_iter; j++) {
        (y_curr[j]);
    }
    let y_accval1 = y_curr[j - 1];
    console.log("y curr val 1= ", y_accval1);
    y_values = [y0, y_accval, y_accval1];
    console.log("y values = ", y_values);
    fill_table_final();
    let div = (document.getElementById('table-div-act2'));
    div.style.display = 'block';
}
function fill_table_final() {
    let div = document.getElementById('table-div2');
    let header = ['x'];
    tb_data = [['y']];
    let n_inputs = [];
    let i = 0;
    for (i = 0; i <= 2; i++) {
        header.push(`${x_val[i]}`);
        tb_data[0].push(y_values[i]);
        n_inputs.push(i + 1);
    }
    let tb = new Verify_Table(header, tb_data, 0, n_inputs, y_values, "", div, true, exp_final);
    tb.load_table();
}
function exp_final() {
    let next_btn = (document.getElementById('act1-btn3'));
    next_btn.style.display = 'block';
}
function exp_complete() {
    let btn = (document.getElementById('act1-btn3'));
    btn && btn.remove();
    alert('Experiment completed');
}
activity1();
//# sourceMappingURL=activity1.js.map