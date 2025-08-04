<template>
  <div class="json-viewer-wrapper">
    <!-- 3. 直接在模板中使用 vue-json-pretty 组件 -->
    <!-- 将父组件传来的 data prop 绑定到 vue-json-pretty 的 :data 上 -->
    <vue-json-pretty
      :data="props.data"
      :show-line="true"
      :show-double-quotes="true"
      :deep="2"
      editable
      show-icon
    >
      <template #renderNodeKey="{ node }">
          <template v-if="showKeys.includes(node.key)">
            <span class="json-value">{{ node.key }}</span>
          </template>
      </template>
      <template #renderNodeValue="{ node, defaultValue }">
          <template v-if="showKeys.includes(node.key)">
            <span class="json-value">{{ defaultValue }}</span>
          </template>
      </template>
    </vue-json-pretty>

  </div>
</template>

<script setup>
// 1. 引入 vue-json-pretty 组件本身和它的样式
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';

// 2. 使用 defineProps 来定义一个名为 data 的 prop
//    这样，父组件就可以通过这个 prop 将JSON数据传递进来
const props = defineProps({
  data: {
    type: Object, // 或者 Array, 根据你的数据类型
    required: true,
  }
});

const showKeys= ["transcript","punc","speaker_id"]

function formatter(data, key, path, defaultFormat) {
    if (Array.isArray(data) && data.length > 3) {
      const preview = data.slice(0, 3).map(x => JSON.stringify(x)).join(',')
      return `[${preview}, ...]`;
    }
    return defaultFormat;
  }
</script>

<style scoped>
.json-viewer-wrapper {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  background-color: #fdfdfd;
  text-align: left; /* 确保内容左对齐 */
}
</style>