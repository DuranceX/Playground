<template>
    <div class="container">
        <div class="text-container">
            <div class="scale-container">
                <div v-for="(line, index) in textLines" :key="index" v-show="line.text.trim()">
                    <h1 class="text" :style="getTransformStyle(index)">{{ line.text }}</h1>
                </div>
            </div>
        </div>
        <div class="controls">
            <!-- 卡片切换 Radio -->
            <div class="card-selector">
                <label class="radio-label">
                    <input type="radio" value="0" v-model="currentCard" />
                    <span>标题文本1</span>
                </label>
                <label class="radio-label">
                    <input type="radio" value="1" v-model="currentCard" />
                    <span>标题文本2</span>
                </label>
                <label class="radio-label">
                    <input type="radio" value="2" v-model="currentCard" />
                    <span>标题文本3</span>
                </label>
            </div>
            
            <!-- 当前选中卡片的配置项 -->
            <div class="control-item">
                <label>测试文本：</label>
                <input type="text" v-model="currentLine.text" />
            </div>
            <div class="control-item">
                <label>变换焦点：</label>
                <select v-model="currentLine.transformOrigin">
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
                <input type="number" v-model="currentLine.fontSize" min="20" max="300" />
                <span>{{ currentLine.fontSize }}px</span>
            </div>
            <div class="control-item">
                <label>
                    焦点距离
                    <div class="tooltip">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="12" cy="17" r="1" fill="currentColor"/>
                        </svg>
                        <div class="tooltip-content">
                            表示眼睛到焦点的距离：<br>
                            为0px则类似贴着焦点来看，形变程度更大；<br>
                            数字越大表明从越远处来看，形变程度更小；<br>
                            不想设置则填无
                        </div>
                    </div>
                    ：
                </label>
                <input type="text" v-model="currentLine.perspective" />
                <span>{{ currentLine.perspective }}px</span>
            </div>
            <div class="control-item">
                <label>Y轴旋转：</label>
                <input type="range" min="-180" max="180" v-model="currentLine.rotateY" />
                <span>{{ currentLine.rotateY }}°</span>
            </div>
            <div class="control-item">
                <label>X轴旋转：</label>
                <input type="range" min="-180" max="180" v-model="currentLine.rotateX" />
                <span>{{ currentLine.rotateX }}°</span>
            </div>
            <div class="control-item">
                <label>横向缩放：</label>
                <input type="range" min="0.1" max="3" step="0.1" v-model="currentLine.scaleX" />
                <span>{{ currentLine.scaleX }}</span>
            </div>
            <div class="control-item">
                <label>纵向缩放：</label>
                <input type="range" min="0.1" max="3" step="0.1" v-model="currentLine.scaleY" />
                <span>{{ currentLine.scaleY }}</span>
            </div>
            <div class="control-item">
                <label>横向斜切：</label>
                <input type="range" min="-60" max="60" v-model="currentLine.skewX" />
                <span>{{ currentLine.skewX }}°</span>
            </div>
            <div class="control-item">
                <label>纵向斜切：</label>
                <input type="range" min="-60" max="60" v-model="currentLine.skewY" />
                <span>{{ currentLine.skewY }}°</span>
            </div>
            <div class="transform-result">
                <p>{{ currentTransformText }}</p>
                <div class="action-buttons">
                    <button @click="copyTransformText" class="action-btn copy-btn" v-if="currentTransformText" title="复制变换参数">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button @click="pasteTransformText" class="action-btn paste-btn" title="粘贴变换参数">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <rect x="8" y="2" width="8" height="4" rx="1" ry="1" stroke="currentColor" stroke-width="2" fill="none"/>
                        </svg>
                    </button>
                </div>
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
  text: '',
  transformOrigin: 'center center',
  perspective: '无',
  rotateY: 0,
  rotateX: 0,
  scaleX: 1,
  scaleY: 1,
  skewX: 0,
  skewY: 0,
  fontSize: 150
}

