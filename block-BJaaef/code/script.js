let allPeople = got.houses.reduce((acc,cv)=>{
    acc = acc.concat(cv.people);
    return  acc;
},[]);

let list = document.querySelector(".list")

allPeople.forEach((elm)=> {
let li = document.createElement('li');

let img = document.createElement('img');
img.src = elm.image;
let name = document.createElement('h2');
name.innerText = elm.name;
let description = document.createElement('p');
description.innerText = elm.description;

let btn = document.createElement("a");
    btn.classList.add("btn-style");
    btn.innerText= "Learn More!";
    btn.href=elm.wikiLink;

let div = document.createElement('div');
div.append(img,name);

    li.append(div,description,btn);
    list.append(li);
});