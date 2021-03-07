(() => {
  function displayError(elem, message) {
    const smallElem = elem.parentElement.querySelector("small");
    smallElem.innerText = message;
    elem.classList.add("invalid");
    form.classList.add("invalid");
  }

  function resetState(elem) {
    const smallElem = elem.parentElement.querySelector("small");
    smallElem.innerText = "";
    elem.classList.remove("invalid");
    form.classList.remove("invalid");
  }

  function validateNum(elem) {
    const valS = elem.value;
    const val = parseInt(valS);
    // console.log(val);

    if (Number.isNaN(val)) {
      displayError(elem, "ข้อมูลไม่ถูกต้อง");
    } else if (val > 299) {
      displayError(elem, "ข้อมูลไม่เป็นความจริง");
    }
  }

  function bmiCalulate(Weight, Hight) {
    const newHight = Hight / 100;
    const bmi = Weight / (newHight * newHight);

    displayBmi(bmi.toFixed(2));
    setBmiColor(bmi);

    console.log(bmi);
  }

  function setBmiColor(bmi) {
    if (bmi <= 18.5) {
      document.documentElement.style.setProperty(
        "--current-bmi-color",
        "var(--thin-bmi-color)"
      );
    } else if (bmi <= 22.9) {
      document.documentElement.style.setProperty(
        "--current-bmi-color",
        "var(--normal-bmi-color)"
      );
    } else if (bmi <= 24.9) {
      document.documentElement.style.setProperty(
        "--current-bmi-color",
        "var(--medium-bmi-color)"
      );
    } else if (bmi <= 29.9) {
      document.documentElement.style.setProperty(
        "--current-bmi-color",
        "var(--fat-bmi-color)"
      );
    } else {
      document.documentElement.style.setProperty(
        "--current-bmi-color",
        "var(--more-fat-bmi-color)"
      );
    }
  }

  function validateFrom(event) {
    event.preventDefault();

    const weightElem = document.getElementById("weight");
    const hightElem = document.getElementById("hight");

    resetState(weightElem);
    resetState(hightElem);

    validateNum(weightElem);
    validateNum(hightElem);

    const weight = parseInt(weightElem.value);
    const hight = parseInt(hightElem.value);

    bmiCalulate(weight, hight);

    return bmiCalulate(weight, hight);
  }

  function displayBmi(bmi) {
    const bmiElem = document.querySelector(".result > h1");

    bmiElem.innerText = bmi;
  }

  function run() {
    const inputElem = document.querySelector("form");
    inputElem.addEventListener("submit", validateFrom);
  }

  run();
})();