// 多行文本配置
const textLines = ref([
  {
    text: '这是一个示范标题',
    transformOrigin: 'center center',
    perspective: '无',
    rotateY: 0,
    rotateX: 0,
    scaleX: 1,
    scaleY: 1,
    skewX: 0,
    skewY: 0,
    fontSize: 150
  },
  {
    text: '第二行文本',
    transformOrigin: 'center center',
    perspective: '无',
    rotateY: 0,
    rotateX: 0,
    scaleX: 1,
    scaleY: 1,
    skewX: 0,
    skewY: 0,
    fontSize: 150
  },
  {
    text: '',
    transformOrigin: 'center center',
    perspective: '无',
    rotateY: 0,
    rotateX: 0,
    scaleX: 1,
    scaleY: 1,
    skewX: 0,
    skewY: 0,
    fontSize: 150
  }
])

// 当前选中的卡片索引
const currentCard = ref(0)

// 当前配置对象
const currentLine = computed(() => textLines.value[currentCard.value])

// 只显示非空的文本行
const visibleLines = computed(() => {
  return textLines.value.filter(line => line.text.trim())
})

// 复制提示相关状态
const copyMessage = ref('')
const copyError = ref(false)

// 获取指定行的变换样式
const getTransformStyle = (lineIndex: number) => {
  const line = textLines.value[lineIndex]
  if (!line) return ''
  
  return `font-size: ${line.fontSize}px; 
    transform-origin: ${line.transformOrigin}; 
    transform: perspective(${line.perspective === '无' ? 'none' : line.perspective + 'px'}) rotateY(${line.rotateY}deg) rotateX(${line.rotateX}deg) scaleX(${line.scaleX}) scaleY(${line.scaleY}) skewX(${line.skewX}deg) skewY(${line.skewY}deg);`
}

// 当前卡片的变换参数文本
const currentTransformText = computed(() => {
  const line = currentLine.value
  const parts: string[] = []

  if (line.transformOrigin !== defaultValues.transformOrigin) {
    parts.push(`变换焦点:${line.transformOrigin}`)
  }

  if (line.perspective !== defaultValues.perspective) {
    parts.push(`焦点距离:${line.perspective}px`)
  }
  
  if (Number(line.rotateY) !== defaultValues.rotateY) {
    parts.push(`Y轴旋转角度:${line.rotateY}deg`)
  }
  if (Number(line.rotateX) !== defaultValues.rotateX) {
    parts.push(`X轴旋转角度:${line.rotateX}deg`)
  }
  if (Number(line.scaleX) !== defaultValues.scaleX) {
    parts.push(`横向缩放:${line.scaleX}`)
  }
  if (Number(line.scaleY) !== defaultValues.scaleY) {
    parts.push(`纵向缩放:${line.scaleY}`)
  }
  if (Number(line.skewX) !== defaultValues.skewX) {
    parts.push(`横向斜切:${line.skewX}deg`)
  }
  if (Number(line.skewY) !== defaultValues.skewY) {
    parts.push(`纵向斜切:${line.skewY}deg`)
  }
  return "-("+parts.join(',')+")"
})

