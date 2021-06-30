// 디스플레이모드
var Body = {
    setBackgroundColor: function (color) {
        document.querySelector('body').style.backgroundColor=color;
    },
    setColor: function (color) {
        document.querySelector('body').style.color=color;
    }
}
var Links = {
    setColor: function (color) {
        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length){
            alist[i].style.color=color;
            i = i + 1
        }
    }
}
function displayToggle(self) {
    if (self.value === '다크모드') {
        self.value= '라이트모드';
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Links.setColor('powderblue');
        }
    
    else {
        self.value = '다크모드';
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Links.setColor('blue');
        }
}
// 객체(Object) = 서로 연관된 함수/변수를 묶어서 정리하는 것이다.
// document.getElementById()에서 'document'는 객체이고, 'getElementById()'는 함수이다.
// 객체에 속한 함수는 메소드라고 불리운다.