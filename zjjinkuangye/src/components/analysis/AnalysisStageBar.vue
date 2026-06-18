<template>
  <div class="chart-card">
    <h3>业务环节关联度分析</h3>
    <div ref="chartRef" class="chart-container"></div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from "vue";
import * as echarts from "echarts";
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});

const chartRef = ref(null);
let chartInstance = null;
let resizeObserver = null;

function renderChart() {
  if (!chartInstance || !props.data.length) return;
  const sortedData = [...props.data].sort((a, b) => a.value - b.value);
  const yData = sortedData.map(item => item.name);
  const xData = sortedData.map(item => item.value);

  const option = {
    backgroundColor: "transparent",
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      backgroundColor: "rgba(20, 20, 20, 0.88)",
      borderColor: "rgba(255, 255, 255, 0.1)",
      borderWidth: 1,
      textStyle: {
        color: "#ffffff",
        fontSize: 12,
        fontFamily: "inherit",
      },
    },
    grid: {
      left: "3%",
      right: "6%",
      bottom: "3%",
      top: "5%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: {
        lineStyle: {
          color: "rgba(255, 255, 255, 0.05)",
        },
      },
      axisLine: {
        color: "rgba(255, 255, 255, 0.46)",
      },
    },
    yAxis: {
      type: "category",
      data: yData,
      axisLine: {
        lineStyle: {
          color: "rgba(255, 255, 255, 0.08)",
        },
      },
      axisTick: { show: false },
      axisLabel: {
        color: "rgba(255, 255, 255, 0.72)",
        fontSize: 11,
      },
    },
    series: [
      {
        name: "文献关联数",
        type: "bar",
        barWidth: "42%",
        data: xData,
        itemStyle: {
          borderRadius: [0, 4, 4, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            { offset: 0, color: "rgba(200, 168, 102, 0.08)" },
            { offset: 1, color: "#c8a866" },
          ]),
        },
      },
    ],
  };
  chartInstance.setOption(option);
}

const initChart = () => {
  if (!chartRef.value) return;
  chartInstance = echarts.init(chartRef.value);
  renderChart();
};

watch(
  () => props.data,
  () => {
    renderChart();
  },
  { deep: true }
);

onMounted(() => {
  initChart();
  if (window.ResizeObserver && chartRef.value) {
    resizeObserver = new ResizeObserver(() => {
      chartInstance?.resize();
    });
    const parent = chartRef.value.parentElement;
    if (parent) resizeObserver.observe(parent);
  }
});

onBeforeUnmount(() => {
  resizeObserver?.disconnect();
  chartInstance?.dispose();
});
</script>

<style scoped>
.chart-card {
  padding: clamp(20px, 3vw, 28px);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.025), rgba(255, 255, 255, 0.005)),
              rgba(16, 16, 16, 0.48);
  backdrop-filter: blur(14px);
  box-shadow: var(--shadow-deep);
  display: flex;
  flex-direction: column;
  height: 380px;
}

h3 {
  font-size: 15px;
  font-weight: 900;
  margin: 0 0 16px;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.05em;
}

.chart-container {
  flex-grow: 1;
  width: 100%;
  height: 100%;
}
</style>