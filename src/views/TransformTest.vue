<template>
    <div class="container">
        <div class="text-container">
            <h1 class="text" :style="transformStyle">{{ testText }}</h1>
        </div>
        <div class="controls">
            <div class="control-item">
                <label>测试文本：</label>
                <input type="text" v-model="testText" />
            </div>
            <div class="control-item">
                <label>变换焦点：</label>
                <select v-model="transformOrigin">
                    <option value="left top">左上</option>
                    <option value="left center">左中</option>
                    <option value="left bottom">左下</option>
                    <option value="center top">中上</option>
                    <option value="center center">正中</option>
                    <option value="center bottom">中下</option>
                    <option value="right top">右上</option>
                    <option value="right center">右中</option>
                    <option value="right bottom">右下</option>
                </select>
            </div>
						<div class="control-item">
                <label>文字大小：</label>
                <input type="text" v-model="fontSize" />
                <span>{{ fontSize }}px</span>
            </div>
            <div class="control-item">
                <label>拉伸程度：</label>
                <input type="text" v-model="perspective" />
                <span>{{ perspective }}px</span>
            </div>
            <div class="control-item">
                <label>Y轴旋转：</label>
                <input type="range" min="-180" max="180" v-model="rotateY" />
                <span>{{ rotateY }}°</span>
            </div>
            <div class="control-item">
                <label>X轴旋转：</label>
                <input type="range" min="-180" max="180" v-model="rotateX" />
                <span>{{ rotateX }}°</span>
            </div>
            <div class="control-item">
                <label>横向缩放：</label>
                <input type="range" min="0.1" max="3" step="0.1" v-model="scaleX" />
                <span>{{ scaleX }}</span>
            </div>
            <div class="control-item">
                <label>纵向缩放：</label>
                <input type="range" min="0.1" max="3" step="0.1" v-model="scaleY" />
                <span>{{ scaleY }}</span>
            </div>
            <div class="control-item">
                <label>横向斜切：</label>
                <input type="range" min="-60" max="60" v-model="skewX" />
                <span>{{ skewX }}°</span>
            </div>
            <div class="control-item">
                <label>纵向斜切：</label>
                <input type="range" min="-60" max="60" v-model="skewY" />
                <span>{{ skewY }}°</span>
            </div>
            <div class="transform-result">
                <p>{{ transformText }}</p>
                <button @click="copyTransformText" class="copy-btn" v-if="transformText !== '默认值'">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <div v-if="copyMessage" class="copy-message" :class="{ 'error': copyError }">
                    {{ copyMessage }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const defaultValues = {
  transformOrigin: 'center center',
  perspective: 400,
  rotateY: 0,
  rotateX: 0,
  scaleX: 1,
  scaleY: 1,
  skewX: 0,
  skewY: 0
}

const perspective = ref(defaultValues.perspective)
const rotateY = ref(defaultValues.rotateY)
const rotateX = ref(defaultValues.rotateX)
const scaleX = ref(defaultValues.scaleX)
const scaleY = ref(defaultValues.scaleY)
const skewX = ref(defaultValues.skewX)
const skewY = ref(defaultValues.skewY)
const transformOrigin = ref(defaultValues.transformOrigin)
const testText = ref('这是一个示范标题')
const fontSize = ref(150) // 默认字体大小

// 复制提示相关状态
const copyMessage = ref('')
const copyError = ref(false)

const transformStyle = computed(() => {
    return `font-size: ${fontSize.value}px; 
		transform-origin: ${transformOrigin.value}; 
		transform: scale(0.33333) perspective(${perspective.value}px) rotateY(${rotateY.value}deg) rotateX(${rotateX.value}deg) scaleX(${scaleX.value}) scaleY(${scaleY.value}) skewX(${skewX.value}deg) skewY(${skewY.value}deg);`
})

const transformText = computed(() => {
  const parts: string[] = []

  parts.push(`变换焦点:${transformOrigin.value}`)

  if (Number(perspective.value) !== defaultValues.perspective) {
    parts.push(`拉伸程度:${perspective.value}px`)
  }
  if (Number(rotateY.value) !== defaultValues.rotateY) {
    parts.push(`Y轴旋转角度:${rotateY.value}deg`)
  }
  if (Number(rotateX.value) !== defaultValues.rotateX) {
    parts.push(`X轴旋转角度:${rotateX.value}deg`)
  }
  if (Number(scaleX.value) !== defaultValues.scaleX) {
    parts.push(`横向缩放:${scaleX.value}`)
  }
  if (Number(scaleY.value) !== defaultValues.scaleY) {
    parts.push(`纵向缩放:${scaleY.value}`)
  }
  if (Number(skewX.value) !== defaultValues.skewX) {
    parts.push(`横向斜切:${skewX.value}deg`)
  }
  if (Number(skewY.value) !== defaultValues.skewY) {
    parts.push(`纵向斜切:${skewY.value}deg`)
  }
  return "-("+parts.join(',')+")"
})

const copyTransformText = async () => {
  try {
    const textToCopy = transformText.value || '默认值'
    await navigator.clipboard.writeText(textToCopy)
    
    copyMessage.value = '复制成功'
    copyError.value = false
    
    setTimeout(() => {
      copyMessage.value = ''
    }, 3000)
    
  } catch (err) {
    // 降级方案：使用 document.execCommand
    try {
      const textArea = document.createElement('textarea')
      textArea.value = transformText.value
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      
      copyMessage.value = '复制成功'
      copyError.value = false
      
      setTimeout(() => {
        copyMessage.value = ''
      }, 3000)
      
    } catch (fallbackErr) {
      copyMessage.value = '复制失败'
      copyError.value = true
      
      setTimeout(() => {
        copyMessage.value = ''
        copyError.value = false
      }, 3000)
    }
  }
}

</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
}

