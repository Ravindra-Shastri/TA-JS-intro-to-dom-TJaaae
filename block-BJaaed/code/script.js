let ul = document.querySelector('.list');
details.books.forEach((elm) =>{
    let li = document.createElement("li");

    let img = document.createElement("img");
    img.src = elm.image;

    let title = document.createElement("title");
    title.classList.add("text");
    title.innerText = elm.title;

    let author = document.createElement("h3");
    author.innerText = `Author:${elm.author}`;

    let btn = document.createElement("a");
    btn.classList.add("btn-style");
    btn.innerText= "Buy Now";
    btn.href=elm.website;
    li.append(img,title,author,btn);
    ul.append(li);
})                                                    

