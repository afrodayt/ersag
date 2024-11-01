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
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="main-switch-text">Диван</div>
                        <label class="main-switch-toggle">
                            <input type="checkbox" v-model="showCover">
                            <span class="main-switch-toggle-slider"></span>
                        </label>
                        <div class="main-switch-text me-0">Килим</div>
                    </div>
                    <div v-if="showCover">showCover</div>
                    <div v-else>!showCover</div>
                </div>
            </div>
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
    .main {
        font-family: 'Open Sans', sans-serif;


        .mb-200 {
            margin-bottom: 200px;
        }

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
    }
</style>