.text {
    font-weight: 600;
    color: #2c3e50;
    margin: 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		font-size: 150px;
    transform: scale(0.3333); /* 640/1920 = 1/3 */
		white-space: nowrap;;

}

.text-container {
    width: 640px;
    height: 360px;
		overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    margin-right: 30px;
    border: 1px solid #e0e6ed;
}

.controls {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    width: 450px;
    background: white;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid #e0e6ed;
}

.control-item {
    display: flex;
    align-items: center;
    gap: 12px;
}

.control-item label {
    font-size: 14px;
    font-weight: 500;
    color: #374151;
    min-width: 80px;
    text-align: right;
}

input[type="text"], input[type="number"], select {
    flex: 1;
    padding: 8px 12px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 14px;
    transition: border-color 0.2s ease;
    background: white;
}

input[type="text"]:focus, input[type="number"]:focus, select:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

input[type="range"] {
    flex: 1;
    height: 4px;
    border-radius: 2px;
    background: #e5e7eb;
    outline: none;
    appearance: none;
    -webkit-appearance: none;
}

input[type="range"]::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #3b82f6;
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

input[type="range"]::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #3b82f6;
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

span {
    color: #6b7280;
    font-size: 13px;
    font-weight: 500;
    min-width: 50px;
    text-align: center;
}

.transform-result {
    margin-top: 8px;
    padding: 12px;
    background: #f8fafc;
    border-radius: 6px;
    border: 1px solid #e2e8f0;
    position: relative;
}

.transform-result p {
    margin: 0;
    font-size: 13px;
    color: #64748b;
    line-height: 1.4;
    padding-right: 35px;
}

.copy-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    background: transparent;
    border: none;
    color: #6b7280;
    cursor: pointer;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
}

.copy-btn:hover {
    background: #e5e7eb;
    color: #374151;
}

.copy-btn:active {
    transform: scale(0.95);
}

.copy-message {
    position: absolute;
    bottom: -35px;
    right: 12px;
    background: #10b981;
    color: white;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 4px;
    animation: fadeInOut 3s ease-in-out;
    pointer-events: none;
}

.copy-message.error {
    background: #ef4444;
}

@keyframes fadeInOut {
    0% {
        opacity: 0;
        transform: translateY(-5px);
    }
    15%, 85% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(-5px);
    }
}

/* 响应式设计 */
@media (max-width: 1024px) {
    .container {
        flex-direction: column;
        gap: 20px;
    }
    
    .text-container {
        margin-right: 0;
    }
    
    
    .control-item {
        flex-direction: column;
        align-items: stretch;
        gap: 6px;
    }
    
    .control-item label {
        text-align: left;
        min-width: auto;
    }
}
</style>