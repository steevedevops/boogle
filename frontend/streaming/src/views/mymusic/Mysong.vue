<template>
  <div class="mysong">
    <div class="row">
      <h1>this is my song</h1>

      <button @click="playSound()">{{ !isPlaying ? "Play" : "Stop" }}</button>
      <select v-model="types">
        <option value="sine">Sine</option>
        <option value="square">Square</option>
        <option value="sawtooth">Sawtooth</option>
        <option value="triangle">Triangle</option>
      </select>
      <form>
        <label for="freq">Frequency</label>
        <input
          :disabled="isPlaying"
          v-model="frequency"
          type="range"
          name="freq"
          value="440"
          min="0"
          max="8000"
        /><br />
        <input
          :disabled="isPlaying"
          v-model="frequency"
          type="text"
          value="440"
        />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "mysong",
  data() {
    return {
      oscillator: 0,
      isPlaying: false,
      types: "sine",
      frequency: 440
    };
  },
  methods: {
    playSound() {
      var vm = this;
      if (!vm.isPlaying) {
        vm.isPlaying = true;
        var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

        vm.oscillator = audioCtx.createOscillator();
        var gainNode = audioCtx.createGain();

        vm.oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        vm.oscillator.type = vm.types;
        vm.oscillator.frequency.value = vm.frequency;
        vm.oscillator.start();
      } else {
        vm.isPlaying = false;
        vm.oscillator.stop();
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
