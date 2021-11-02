<template>
  <div>
    <div class="container">
      <div id="map" />
      <div class="toolbox">
        <input type="file" accept=".gpx" @change="onGpx" />
      </div>
    </div>
  </div>
</template>

<script lang="js">
import GpxParser from 'gpxparser';

export default {
  name: 'RouteBook',
  data() {
    return {
      map: null,
    };
  },
  components: {},
  mounted() {
    console.log(AMap);
    const map = new AMap.Map('map', { mapStyle: 'amap://styles/macaron' });
    this.map = map;
  },
  methods: {
    async onGpx(e) {
      const file = e.target.files[0];
      const gpx = await file.text();
      const parser = new GpxParser();
      parser.parse(gpx);
      const geoJSON = parser.toGeoJSON();

      const geojson = new AMap.GeoJSON({
        geoJSON,
        // 还可以自定义getMarker和getPolyline
        getPolygon: (_, lnglats) => {
          const area = AMap.GeometryUtil.ringArea(lnglats[0])

          return new AMap.Polygon({
            path: lnglats,
            fillOpacity: 1 - Math.sqrt(area / 8000000000), // 面积越大透明度越高
            strokeColor: 'white',
            fillColor: 'red',
          });
        },
      });

      this.map.add(geojson);
    },
  },
};
</script>

<style lang="less" scoped>
@toolboxWidth: 240px;

.container {
  display: flex;

  .toolbox {
    background-color: cornsilk;
    width: @toolboxWidth;
  }

  #map {
    width: calc(100vw - @toolboxWidth);
    height: 100vh;
  }
}
</style>
