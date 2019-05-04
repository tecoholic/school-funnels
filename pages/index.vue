<template>
  <section class="container mx-auto">
    <div class="flex mt-8">
      <div class="w-full">
        <h1 class="sans-serif text-2xl text-grey-darker">
          Data Funnel of Secondary and Senior Secondary Schools
        </h1>
        <p class="mt-6">
          <strong>Source: </strong>
          <a
            href="http://rmsaindia.gov.in/en/component/rmsastates/?view=rmsastates&Itemid=130&id=india"
          >
            The Rashtriya Madhyamik Shiksha Abhiyan program website
          </a>
        </p>
      </div>
    </div>
    <div class="flex pt-12 content-center">
      <div class="w-1/2 px-8 content-center">
        <label for="states" class="sf-label text-right pr-12">
          Choose a State
        </label>
      </div>
      <div class="w-1/3 relative">
        <select
          id="states"
          v-model="currentState"
          name="states"
          class="sf-select"
        >
          <option v-for="state in dataset.states" :key="state" :value="state">{{
            state
          }}</option>
        </select>
        <div
          class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker"
        >
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="flex pt-8">
      <div class="w-full text-center sf-card">
        <vue-funnel-graph
          :width="width"
          :height="height"
          :labels="labels"
          :values="values"
          :colors="colors"
          :sub-labels="subLabels"
          :direction="direction"
          :gradient-direction="gradientDirection"
          :animated="true"
          :display-percentage="false"
        ></vue-funnel-graph>
      </div>
    </div>
  </section>
</template>

<script>
import { VueFunnelGraph } from 'vue-funnel-graph-js'
import dataset from '~/static/data.json'

export default {
  components: {
    VueFunnelGraph
  },
  data() {
    return {
      dataset: dataset,
      currentState: 'Tamil Nadu',
      labels: ['Secondary', 'Senior Secondary'],
      subLabels: ['Government', 'Aided', 'Private'],
      /*
      values: [
        // with the given Labels and SubLabels here's what the values represent:
        // Govt, Aided, Private
        //    v      v     v
        [6362, 1802, 4118],
        [6362, 1799, 4130]
      ],
      */
      colors: [
        ['#FFB178', '#FF3C8E'], // color set for "Impressions" segment
        ['#A0BBFF', '#EC77FF'], // color set for "Add To Cart" segment
        ['#A0F9FF', '#7795FF'] // color set for "Buy" segment
      ],
      direction: 'horizontal',
      gradientDirection: 'horizontal',
      height: 400,
      width: 800
    }
  },
  computed: {
    values: function() {
      return dataset[this.currentState]
        ? dataset[this.currentState]
        : [[0, 0, 0], [0, 0, 0]]
    }
  }
}
</script>

<style>
.sf-card {
  @apply bg-indigo-darker p-12 rounded-lg shadow-lg;
}
.sf-select {
  @apply block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight;
  :focus {
    @apply outline-none bg-white border-grey;
  }
}
.sf-label {
  @apply block uppercase tracking-wide text-grey-darker py-3 px-4 font-bold;
}
</style>
