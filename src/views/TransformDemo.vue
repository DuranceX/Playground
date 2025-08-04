<template>
    <div class="container">
        <div v-for="(card, index) in cardList" :key="index" class="card" :style="card.style">
            {{ card.title }}
        </div>
    </div>
</template>

<script setup>
    const cardList = [
        {
            title: '拉伸程度-10px',
            style: 'transform: perspective(10px) rotateY(1deg);',
        },
        {
            title: '拉伸程度-300px',
            style: 'transform: perspective(300px) rotateY(1deg);',
        },
        {
            title: '拉伸程度-700px',
            style: 'transform: perspective(700px) rotateY(1deg);',
        },
        {
            title: 'Y轴旋转-30度',
            style: 'transform: rotateY(30deg);',
        },
        {
            title: 'Y轴旋转-60度',
            style: 'transform: rotateY(60deg);',
        },
        {
            title: 'Y轴旋转-90度',
            style: 'transform: rotateY(90deg);',
        },
        {
            title: 'X轴旋转-30度',
            style: 'transform: rotateX(30deg);',
        },
        {
            title: 'X轴旋转-60度',
            style: 'transform: rotateX(60deg);',
        },
        {
            title: 'X轴旋转-90度',
            style: 'transform: rotateX(90deg);',
        },
        {
            title: '横向缩放-0.5',
            style: 'transform: scaleX(0.5);',
        },
        {
            title: '横向缩放-1',
            style: 'transform: scaleX(1);',
        },
        {
            title: '横向缩放-1.5',
            style: 'transform: scaleX(1.5);',
        },
        {
            title: '纵向缩放-0.5',
            style: 'transform: scaleY(0.5);',
        },
        {
            title: '纵向缩放-1',
            style: 'transform: scaleY(1);',
        },
        {
            title: '纵向缩放-1.5',
            style: 'transform: scaleY(1.5);',
        },
        {
            title: '横向斜切-10度',
            style: 'transform: skewX(10deg);',
        },
        {
            title: '横向斜切-30度',
            style: 'transform: skewX(30deg);',
        },
        {
            title: '横向斜切-45度',
            style: 'transform: skewX(45deg);',
        },
        {
            title: '纵向斜切-10度',
            style: 'transform: skewY(10deg);',
        },
        {
            title: '纵向斜切-30度',
            style: 'transform: skewY(30deg);',
        },
        {
            title: '纵向斜切-45度',
            style: 'transform: skewY(45deg);',
        },
    ]
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
}

.card{
    width:200px;
    height: 100px;
    background-color: #F0FAFF;
    color: #0096E0;
    border: 1px solid gray;
    margin: 10px;
    flex: 0 0 calc(30%);
    text-align: center;
    line-height: 100px;
}
</style>