fetch('https://hp-api.onrender.com/api/characters')
    .then(response => response.json())
    .then(data => {
        //console.log('Données JSON: ', data);

        data.forEach(data => {
            //console.log(data.name);
            let content = document.getElementById("container");


            const Newdiv = document.createElement("div");
            content.append(Newdiv);

            const img = document.createElement("img");
            Newdiv.append(img);
            if (data.image) { img.src = data.image; }
            else { img.src = "img/Anounymous.png" }



            const H2Name = document.createElement("h2");
            Newdiv.append(H2Name);
            H2Name.innerText = data.name;


            const H3House = document.createElement("h3");
            Newdiv.append(H3House);
            H3House.innerText = data.house;

            if (data.house == "Gryffindor") { H3House.style.color = "red"; }
            else if (data.house == "Slytherin") { H3House.style.color = "green" }
            else if (data.house == "Hufflepuff") { H3House.style.color = "yellow" }
            else if (data.H3House = "Ravenclaw") { H3House.style.color = "blue" }


            const pActor = document.createElement("p");
            Newdiv.append(pActor);
            pActor.innerText = "Actor: " + data.actor;
            pActor.setAttribute("class", "Actor");

            const Bdate = document.createElement("p");
            Newdiv.append(Bdate);
            Bdate.innerText = "Birth: " + data.dateOfBirth;
            Bdate.setAttribute("class", "Birth");
        });
    });

//Easter egg 
const secret = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "b", "a", "Enter"];
let Index = 0;

function checkKeyPress(event) {
    const key = event.key;
    key === secret[Index] ? Index++ : Index = 0;
    if (Index === secret.length) {
        alert("Easter egg unlock !!");
        Index = 0;
        window.location.href="https://nas.bobtail-turtle.ts.net/pages/Fish.html"
    }
}

window.addEventListener("keydown", checkKeyPress);
