<template>
  <div class="about-page">
    <div id="printableArea">
      <h1>{{ title }}</h1>
      <h3>{{ subtitle }}</h3>
      <ul class="subtitles">
        <li v-for="detail in details" :key="detail.id">
          {{detail.name}} : {{detail.value}}
        </li>
      </ul>
      <br>
      <table class="content">
        <td>
          <th>test 1</th>
          <tr>Praesent egestas tristique nibh.</tr>
          <br>
          <th>test 2</th>
          <tr>Praesent egestas tristique nibh.</tr>
          <br>
          <th>test 3</th>
          <tr>
            <ul>
              <li>sentence 1</li>
              <li>sentence 2</li>
            </ul>
          </tr>
        </td>
        <td>
          <th>test</th>
          <tr>Praesent egestas tristique nibh.</tr>
          <br>
          <th>test</th>
          <tr>Praesent egestas tristique nibh. Maecenas nisi.</tr>
          <br>
          <bar-chart
          :data="chartData"
          :options="chartOptions"
          :height="200"
          class="bar-chart"></bar-chart>
          <br>
          <th>test 4</th>
          <tr>
            <ol>
              <li>sentence 1</li>
              <li>sentence 2</li>
            </ol>
          </tr>
        </td>
      </table>
    </div>
    <span v-on:click="printPage" id="printButton">Print</span>
  </div>
</template>

<script>
import VueChartJs from 'vue-chartjs';

export default {
  name: 'About',
  components: {
    'bar-chart': {
      extends: VueChartJs.HorizontalBar,
      props: ['data', 'options'],
      mounted() {
        this.renderChart(this.data, this.options);
      },
    },
  },
  data() {
    return {
      title: 'Title',
      subtitle: 'Sub title',
      details: [
        {
          name: 'name 1',
          value: 'value 1',
        },
        {
          name: 'name 2',
          value: 'value 2',
        },
        {
          name: 'name 3',
          value: 'value 3',
        },
      ],
      chartOptions: {
        scales: {
          yAxes: [{
            gridLines: {
              display: false,
            },
          }],
          xAxes: [{
            gridLines: {
              display: false,
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 10,
            },
          }],
        },
        legend: {
          display: true,
        },
        gridLines: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        title: {
          text: 'test',
          position: 'bottom',
        },
      },
      chartData: {
        labels: ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'],
        datasets: [
          {
            label: 'Completion %',
            backgroundColor: '#f87979',
            data: [3, 6, 5, 8, 4],
          },
        ],
      },
    };
  },
  methods: {
    printPage: function printPage() {
      document.getElementById('printableArea').style.padding = 0;
      document.getElementById('printableArea').style.margin = 0;
      document.getElementById('printableArea').style.boxShadow = 'none';
      document.getElementById('printButton').style.display = 'none';
      window.print();
      document.getElementById('printableArea').style.padding = '20px';
      document.getElementById('printableArea').style.margin = '20px';
      document.getElementById('printableArea').style.boxShadow = '3px 3px 10px -1px rgba(0,0,0,0.75)';
      document.getElementById('printButton').style.display = 'inline-block';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@page { margin: 4px; }
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
div.about-page{
  display: inline-block;
  min-width: 690px;
}
div.about-page h1{
  padding-top: 40px;
  margin: 0px;
}
#printableArea{
  padding: 30px;
  margin: 20px;
  height: 100vw;
  -webkit-box-shadow: 3px 3px 10px -1px rgba(0,0,0,0.75);
  -moz-box-shadow: 3px 3px 10px -1px rgba(0,0,0,0.75);
  box-shadow: 3px 3px 10px -1px rgba(0,0,0,0.75);
}
ul.subtitles{
  border-bottom: 1px solid #000;
  list-style-type: none;
  padding: 0;
}
#printButton{
    background-color: #f87979;
    color: #fff;
    border-radius: 3px;
    padding: 15px 30px;
    margin: 30px auto;
    display: inline-block;
    -webkit-box-shadow: 3px 3px 10px -1px rgba(0,0,0,0.75);
  -moz-box-shadow: 3px 3px 10px -1px rgba(0,0,0,0.75);
  box-shadow: 3px 3px 10px -1px rgba(0,0,0,0.75);
}
ul.subtitles li{
  padding: 10px 30px;
  display: inline-block;
  margin: 0 10px;
}
ul, ol{
  padding-left: 20px;
}
.content{
  text-align: left;
}
.content td{
  width: 50%;
}
.bar-chart{
  width: 300px;
}
</style>
