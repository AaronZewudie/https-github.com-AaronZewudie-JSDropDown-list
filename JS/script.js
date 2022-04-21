// Aaron zewudie
// jS file
// first draft 04/19/2022
// final draft 04/20/2022
const state = {
  a: "apple",
  b: "banana",
  c: "city",
  d: "dom",
  e: "end",
  f: "forEach",
};

// w3 select option
const render = (ele, tmp) => {
  ele.innerHTML = tmp;
};
const createDropDown = () => {
  const keyele = document.getElementById("key");
  const valele = document.getElementById("val");

  let keystmp = "";
  let valstmp = "";
  Object.keys(state).forEach((key) => {
    keystmp += `<option value="${key}">${key}</option>`;
    valstmp += `<option value="${key}">${state[key]}</option>`;
  });
  render(keyele, keystmp);
  render(valele, valstmp);
  //test
  console.log(document);
  keyele.addEventListener("mouseover", function (e) {
    keyele.style.backgroundColor = "#008080";
  });

  valele.addEventListener("mouseover", function (e) {
    valele.style.backgroundColor = "#008080";
  });

  keyele.addEventListener("mouseout", function (e) {
    keyele.style.backgroundColor = "#4B0082";
    keyele.style.color = "white";
  });

  valele.addEventListener("mouseout", function (e) {
    valele.style.backgroundColor = "#4B0082";
    valele.style.color = "white";
  });
  let coutenerWrapper = document.getElementById("contener-wrapper");
  coutenerWrapper.addEventListener("mouseover", function (e) {
    coutenerWrapper.style.backgroundColor = "#2F2187";
    coutenerWrapper.style.color = "white";
  });
  coutenerWrapper.addEventListener("mouseout", function (e) {
    coutenerWrapper.style.backgroundColor = "";
    coutenerWrapper.style.color = "white";
  });
  (function () {
    document
      .getElementById("contener-wrapper")
      .addEventListener("change", (e) => {
        console.log(e.target.value);
        keyele.value = e.target.value;
        valele.value = e.target.value;

        // console.log(keyele.value);
      });
  })();
};
createDropDown();

// // change to array both key and values of object
// let propertyNames = Object.keys(state);
// let propertyValues = Object.values(state);
// // test the array
// console.log(propertyNames);
// console.log(propertyValues);
// // keyele event section
// keyele.addEventListener("change", (e) => {
//   // e.preventDefault();
//   valele.innerText = "";
//   let keyElemnt = keyele.value;
//   if (keyElemnt) {
//     valele.innerText = state[keyElemnt];
//   }
//   //test
//   console.log(keyElemnt);
//   console.log(valele.innerText);
// });
// // valele event section
// valele.addEventListener("change", (e) => {
//   // e.preventDefault();
//   let temp = 0;
//   let valuElemnt = valele.value;
//   for (i = 0; i < propertyValues.length; i++) {
//     if (valuElemnt === propertyValues[i]) {
//       temp = i;
//     }
//   }
//   keyele.textContent = propertyNames[temp];
//   //test
//   console.log(valuElemnt);
//   console.log(keyele.innerText);
// });
