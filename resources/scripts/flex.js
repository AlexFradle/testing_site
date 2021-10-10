const randomInt = (min, max) => min + Math.floor(Math.random() * max);

function makeFlex(h, v, n, rw, rh) {
    let f = document.getElementById("flex");
    f.style.display = "flex";
    f.style.justifyContent = h;
    f.style.alignItems = v;
    console.log(rw, rh);
    f.replaceChildren();
    for (let i = 0; i < n; i++) {
        let nc = document.createElement("div");
        nc.classList.add("blue");
        nc.classList.add("box");
        if (rw) nc.style.width = randomInt(10, 100).toString();
        if (rh) nc.style.height = randomInt(10, 100).toString();
        f.appendChild(nc);
    }
}
function addOne(i) {
    if (i != NaN) {
        return i ++
    } else {
      return
    }
    let a = '1';
};
