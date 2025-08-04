<template>
  <div class="player-container">
    <h1>我的 Vue Canvas 播放器</h1>
    
    <div class="video-container">
        <!-- 1. 使用 ref 属性来获取 DOM 元素的引用 -->
        <canvas ref="canvasRef" width="500" height="281.25"></canvas>
        
        <!-- 视频源，我们同样将其隐藏 -->
        <video 
          ref="videoRef" 
          src="../assets/30887511727-1-192.mp4" 
          controls 
          style="width: 500px;height: 281.25px;"
          @play="onVideoPlay"
        ></video>
    </div>
    
    <div class="controls">
      <!-- 2. 使用 v-model 双向绑定输入框的值 -->
      <input type="text" v-model="danmuText" placeholder="输入弹幕内容" @keyup.enter="sendDanmu">
    </div>

  </div>
</template>

<script setup lang="ts">
import {onMounted, onUnmounted, ref, useTemplateRef} from 'vue';
import { Danmu } from '../type/danmu';
const canvasRef = useTemplateRef('canvasRef');
const videoRef = useTemplateRef('videoRef');
const danmuText = ref('');
const danmus = ref<Danmu[]>([]);

let ctx = null as CanvasRenderingContext2D | null;
let animationId = ref<number | null>(null);


function onVideoPlay(){
  draw();
}

function sendDanmu(){
  const text = danmuText.value.trim();
  if(text === '') return;

  const canvas = canvasRef.value as HTMLCanvasElement;
  const tempDanmu = new Danmu(
    text,
    500,
    Math.random() * (281.25 - 30) + 20, // 随机高度，避免弹幕超出画布
    getRandomColor(),
    Math.random() * 2 + 1, // 随机速度
  );
  danmus.value.push(tempDanmu);
  danmuText.value = '';
}

// 辅助函数：生成随机颜色
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};


function draw(){
  const canvas = canvasRef.value as HTMLCanvasElement;
  const video = videoRef.value as HTMLVideoElement;
  if(!ctx || !video) return;

  if(video.paused || video.ended) {
    if(animationId.value) {
      cancelAnimationFrame(animationId.value);
    }
    return;
  }

  ctx.drawImage(video, 0, 0, 500, 281.25);
  // let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  // for (let i = 0; i < imageData.data.length; i += 4) {
  //   // 将图像数据转换为灰度
  //   const avg = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
  //   imageData.data[i] = avg;     // R
  //   imageData.data[i + 1] = avg; // G
  //   imageData.data[i + 2] = avg; // B
  // }
  // ctx.putImageData(imageData, 0, 0);

  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawDanmus();

  animationId.value = requestAnimationFrame(draw);
}

function drawDanmus() {
  let remainDanmus = [];
  for (const d of danmus.value){
    d.update();
    const textWidth = ctx!.measureText(d.text).width;
    console.log(ctx!.measureText(d.text))
    ctx!.fillStyle = "yellow";
    ctx!.globalAlpha = 0.5;
    ctx?.fillRect(d.x, d.y-20, textWidth+20, 22);
    ctx!.globalAlpha = 1;
    d.draw(ctx!);

    if (d.x + textWidth > 0) {
      remainDanmus.push(d);
    }
  }
  danmus.value = remainDanmus;
}

onMounted(()=>{
  const canvas = canvasRef.value as HTMLCanvasElement;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = 500 * dpr;
  canvas.height = 281.25 * dpr;
  canvas.style.width = "500px";
  canvas.style.height = "281.25px";
  ctx = canvas.getContext('2d');
  ctx!.scale(dpr, dpr);

  const coverImage = new Image();
  coverImage.src = "../src/assets/cover.jpg";
  coverImage.onload = () => {
    ctx!.drawImage(coverImage, 0, 0, 500, 281.25);
    ctx!.fillStyle = 'white';
    ctx!.font = '20px Arial';
    const titleWidth = ctx!.measureText('视频加载中......').width;
    ctx!.fillText('视频加载中......', (500-titleWidth)/2, 281.25/2);
  }
  coverImage.onerror = (error) => {
    console.error('图片加载失败：', error);
  };
})

onUnmounted(()=>{
  if(animationId.value) {
    cancelAnimationFrame(animationId.value);
  }
})

</script>

<style scoped>
/* canvas {
  position: absolute;
} */

.video-container {
  display: flex;
}

</style>

