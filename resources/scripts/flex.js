const randomInt = (min, max) => min + Math.floor(Math.random() * max);

function makeFlex(h, v, n, rw, rh, wrap) {
    const f = document.getElementById("flex");
    f.style.display = "flex";
    f.style.justifyContent = h;
    f.style.alignItems = v;
    f.style.flexWrap = wrap;
    f.replaceChildren();
    for (let i = 0; i < n; i++) {
        const nc = document.createElement("div");
        nc.classList.add("blue");
        nc.classList.add("box");
        if (rw) nc.style.width = `${randomInt(10, 100).toString()}px`;
        if (rh) nc.style.height = `${randomInt(10, 100).toString()}px`;
        f.appendChild(nc);
    }
}
