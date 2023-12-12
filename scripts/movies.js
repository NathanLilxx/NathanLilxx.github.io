// 显示卡片的函数
function showCard(element) {
// 获取电影的信息
var title = element.querySelector('h3').innerText;

var summary = '银行家安迪因被误判为枪杀妻子及其情人的罪名入狱后，他不动声色、步步为营地谋划自我拯救并最终成功越狱，重获自由'; // 梗概数据来源可以是内嵌在 HTML 中或从服务器获取

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
  