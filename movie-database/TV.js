
// 669f2553f52c85815c5e7c10b3197af7

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    const data = JSON.parse(xhr.response);
    console.log(data);
    console.log(data.results[0].original_title)
    document.querySelector('.title1').innerHTML = data.results[0].original_title;
    document.querySelector('.description1').innerHTML = data.results[0].overview;
    document.querySelector('.firstm').src = "https://image.tmdb.org/t/p/original/" + data.results[0].poster_path;

    document.querySelector('.title2').innerHTML = data.results[1].original_title;
    document.querySelector('.description2').innerHTML = data.results[1].overview;
    document.querySelector('.secondm').src = "https://image.tmdb.org/t/p/original/" + data.results[1].poster_path;

    document.querySelector('.title3').innerHTML = data.results[2].original_title;
    document.querySelector('.description3').innerHTML = data.results[2].overview;
    document.querySelector('.thirdm').src = "https://image.tmdb.org/t/p/original/" + data.results[2].poster_path;
    
};
xhr.open("GET", "https://api.themoviedb.org/3/tv/top_rated?api_key=669f2553f52c85815c5e7c10b3197af7");
xhr.send();
