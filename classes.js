class OneQuestion {
    triangleСheck() {
        let int1 = 5;
        let int2 = 5;
        let int3 = 3;

        if (int1 + int2 > int3) {
            if (int1 + int3 > int2) {
                if (int2 + int3 > int1) {
                    console.log("Треугольник существует");
                } else {
                    console.error("Не существует");
                }
            } else {
                console.error("Не существует");
            }
        } else {
            console.error("Не существует");
        }
    }
}
// let oneQuestion = new OneQuestion().triangleСheck();

class TwoQuestion {
    minCheck() {
        let a = 4;
        let b = 4;
        let c = 0;
        let d = -4;

        let z = Math.min(a, b, c, d);
        console.log(z);
    }
}
// let twoQuestion = new TwoQuestion().minCheck();

class FourQuestion {
    angleChekc() {
        let a = 40;
        let b = 60;
        let c = 20;
        if (a + b + c == 180) {
            console.log("параметры сопадают");
        } else if (a == b && b == c) {
            console.log("Равносторонний");
        } else if (a == b || b == c || a == c) {
            console.log("Равнобедренный");
        } else if (a == 90 && b == 90 && c == 90) {
            console.log("Прямоугольный");
        } else if (a < 90 || b < 90 || c < 90) {
            console.log("Остроугольный");
        } else if (a > 90 && b > 90 && c > 90) {
            console.log("Тупоугольный");
        } else {
            console.log("Это не углы");
        }
    }
}
// let fourQuestion = new FourQuestion().angleChekc();

class FiveQuestion {
    ageChekc() {
        let a = prompt("Ваш возраст?", "");
        if (a < 18) {
            console.error("Вы бот");
        } else {
            console.log("Проходи старичок");
        }
    }
}
// let fiveQuestion = new FiveQuestion().ageChekc();

class SixQuestion {
    goCheck() {
        let a = prompt("Сколько вам лет?", "");
        if (a < 7) {
            console.log("Сегодня в сад");
        } else if (a > 7 && a < 18) {
            console.log("Пора в школу");
        } else if (a > 18 && a < 24) {
            console.log("Пора в универ");
        } else if (a > 24 && a < 60) {
            console.log("ПОра на работу");
        } else if (a > 60) {
            console.log("Пора в больничку");
        } else {
            console.log("Не корректный возраст");
        }
    }
}
// let fiveQuestion = new SixQuestion().goCheck();

class SevenQuestion {
    nameCheck() {
        const a = "Дениc";
        const b = "Антон";
        const v = "Саша";
        if (v === b) {
            console.error("Валите от сюда");
        } else if (v === a) {
            console.error("Валите от сюда");
        } else {
            console.log("Добро пожаловать");
        }
    }
}
// let sevenQuestion = new SevenQuestion().nameCheck();

class EightQuestion {}

class NineQuestion {
    waterCheck() {
        const a = 2;
        if (a === 0) {
            console.log("Лед");
        } else if (a === 1) {
            console.log("Вода");
        } else if (a === 2) {
            console.log("Пар");
        } else {
            console.error("Не известное состояние");
        }
    }
}
// let nineQuestion = new NineQuestion().waterCheck();

class TenQuestion {
    genderCheck() {
        const a = "Гетеро";
        const b = "Гетеро";
        if (a || b == "Гетеро") {
            console.log("Любви и добра вам");
        } else if (a || b == "Гомосексуальный") {
            console.error("Валите в америку");
        }
    }
}
// let tenQuestion = new TenQuestion().genderCheck();

class ElevenQuestion {
    lineCheck() {
        let a = "Baa";
        let b = "";
        if (a.trim() && b.trim() === "") {
            return console.log(false);
        }
        if (a || b !== "") {
            if (/^\s*$/.test(a && b)) {
                return console.log(false);
            }
        }
        return console.log(true);
    }
}
// let elevenQuestion = new ElevenQuestion().lineCheck();

class TwelveQuestion {
    urlCheck() {
        const a = "http://";
        const b = new RegExp("^(https?:\\/\\/)?");
        if (!!b.test(a)) {
            console.log("Это урл");
        } else {
            console.log("Это не урл");
        }
    }
}
// let twelveQuestion = new TwelveQuestion().urlCheck();

class ThirteenQuestion {
    meanCheck() {
        const a = [3, 3, 3, 5, 4];
        let b = a.reduce((a, b) => a + b, 0);
        let v = b / a.length;
        console.log(v);
        if (v >= 5) {
            console.error("Фу ты отличник");
        } else if (v >= 4 && v < 5) {
            console.log("Ты хорошист");
        } else if (v >= 3 && v < 4) {
            console.log("Ты троечник");
        }
    }
}
// let thirteenQuestion = new ThirteenQuestion().meanCheck();

class FourteenQuestion {
    fioCheck() {
        const a = "Иван";
        const b = "Нана";
        if (a === "Иван" && b === "Иванов") {
            console.log("кОМБО");
        } else if (a === "Иван" || b === "Иванов") {
            console.log("Это мимо");
        } else {
            console.log("Привет человек");
        }
    }
}
// let fourteenQuestion = new FourteenQuestion().fioCheck();

// export function fifteenQestion(a) {
//     a = -4;
//     if (a < 0) {
//         console.log("Это больше");
//         return 0;
//     } else {
//         console.error("Меньше нуля");
//         return 1;
//     }
// }

class SixteenQuestion {
    checkReact() {
        let a = 5;
        let b = 5;
        let c = 5;
        let d = 5;

        if (a == b && 2 * a == b) {
            console.log("Это квадрат");
        } else if ((a = b) && (b = c) && (c = d)) {
            console.log("Прямоугольник");
        } else {
            console.log("Четырехугольник");
        }
    }
}
// let sixteenQuestion = new SixteenQuestion().checkReact();

class SeventeenQuestion {
    chekcUser() {
        let user = false;
        var yroki = [];
        for (var i = 0; i < 100; ++i) yroki[i] = i + 1;
        if (user === true) {
            console.log(yroki, "Вы премиум");
        } else if (user === false) {
            console.log(yroki[0], "Вы не премиум усер");
        }
    }
}
// let seventeenQuestion = new SeventeenQuestion().chekcUser();

class EighteenQuestion{
    constructor(){
        let player = 1;
    }

    game(){
        
    }
}