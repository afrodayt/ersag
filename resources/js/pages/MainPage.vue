<template>
    <main class="main">
        <div class="main-banner w-100">
            <div class="container h-100">
                <div class="mb-200 row h-100 align-items-center d-flex">
                    <div class="col-7">
                        <span class="main-banner-title">
                            Ефективне та безпечне очищення меблів і килимів </span> <span class="text-warning main-banner-title">без фосфатів!</span>
                        <div class="main-banner-description">
                            Концентровані засоби для очищення килимів та меблів, безпечні для дітей, домашніх тварин та вашого дому. Вироблено в Туреччині.
                        </div>
                        <a href="#" class="main-button text-dark d-flex align-items-center justify-content-center text-decoration-none">До каталогу товарів</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container h-100">
            <div class="mb-200 main-problems d-flex justify-content-center">
                <img src="assets/img/img-problem-contamination-of-furniture.jpeg" alt="problems">
                <div>
                    <div class="main-title">Lorem ipsum</div>
                    <div class="main-description">Ваші килими та м’які меблі щодня збирають пил, плями та бруд, що негативно впливає
                        на здоров'я вашої родини. Більшість звичайних засобів для очищення містять фосфати та інші шкідливі речовини,
                        що можуть викликати алергію у дітей і домашніх тварин</div>
                    <div class="main-description">З часом ці забруднення глибоко в’їдаються в тканину, ускладнюючи очищення та знижуючи
                        термін служби ваших меблів і килимів. Виникає питання: як ефективно очистити поверхні та водночас убезпечити
                        домівку від шкідливих речовин?</div>
                </div>
            </div>
            <div class="mb-200 main-solution">
                <div class="main-title d-flex align-items-center justify-content-center">Рішеня є!</div>
                <div class="d-flex justify-content-center">
                    <div class="main-solution-card d-flex justify-content-center align-items-center flex-column">
                        <img src="assets/img/furniture.png" alt="furniture">
                        <span class="main-description mb-0">
                            Наші концентровані засоби для очищення меблів та килимів — це ідеальне рішення для тих, хто піклується
                            про чистоту свого дому та безпеку своїх близьких.</span><span class="text-primary main-description mb-0">
                            Засоби не містять фосфатів (STTP)</span><span class="main-description mb-0">, тому вони абсолютно безпечні
                            для дітей і домашніх тварин, а також екологічні для довкілля.
                        </span>
                    </div>
                    <div class="main-solution-card d-flex justify-content-center align-items-center flex-column">
                        <img src="assets/img/concentrated-product.png" alt="furniture">
                        <span class="main-description mb-0">
                            Завдяки високій концентрації засіб забезпечує глибоке очищення, видаляє навіть складні плями з
                            поверхні килимів та меблів.</span><span class="text-primary main-description mb-0">Лише одна кришечка
                            засобу забезпечить до 66 літрів</span><span class="main-description mb-0"> — це економічно вигідно та
                            зручно у використанні.
                        </span>
                    </div>
                    <div class="main-solution-card d-flex justify-content-center align-items-center flex-column me-0">
                        <img src="assets/img/manufacturer-turkiye.png" alt="furniture">
                        <span class="main-description mb-0">
                            Вироблено в Туреччині з урахуванням </span><span class="text-primary main-description mb-0">
                            міжнародних стандартів якості</span><span class="main-description mb-0">, наші засоби — це не лише
                            ефективність, але й турбота про здоров'я вашої родини та природу
                        </span>
                    </div>
                </div>
            </div>
            <div class="mb-200 main-switch">
                <div class="main-title d-flex align-items-center justify-content-center text-center">Натисніть на перемикач,<br>
                    щоб побачити більше
                </div>
                <div class="d-flex justify-content-center align-items-center mb-80">
                    <div class="main-switch-text">Диван</div>
                    <label class="main-switch-toggle">
                        <input type="checkbox" v-model="showCover">
                        <span class="main-switch-toggle-slider"></span>
                    </label>
                    <div class="main-switch-text me-0">Килим</div>
                </div>
                <div v-if="showCover" class="d-flex justify-content-center">
                    <img src="assets/img/img-carpet.png" alt="carpet">
                </div>
                <div v-else class="d-flex justify-content-center">
                    <img src="assets/img/img-sofa.png" alt="Sofa">
                </div>
            </div>
        </div>
            <div class="mb-200 main-advantage">
                <div class="container h-100">
                    <div class="main-title d-flex align-items-center justify-content-center text-center mb-80">
                        Переваги
                    </div>
                </div>
                <div class="main-advantages-bg">
                    <div class="container h-100">
                        <div class="main-advantages-card1">
                            <img src="assets/img/img-safety-for-family.png" alt="safety">
                            <div class="main-advantages-card1-title">Безопасність для родини</div>
                            <div class="main-advantages-card1-description">
                                Безпечний для дітей та домашніх тварин. Не містить фосфатів та
                                інших шкідливих хімічних речовин, що можуть викликати алергічні реакції.
                            </div>
                            <img src="assets/img/leaf1.png" alt="leaf" class="main-advantages-card1-leaf1">
                            <img src="assets/img/bubble.png" alt="bubble" class="main-advantages-card1-bubble1">
                        </div>
                        <div class="main-advantages-card2">
                            <img src="assets/img/img-easy-to-use.png" alt="safety">
                            <div class="main-advantages-card2-title">Легкість використання</div>
                            <div class="main-advantages-card2-description">
                                Простота у використанні. Лише розведіть засіб водою, нанесіть на поверхню, зачекайте кілька хвилин — і
                                ваші меблі чи килим будуть бездоганно чистими
                            </div>
                            <img src="assets/img/bubble.png" alt="bubble" class="main-advantages-card2-bubble1">
                            <img src="assets/img/bubble.png" alt="bubble" class="main-advantages-card2-bubble2">
                        </div>

                        <div class="d-flex justify-content-center">
                            <img src="assets/img/img-housewife.png" alt="housewife" class="main-advantages-housewife">
                        </div>

                        <div class="main-advantages-card3">
                            <img src="assets/img/img-economical.png" alt="safety">
                            <div class="main-advantages-card3-title">Економічність і ефективність</div>
                            <div class="main-advantages-card3-description">
                                Висококонцентрований продукт. Одного літра засобу достатньо для приготування 66 літрів очищувального
                                розчину, що робить його економічно вигідним.
                            </div>
                            <img src="assets/img/leaf2.png" alt="leaf" class="main-advantages-card3-leaf1">
                            <img src="assets/img/leaf3.png" alt="leaf" class="main-advantages-card3-leaf2">
                            <img src="assets/img/bubble.png" alt="bubble" class="main-advantages-card3-bubble1">
                        </div>
                        <div class="main-advantages-card4">
                            <img src="assets/img/img-ekologichno.png" alt="safety">
                            <div class="main-advantages-card4-title">Екологічність</div>
                            <div class="main-advantages-card4-description">
                                Екологічний продукт. Формула розроблена без використання шкідливих для довкілля компонентів.
                            </div>
                            <img src="assets/img/bubble.png" alt="bubble" class="main-advantages-card4-bubble1">
                        </div>
                    </div>
                </div>
            </div>
        <div class="container h-100">

        </div>
    </main>
