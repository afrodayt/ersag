<template>
    <header class="header">
        <img src="assets/img/logo-ersag.svg" alt="logo">
        <a href="#" class="header-text">Про продукт</a>
        <a href="#" class="header-text">Наші переваги</a>
        <a href="#" class="header-text">Каталог товару</a>
        <a href="#" class="header-text">Виробник</a>
        <a href="#" class="header-text">Відгуки</a>
        <button class="header-order">Замовити</button>
    </header>

</template>

<script>
export default {
    name: 'HeaderComponent',
};
</script>

<style scoped lang="less">
    .header {
        padding: 25px;
        font-family: 'Open Sans', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        font-weight: 600;

        img {
            margin-right: 62px;
        }

        &-text {
            margin-right: 47px;
            color: rgb(0, 0, 0);
            text-decoration: none;
        }

        &-order {
            border: 2px solid rgb(255, 217, 0);
            border-radius: 80px;
            width: 180px;
            height: 40px;
        }
        &-order:hover {
            background: rgb(255, 217, 0);
        }
    }
</style>
