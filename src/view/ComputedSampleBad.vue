<template>
  <div :style="{ width: '500px' }">
    <button @click="butnClick">click</button>
    차도 신호등
    <div :style="{ 'background-color': light }">color</div>
    <button @click="addCar">자동차추가</button>
    <p>
      1번라인 <span> {{ carLine1 }}</span>
    </p>
    <p v-for="(item, index) in carLines" :key="index">
      {{ (index+2) }} 번라인 <span>{{ item }}</span>
    </p>
    <div>{{ count }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
      light: 'red',
      carLine1: '',
      carLines: [],
    };
  },
  created() {
    this.setLight();
  },
  methods: {
    butnClick() {
      this.count++;
      this.setLight();
      this.setCarLin1();
      const vm = this;
      const carLines = this.carLines;
      this.carLines = carLines.map(() => {
        const data = vm.setCarLine();
        return data;
      });
    },
    setLight() {
      const mod = this.count % 3;
      if (mod === 0) {
        this.light = 'blue';
      } else if (mod === 1) {
        this.light = 'yellow';
      } else if (mod === 2) {
        this.light = 'red';
      }
    },
    setCarLin1() {
      const mod = this.count % 3;
      if (mod === 0) {
        this.carLine1 = 'go';
      } else {
        this.carLine1 = 'stop';
      }
    },
    setCarLine() {
      const mod = this.count % 3;
      if (mod === 0) {
        return 'go';
      } else {
        return 'stop';
      }
    },
    addCar() {
      this.carLines.push(this.setCarLine());
    },
  },
};
</script>
