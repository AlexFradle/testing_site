const flexDirectionInput = document.getElementById("d_select");
const flexHorizontalInput = document.getElementById("h_select");
const flexVerticalInput = document.getElementById("v_select");
const flexRowInput = document.getElementById("r_select");
const flexNumberInput = document.getElementById("n_box");
const flexWidthInput = document.getElementById("rw_box");
const flexHeightInput = document.getElementById("rh_box");
const flexWrapInput = document.getElementById("wrap_select");
/*
let flexDirectionInput = document.getElementById("d_select");
let flexDirectionInput = document.getElementById("d_select");
let flexDirectionInput = document.getElementById("d_select");
let flexDirectionInput = document.getElementById("d_select");
*/
const f = document.getElementById("flex");

const randomInt = (min, max) => min + Math.floor(Math.random() * max);

flexDirectionInput.addEventListener("change", () => {
    f.style.flexDirection = flexDirectionInput.value;
});

flexHorizontalInput.addEventListener("change", () => {
    f.style.justifyContent = flexHorizontalInput.value;
});

flexVerticalInput.addEventListener("change", () => {
    f.style.alignItems = flexVerticalInput.value;
});

flexRowInput.addEventListener("change", () => {
    f.style.alignContent = flexRowInput.value;
});

flexNumberInput.addEventListener("change", () => {
    f.replaceChildren();
    for (let i = 0; i < flexNumberInput.value; i++) {
        const nc = document.createElement("div");
        nc.classList.add("blue");
        nc.classList.add("box");
        nc.innerHTML = `${i + 1}`;
        if (flexWidthInput.checked) nc.style.width = `${randomInt(10, 100).toString()}px`;
        if (flexHeightInput.checked) nc.style.height = `${randomInt(10, 100).toString()}px`;
        f.appendChild(nc);
    }
});

flexWrapInput.addEventListener("change", () => {
    f.style.flexWrap = flexWrapInput.value;
});
