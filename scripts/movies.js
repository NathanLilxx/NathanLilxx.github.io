// 当页面加载时，加载所有电影
window.onload = function() {
    displayMovies();
};
function setMovies(){
    var movies = JSON.parse(localStorage.getItem('movies')) || [];
    var movieData=[{"moviePhoto":"../imgs/Braveheart.png","movieName":"勇敢的心","movieRating":"8.3","year":"1995","genres":["history"],"summary":"影片以13-14世纪英格兰的宫廷政治为背景，以战争为核心，讲述了苏格兰起义领袖威廉·华莱士与英格兰统治者不屈不挠斗争的故事。"},
                {"moviePhoto":"../imgs/Pulp Fiction.png","movieName":"低俗小说","movieRating":"8.9","year":"1994","genres":["crime"],"summary":"该片讲述了由“文森特和马沙的妻子”、“金表”、“邦妮的处境”三个故事以及影片首尾的序幕和尾声五个部分组成。"},
                {"moviePhoto":"../imgs/1917.png","movieName":"1917","movieRating":"8.2","year":"2019","genres":["war"],"summary":"该片以第一次世界大战为背景，讲述了2名英国战士，为拯救1600名战友，逆行传讯，跨越生死，使命必达的故事。"},
                {"moviePhoto":"../imgs/Nomadland.png","movieName":"无依之地","movieRating":"7.3","year":"2020","genres":["family"],"summary":"该片改编自美国作家杰西卡·布鲁德的同名小说，讲述了在经济大萧条中失去了工作和家园的弗恩开始住在房车中，一边打工一边旅游，并遇到了各色各样的人的故事"},
                {"moviePhoto":"../imgs/Depp V Heard.png","movieName":"德普大战希尔德","movieRating":"5.1","year":"2023","genres":["documentary"],"summary":"聚焦约翰尼·德普和安珀·希尔德关系破裂的审判案件，讲述了审判过程及其对所有相关人员的影响，以及当事人为何决定将其作为一场公开的法律官司而非私人官司。"}];
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
    toggleScrolling(true);
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

    var reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    var review = reviews.find(r => r.movieName === title);


    // 将信息设置到卡片中
    document.getElementById('card-title').innerText = title;
    document.getElementById('card-summary').innerText = movie.summary;
    
    if(review){
        document.getElementById('reviewCard').style.display = "flex";
        document.getElementById('createButton').style.display = "none";

        document.getElementById('reviewRating').innerText = review.reviewRating;
        document.getElementById('summary').innerText = review.summary;
        document.getElementById('writer').innerText = "——" + review.writer;
        document.getElementById('reviewPhoto').src = review.reviewPhoto;
        document.getElementById('linkReview').href = "m1.html?movie=" + encodeURIComponent(title);
    }else{
        document.getElementById('reviewCard').style.display = "none";
        document.getElementById('createButton').style.display = "block";
    }
    

    // 显示卡片
    document.getElementById('info-card').style.display = "block";
    document.getElementById("overlay").style.display = "block";
    toggleScrolling(false);
}

//创建影评的函数
function createReview(){
    window.location.href = '../form';
}

// 隐藏卡片的函数
function hideCard() {
    document.getElementById('info-card').style.display = "none";
    document.getElementById("overlay").style.display = "none";
    toggleScrolling(true);
}
  
