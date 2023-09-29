const cont = document.querySelector('.container');
const del = document.querySelector('.del');
const get = document.querySelector('.btn');
const tx = document.querySelector('#tx');

let s = 1;

async function getUser(url) {
    const r = await (await fetch(url)).json()
    Array.from(r.results).forEach(data => {
        setUser(data);
    })
}

getUser(`https://randomuser.me/api?results=3`);
get.addEventListener('click', () =>{
    const g = tx.value;
    getUser(`https://randomuser.me/api?results=${g}`);
});

del.addEventListener('click', ()=>{
    cont.innerHTML = ''
} );

function setUser(data) {
    const d1 = document.createElement("div");
    const d11 = document.createElement("label");
    const d12 = document.createElement("div");
    const d11d = document.createElement("div");
    const d11di = document.createElement("img");
    const d11s = document.createElement("span");
    const d11s2 = document.createElement("span");
    const d12s = document.createElement("span");
    const cb = document.createElement("input");

    cb.id = `cb${s}`;
    cb.className = "cbs";
    cb.setAttribute("type", "checkbox");

    d1.className = "d1";

    d11.className = "d11";
    d11.setAttribute("for", `cb${s}`)
    d12.className = "d12";

    d11d.className = "d11d";
    d11di.className = "d11di";
    d11di.setAttribute("alt", `${data.name.first}`)

    d11s.className = "d11s";

    d12s.className = "d12s"; 
    d11s2.className = "d11s2" //&#x2715

    cont.append(d1);
    d1.append(cb);
    d1.append(d11);
    d1.append(d12);
    d11.append(d11d);
    d11d.append(d11di);
    d11.append(d11s);
    d11.append(d11s2);
    d12.append(d12s);

    d11s2.innerHTML = "&#x2715";

    d11di.setAttribute("src", data.picture.large);
    d11s.innerHTML = `Name: ${data.name.title} ${data.name.first} ${data.name.last}<br> ${data.email}`;

    d12s.innerHTML = `Gender: ${data.gender}<br />Tel: ${data.phone}<br />Country: ${data.location.country}`

    s++;
}

document.addEventListener("click", (e)=>{
    if(e.target.className == "d11s2"){
        const d = e.target.parentElement.parentElement
        d.remove();
    }
})