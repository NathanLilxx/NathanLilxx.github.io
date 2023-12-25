// 当页面加载时，加载所有电影
window.onload = function() {
    displayMovies();
};
function setMovies(){
    var movies = JSON.parse(localStorage.getItem('movies')) || [];
    var movieData=[{"moviePhoto":"../imgs/Braveheart.png","movieName":"Braveheart","movieRating":"8.3","year":"1995","genres":["history"],"summary":"Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England."},
                {"moviePhoto":"../imgs/Pulp Fiction.png","movieName":"Pulp Fiction","movieRating":"8.9","year":"1994","genres":["crime"],"summary":"The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."},
                {"moviePhoto":"../imgs/1917.png","movieName":"1917","movieRating":"8.2","year":"2019","genres":["war"],"summary":"April 6th, 1917. As an infantry battalion assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap."},
                {"moviePhoto":"../imgs/Nomadland.png","movieName":"Nomadland","movieRating":"7.3","year":"2020","genres":["family"],"summary":"A woman in her sixties, after losing everything in the Great Recession, embarks on a journey through the American West, living as a van-dwelling modern-day nomad."},
                {"moviePhoto":"../imgs/Depp V Heard.png","movieName":"Depp V Heard","movieRating":"5.1","year":"2023","genres":["documentary"],"summary":"Showing both testimonies side-by-side for the first time, this series explores the trial that set Hollywood ablaze and the online fallout that ensued."}];
    var newMovies = movies.concat(movieData); // 将新的电影数据添加到数组中

    // 将更新后的电影数组存储回localStorage
    localStorage.setItem('movies', JSON.stringify(newMovies));
    displayMovies();
}
function displayMovies(filterTypes = []) {
    var moviesList = document.getElementById('moviesList');
    moviesList.innerHTML = ''; // 清空当前列表
    var movies = JSON.parse(localStorage.getItem('movies')) || [];

    movies.forEach(function(movie) {
        if (filterTypes.length === 0 || movie.genres.some(genres => filterTypes.includes(genres))) {
            var movieArticle = document.createElement('article');
            movieArticle.className = 'movie';
        
            var movieImg = document.createElement('img');
            movieImg.src = movie.moviePhoto;
            movieImg.className = 'movie-img';
        
            var movieInfoDiv = document.createElement('div');
            movieInfoDiv.className = 'movie-info';
            movieInfoDiv.setAttribute('onclick', 'showCard(this)'); // 添加点击事件
        
            var movieTitle = document.createElement('h3');
            movieTitle.textContent = movie.movieName; // 从movie对象获取电影名称
        
            var movieRating = document.createElement('p');
            movieRating.textContent = '评分 ' + movie.movieRating; // 从movie对象获取评分
        
            var movieYearDuration = document.createElement('p');
            // 假设您存储了年份和时长，可以这样组合它们
            movieYearDuration.textContent = movie.year;
        
            // 将这些元素组合起来
            movieInfoDiv.appendChild(movieTitle);
            movieInfoDiv.appendChild(movieRating);
            movieInfoDiv.appendChild(movieYearDuration);
        
            movieArticle.appendChild(movieImg);
            movieArticle.appendChild(movieInfoDiv);
        
            // 将完整的article元素添加到页面上
            moviesList.appendChild(movieArticle);
        }
    });
}

function filterMovies() {
    var selectedTypes = Array.from(document.querySelectorAll('[name="movieType"]:checked')).map(el => el.value);
    displayMovies(selectedTypes);
}

document.getElementById("overlay").addEventListener("click", function() {
    document.getElementById("info-card").style.display = "none";
    this.style.display = "none";
});
function toggleScrolling(allowScrolling) {
    if (allowScrolling) {
        document.body.style.overflow = 'auto';
    } else {
        document.body.style.overflow = 'hidden';
    }
}

// 显示卡片的函数
function showCard(element) {
    // 获取电影的信息

    var title = element.querySelector('h3').innerText;
    var movies = JSON.parse(localStorage.getItem('movies')) || [];
    var movie = movies.find(m => m.movieName === title);
    var summary = movie.summary;

    // 将信息设置到卡片中
    document.getElementById('card-title').innerText = title;

    document.getElementById('card-summary').innerText = summary;

    // 显示卡片
    document.getElementById('info-card').style.display = "block";
    document.getElementById("overlay").style.display = "block";
    toggleScrolling(false);
}

// 隐藏卡片的函数
function hideCard() {
    document.getElementById('info-card').style.display = "none";
    document.getElementById("overlay").style.display = "none";
    toggleScrolling(true);
}
  
