//getting DOM-El
const outputEl = document.getElementById("out");
const inp1El = document.getElementById("inp1");
const inp2El = document.getElementById("inp2");

// common-Fn for getting latest values
let input1 = "";
let input2 = "";
const getUpdatedVals = () => {
  input1 = parseInt(inp1El.value);
  input2 = parseInt(inp2El.value);
};

// controller-fns
const controllerfN = (action) => {
  getUpdatedVals();
  switch (action) {
    case "sum":
      outputEl.value = input1 + input2;
      break;
    case "sub":
      outputEl.value = input1 - input2;
      break;
    case "mul":
      outputEl.value = input1 * input2;
      break;
    case "div":
      outputEl.value = input1 / input2;
      break;
  }
};

// inp-controller-fn
const inpControllerfN = (value) => {

}