window.addEventListener('load', function () {
    let but = document.getElementById("but");
    let butt = document.getElementById("butt");
    but.addEventListener('click', function (){
        window.location.href = "https://zen.yandex.ru/media/megatank/lomaem-maus-kuda-i-kak-5da6de6ee4fff000af4c2343";
        });
	butt.addEventListener('click', function (){
	document.body.style.backgroundColor = prompt('Выберите цвет фона', 'green');
        });

    });