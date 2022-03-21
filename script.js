// HTML要素を、jsにおいて定義していく
const Dogs = document.querySelectorAll('.dog');
console.log(Dogs);
const Cats = document.querySelectorAll('.cat');
const Cutes = document.querySelectorAll('.cute');

const Funnys = document.querySelectorAll('.funny');
const Smarts = document.querySelectorAll('.smart');


const BtnDog = document.getElementById('form-reply_method_1');
const BtnCat = document.getElementById('form-reply_method_2');
const BtnCute = document.getElementById('form-reply_method_3');
const BtnFunny = document.getElementById('form-reply_method_4');
const BtnSmart = document.getElementById('form-reply_method_5');




// ■挙動その１■　２パターン
// Q1　犬派ボタンをクリックしたら
BtnDog.addEventListener("click", () => {
    // 「犬派」のラジオボタンにチェックが入っていたら
    //  犬に対してsmileのクラスを付与
    // 猫のsmaileクラスを除去
    if (BtnDog.checked) {
        for (let Dog of Dogs) {
            Dog.classList.add('smile');
        }
        for (let Cat of Cats) {
            Cat.classList.remove('smile');
        }
        console.log(Cutes);
    }
});

// Q1　猫派ボタンをクリックしたら
BtnCute.addEventListener("click", () => {
    // 「猫派」のラジオボタンにチェックが入っていたら
    //  猫に対してsmileのクラスを付与
    // 犬のsmaileクラスを除去
    if (BtnCute.checked) {
        for (let Cute of Cutes) {
            Cute.classList.add('best_smile');
        }
        for (let Funny of Funnys) {
            Funny.classList.remove('best_smile');
        }
        for (let Smart of Smarts) {
            Smart.classList.remove('best_smile');
        }
    }
});


// ■挙動その２■　３パターン
// Q2 癒しをクリックしたら、
BtnFunny.addEventListener("click", () => {
    // 「癒し」のラジオボタンにチェックが入っていたら
    //  癒しに対してbest_smileのクラスを付与
    // ブサカワ、スマートのbest_smaileクラスを除去
    if (BtnFunny.checked) {
        for (let Funny of Funnys) {
            Funny.classList.add('best_smile');
        }
        for (let Cute of Cutes) {
            Cute.classList.remove('best_smile');
        }
        for (let Smart of Smarts) {
            Smart.classList.remove('best_smile');
        }
    }
});

// Q2 ブサカワをクリックしたら、
BtnSmart.addEventListener("click", () => {
    // 「ブサカワ」のラジオボタンにチェックが入っていたら
    //  癒しに対してbest_smileのクラスを付与
    // 癒し、スマートのbest_smaileクラスを除去
    if (BtnSmart.checked) {
        for (let Smart of Smarts) {
            Smart.classList.add('best_smile');
        }
        for (let Cute of Cutes) {
            Cute.classList.remove('best_smile');
        }
        for (let Funny of Funnys) {
            Funny.classList.remove('best_smile');
        }
    }
});


// Q2 スマートをクリックしたら、
BtnCat.addEventListener("click", () => {
    // 「スマート」のラジオボタンにチェックが入っていたら
    //  スマートに対してbest_smileのクラスを付与
    // 癒し、ブサカワのbest_smaileクラスを除去
    if (BtnCat.checked) {
        for (let Cat of Cats) {
            Cat.classList.add('smile');
        }
        for (let Dog of Dogs) {
            Dog.classList.remove('smile');
        }
    }
});