<template>
  <div class="player-container">
    <h1>Canvas 坐标系诊断</h1>
    <canvas ref="canvasRef" id="danmaku-canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const canvasRef = ref(null);

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  
  const logicalWidth = 800;
  const logicalHeight = 450;
  const dpr = window.devicePixelRatio || 1;
  
  // 1. 设置物理分辨率 (Backing Store)
  canvas.width = logicalWidth * dpr;
  canvas.height = logicalHeight * dpr;

  // 2. 设置 CSS 显示尺寸 (Layout Size)
  // 我们仍然强制使用 !important 来确保它100%生效
  canvas.style.width = logicalWidth + 'px';
  canvas.style.height = logicalHeight + 'px';

  const ctx = canvas.getContext('2d');

  // --- 诊断日志 ---
  console.clear(); // 清空控制台，方便查看
  console.log(`设备像素比 (DPR): ${dpr}`);
  console.log(`Canvas物理宽度 (canvas.width): ${canvas.width}`);
  console.log(`Canvas物理高度 (canvas.height): ${canvas.height}`);
  const computedStyle = window.getComputedStyle(canvas);
  console.log(`CSS计算宽度 (computed width): ${computedStyle.width}`);
  console.log(`CSS计算高度 (computed height): ${computedStyle.height}`);

  // --- 可视化测试 ---
  
  // 关键：应用缩放，告诉上下文我们要用逻辑坐标系来工作
  ctx.scale(dpr, dpr);
  
  // 测试1: 在逻辑坐标 (0,0) 处画一个 50x50 的红色方块
  ctx.fillStyle = 'red';
  ctx.fillRect(0, 0, 50, 50); 
  console.log('在逻辑坐标 (0,0) 绘制了一个红色方块');
  
  // 测试2: 在逻辑坐标右下角画一个 50x50 的蓝色方块
  // 坐标应该是 (800-50, 450-50)
  ctx.fillStyle = 'blue';
  ctx.fillRect(logicalWidth - 50, logicalHeight - 50, 50, 50);
  console.log(`在逻辑坐标 (${logicalWidth - 50}, ${logicalHeight - 50}) 绘制了一个蓝色方块`);

  // 测试3: 画一条从左上角到右下角的绿色对角线
  ctx.strokeStyle = 'lime';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(logicalWidth, logicalHeight);
  ctx.stroke();
  console.log(`绘制了一条从 (0,0) 到 (${logicalWidth}, ${logicalHeight}) 的绿色对角线`);
});

</script>

<style scoped>
#danmaku-canvas {
  width: 800px !important;
  height: 450px !important;
  border: 2px solid gold;
}
</style>