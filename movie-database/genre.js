console.log("print this ONCE")

let result = new XMLHttpRequest();

result.onreadystatechange = () => {
    const data = JSON.parse(result.response);

    
    
    for (i = 0; i < 19; i++) {
        console.log(data.genres[i].name + ".png")
        var img = data.genres[i].name + ".png"
        newCard = `
        <div class="card text-center w-10" style="width: 250px;">
        <img src="` + img + `".png" + " class="card-img-top" style="object-fit: cover; width: 250px; filter: brightness(50%);
        height: 200px;" alt="...">
        <div class="card-body card-img-overlay" style="font-size: 20pt; color: white;">
        <p class="card-text align-middle text-center">` + data.genres[i].name + `</p>
        </div>
        </div>
        `;

        document.querySelector('.content').innerHTML += newCard;

    };
};

result.open("GET", "https://api.themoviedb.org/3/genre/movie/list?api_key=669f2553f52c85815c5e7c10b3197af7&language=en-US");
result.send();