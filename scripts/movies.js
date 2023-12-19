// 当页面加载时，加载所有电影
window.onload = function() {
    displayMovies();
};

function displayMovies(filterTypes = []) {
    var moviesList = document.getElementById('moviesList');
    moviesList.innerHTML = ''; // 清空当前列表
    var movies = JSON.parse(localStorage.getItem('movies')) || [];

    movies.forEach(function(movie) {
        if (filterTypes.length === 0 || filterTypes.includes(movie.type)) {
            var movieArticle = document.createElement('article');
            movieArticle.className = 'movie';
        
            var movieImg = document.createElement('img');
            movieImg.src = '../imgs/4.png'; // 假设图片路径是固定的，或者从movie对象中获取
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



// 显示卡片的函数
function showCard(element) {
    // 获取电影的信息

    var title = element.querySelector('h3').innerText;
    var movies = JSON.parse(localStorage.getItem('movies')) || [];
    var movie = movies.find(m => m.movieName === title);
    if (movie) {
        var summary = movie.summary;
    } else {
        var summary = '银行家安迪因被误判为枪杀妻子及其情人的罪名入狱后，他不动声色、步步为营地谋划自我拯救并最终成功越狱，重获自由';
    }

    // 将信息设置到卡片中
    document.getElementById('card-title').innerText = title;

    document.getElementById('card-summary').innerText = summary;

    // 显示卡片
    var card = document.getElementById('info-card');
    card.classList.remove('hidden');
    card.classList.add('show');
}

// 隐藏卡片的函数
function hideCard() {
    var card = document.getElementById('info-card');
    card.classList.remove('show');
    card.classList.add('hidden');
}
  