</template>

<script>
export default {
    name: 'MainPage',
    data() {
        return {
            showCover: false
        }
    }
};
</script>

<style scoped lang="less">
    .mb-80 {
        margin-bottom: 80px;
    }

    .mb-200 {
        margin-bottom: 200px;
    }

    .main {
        font-family: 'Open Sans', sans-serif;

        &-banner {
            background: url("img/main-banner.png") center no-repeat;
            height: 550px;

            &-title {
                font-size: 55px;
                font-weight: 800;
                line-height: 105%;
                color: rgb(256, 256, 256);
            }
            &-description {
                margin-top: 15px;
                font-size: 20px;
                font-weight: 400;
                max-width: 554px;
                margin-bottom: 40px;
                color: rgb(256, 256, 256);
            }
        }

        &-button {
            border-radius: 80px;
            box-shadow: 0px 0px 30px 0px rgb(255, 217, 0);
            background: rgb(255, 217, 0);
            font-size: 20px;
            font-weight: 600;
            width: 300px;
            height: 60px;
        }

        &-button:hover {
            background: rgb(255, 230, 90);
        }

        &-title {
            font-size: 50px;
            font-weight: 800;
            text-transform: uppercase;
            margin-bottom: 30px;
        }

        &-description {
            font-size: 17px;
            font-weight: 400;
            max-width: 554px;
            margin-bottom: 20px;
        }

        &-problems {
            img {
                margin-right: 80px;
            }
        }

        &-solution {
            img {
                margin-bottom: 20px;
            }

            &-card {
                padding: 35px 25px;
                border-radius: 15px;
                box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.1);
                background: rgb(255, 255, 255);
                max-width: 386px;
                text-align: center;
                margin-right: 36px;
            }

            .main-title {
                margin-bottom: 50px;
            }
        }
        &-switch {
            &-text {
                font-size: 26px;
                font-weight: 400;
                margin-right: 25px;
            }

            &-toggle {
                position: relative;
                display: inline-block;
                width: 120px;
                height: 25px;
                border: 1px solid rgb(55, 146, 219);
                border-radius: 50px;
                margin-right: 25px;

                &-slider {
                    position: absolute;
                    cursor: pointer;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    -webkit-transition: .4s;
                    transition: .4s;
                    border-radius: 34px;

                }

                &-slider:before {
                    position: absolute;
                    content: "";
                    width: 19px;
                    height: 19px;
                    top: 2px;
                    left: 4px;
                    -webkit-transition: .4s;
                    transition: .4s;
                    border-radius: 50%;
                    background: rgb(55, 146, 219);
                }

                input:checked + &-slider:before {
                    -webkit-transform: translateX(92px);
                    -ms-transform: translateX(92px);
                    transform: translateX(92px);
                }
            }

            &-toggle input {
                opacity: 0;
                width: 0;
                height: 0;
            }
        }

        &-advantages {
            &-bg {
                background-image: url("assets/img/bg-advantages.svg");
                height: 763px;
                position: relative;
            }
            &-housewife {
                z-index: 2;
                margin-top: 64px;
                margin-bottom: 45px;
            }
            &-card1, &-card2, &-card3, &-card4 {
                border-radius: 20px;
                background: rgb(55, 146, 219);
                max-width: 388px;
                max-height: 254px;
                color: rgb(255, 255, 255);
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 30px 20px;

                img {
                    width: 140px;
                    height: 140px;
                    margin-top: -130px;
                }

                &-title {
                    font-size: 24px;
                    font-weight: 800;
                    max-width: 215px;
                    text-align: center;
                    text-transform: uppercase;
                    margin-bottom: 10px;
                }
                &-description {
                    font-size: 17px;
                    font-weight: 400;
                    text-align: center;
                }
            }
            &-card1 {
                position: absolute;
                top: 120px;
                left: 375px;

                &-leaf1 {
                    position: absolute;
                    bottom: 4px;
                    left: -40px;
                    width: 65px !important;
                    height: 72px !important;
                }

                &-bubble1 {
                    position: absolute;
                    top: 155px;
                    left: 35px;
                    width: 35px !important;
                    height: 35px !important;
                    transform: rotate(50deg);
                }
            }

            &-card2 {
                position: absolute;
                bottom: 0;
                left: 340px;

                &-bubble1 {
                    position: absolute;
                    top: 60px;
                    left: -40px;
                    width: 102px !important;
                    height: 107px !important;
                    transform: rotate(50deg);
                    filter: blur(4px);
                }

                &-bubble2 {
                    position: absolute;
                    top: 95px;
                    right: 20px;
                    width: 56px !important;
                    height: 59px !important;
                    transform: rotate(50deg);
                }
            }

            &-card3 {
                position: absolute;
                top: 75px;
                right: 460px;

                &-leaf1 {
                    position: absolute;
                    top: 90px;
                    right: 20px;
                    width: 112px !important;
                    height: 70px !important;
                }

                &-leaf2 {
                    position: absolute;
                    bottom: -35px;
                    right: -12px;
                    width: 90px !important;
                    height: 60px !important;
                }

                &-bubble1 {
                    position: absolute;
                    bottom: 20px;
                    left: -45px;
                    width: 72px !important;
                    height: 75px !important;
                    transform: rotate(50deg);
                    filter: blur(4px);
                }
            }

            &-card4 {
                position: absolute;
                bottom: 45px;
                right: 415px;

                &-bubble1 {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 87px !important;
                    height: 91px !important;
                    transform: rotate(50deg);
                }
            }
        }
    }
</style>
