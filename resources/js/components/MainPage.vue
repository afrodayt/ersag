<template>
    <div class="main">
        <div class="main-banner">

        </div>
        <div class="container">
            <h1 class="main-title text-center">Hello from Vue 2 with Vite!</h1>
        </div>
    </div>

</template>

<script>
export default {
    name: 'MainPage',
};
</script>

<style scoped lang="less">
    .main {

        &-banner {
            background: url("img/main-banner.png") center no-repeat;
            background-size: contain;
            height: 550px;
        }
        &-title {
            color: red;
        }
    }
</style>