const copyTransformText = async () => {
  try {
    const textToCopy = currentTransformText.value || '默认值'
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
      textArea.value = currentTransformText.value
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

const pasteTransformText = async () => {
  try {
    const clipboardText = await navigator.clipboard.readText()
    parseTransformText(clipboardText)
    
    copyMessage.value = '粘贴成功'
    copyError.value = false
    
    setTimeout(() => {
      copyMessage.value = ''
    }, 3000)
    
  } catch (err) {
    copyMessage.value = '粘贴失败'
    copyError.value = true
    
    setTimeout(() => {
      copyMessage.value = ''
      copyError.value = false
    }, 3000)
  }
}

const parseTransformText = (text: string) => {
  try {
    // 移除开头的 "-(" 和结尾的 ")"
    const cleanText = text.replace(/^-\(/, '').replace(/\)$/, '')
    
    // 按逗号分割参数
    const params = cleanText.split(',')
    
    const line = currentLine.value
    
    params.forEach(param => {
      const [key, value] = param.split(':')
      if (!key || !value) return
      
      const trimmedKey = key.trim()
      const trimmedValue = value.trim()
      
      switch (trimmedKey) {
        case '变换焦点':
          line.transformOrigin = trimmedValue
          break
        case '焦点距离':
          line.perspective = trimmedValue.replace('px', '')
          break
        case 'Y轴旋转角度':
          line.rotateY = Number(trimmedValue.replace('deg', ''))
          break
        case 'X轴旋转角度':
          line.rotateX = Number(trimmedValue.replace('deg', ''))
          break
        case '横向缩放':
          line.scaleX = Number(trimmedValue)
          break
        case '纵向缩放':
          line.scaleY = Number(trimmedValue)
          break
        case '横向斜切':
          line.skewX = Number(trimmedValue.replace('deg', ''))
          break
        case '纵向斜切':
          line.skewY = Number(trimmedValue.replace('deg', ''))
          break
      }
    })
  } catch (err) {
    console.error('解析失败:', err)
    copyMessage.value = '格式错误'
    copyError.value = true
    
    setTimeout(() => {
      copyMessage.value = ''
      copyError.value = false
    }, 3000)
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

.scale-container {
    width: 1920px;
    height: 1080px;
    transform-origin: center center;
    transform: scale(0.33333);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.text-line {
    display: flex;
    align-items: center;
    justify-content: center;
}

.text {
    font-weight: 600;
    color: #2c3e50;
    margin: 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    white-space: nowrap;
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

.card-selector {
    padding: 12px 16px;
    background: #fafbfc;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    margin-bottom: 8px;
    display: flex;
    gap: 16px;
    justify-content: center;
}

.card-selector label {
    font-size: 14px;
    font-weight: 600;
    color: #374151;
}

.radio-group {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.radio-label {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    padding: 6px 12px;
    border-radius: 6px;
    transition: background-color 0.2s ease;
    font-size: 13px;
    color: #6b7280;
    white-space: nowrap;
}

.radio-label:hover {
    background: #e5e7eb;
}

.radio-label input[type="radio"] {
    margin: 0;
    cursor: pointer;
}

.radio-label input[type="radio"]:checked + span {
    color: #3b82f6;
    font-weight: 500;
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
    display: flex;
    align-items: center;
    gap: 4px;
}

.tooltip {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: help;
    color: #6b7280;
    margin: 0 2px;
}

.tooltip:hover {
    color: #374151;
}

.tooltip-content {
    position: absolute;
    bottom: 100%;
    right: 0;
    margin-bottom: 8px;
    padding: 8px 12px;
    background: #1f2937;
    color: white;
    font-size: 12px;
    line-height: 1.4;
    border-radius: 6px;
    white-space: nowrap;
    visibility: hidden;
    opacity: 0;
    transform: translateY(5px);
    transition: all 0.2s ease;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    text-align: start;
}

.tooltip-content::after {
    content: '';
    position: absolute;
    top: 100%;
    right: 16px;
    border: 5px solid transparent;
    border-top-color: #1f2937;
}

.tooltip:hover .tooltip-content {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
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
    padding-right: 70px;
}

.action-buttons {
    position: absolute;
    top: 12px;
    right: 12px;
    display: flex;
    gap: 4px;
}

.action-btn {
    background: transparent;
    border: none;
    color: #6b7280;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
}

.action-btn:hover {
    background: #e5e7eb;
    color: #374151;
}

.action-btn:active {
    transform: scale(0.95);
}

.paste-btn:hover {
    background: #dbeafe;
    color: #2563eb;
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