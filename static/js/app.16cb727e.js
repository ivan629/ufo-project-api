(function(e){function t(t){for(var n,i,s=t[0],c=t[1],l=t[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0c5c":function(e,t,r){"use strict";var n=r("5118"),a=r.n(n);a.a},"0d79":function(e,t,r){},"0e5b":function(e,t,r){},2119:function(e,t,r){"use strict";var n=r("0e5b"),a=r.n(n);a.a},"225a":function(e,t,r){},5118:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("2f62"),o=r("98c9"),i=r("f309");r("d1e78");n["a"].use(i["a"]);var s=new i["a"]({icons:{iconfont:"mdi"}}),c=r("ea7f"),l=r.n(c),u=r("4452"),p=r.n(u),d=r("37d8"),b=r.n(d),f=r("dfa1"),h=r("755e"),g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("AppAnimatedBackground"),r("RootContainer")],1)},m=[],y=(r("a4d3"),r("4de4"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"rootContainer"},[r("div",{staticClass:"center"},[r("Header"),e.isGlobeMode?r("GlobeContainer"):r("UfoChartsStatistic")],1),r("v-overlay",{attrs:{value:e.isLoading}},[r("orbit-spinner",{attrs:{"animation-duration":1200,size:80,color:e.variables.green}})],1)],1)},O=[],C=r("2ef0"),j=r("4583"),w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"headerContainer"},[r("div",{staticClass:"headerNavContainer"},e._l(e.modes,(function(t){return r("v-btn",{key:t,staticClass:"ma-2 headerNavButton",class:{active:t===e.activeMode},attrs:{outlined:""},on:{click:function(r){return e.changeActiveMode(t)}}},[e._v(" "+e._s(t)+" ")])})),1)])},S=[];function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){Object(y["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D=Object(a["a"])("commonModule"),A=D.mapState,T=D.mapActions,R={computed:E({},A(["modes","activeMode"])),methods:E({},T({changeActiveMode:"changeActiveMode"}))},P=R,k=(r("92d1"),r("2877")),x=r("6544"),M=r.n(x),G=r("8336"),L=Object(k["a"])(P,w,S,!1,null,"26b6449e",null),B=L.exports;M()(L,{VBtn:G["a"]});var N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"chartPageContainer"},[r("div",{staticClass:"chartsControls"},[r("div",{staticClass:"sliderContainer"},[r("v-range-slider",{staticClass:"slider",attrs:{"thumb-label":"always","thumb-size":28,min:e.yearsRange.start,max:e.yearsRange.stop},model:{value:e.chartYearsRangeSlider,callback:function(t){e.chartYearsRangeSlider=t},expression:"chartYearsRangeSlider"}}),r("v-select",{staticClass:"countrySelect",attrs:{outlined:"",dark:"",items:e.countries,"menu-props":"auto",filled:"",dense:"","item-value":"value",label:"Country","single-line":""},model:{value:e.selectedCountry,callback:function(t){e.selectedCountry=t},expression:"selectedCountry"}}),r("v-btn",{staticClass:"ma-2 updateChartsButton",attrs:{outlined:""},on:{click:e.updateCharts}},[e._v(" apply filter ")])],1)]),r("div",{staticClass:"chartsContainer"},[r("StockChart"),r("div",{staticClass:"pieChartsContainer"},e._l(e.pieFormattedChartsData,(function(e){return r("PieChart",{key:e.chartName,attrs:{pieChartData:e,chartName:e.chartName}})})),1)],1)])},F=[],V=(r("b0c0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"stockChartContainer"},[r("div",{staticClass:"chartContainer",attrs:{id:"stockChartContainer"}}),r("div",{staticClass:"bottomGroupControls"},[r("v-btn",{staticClass:"bottomGroupToggleChartType",attrs:{outlined:""},on:{click:function(t){return e.toggleChartType()}}},[e._v(" "+e._s(e.isAreaCurrentChartType?"Switch to Column view":"Switch to Area view")+" ")]),r("div",{staticClass:"chartTypesOfGroupingControls"},e._l(e.groupChartTypes,(function(t){return r("v-btn",{key:t,staticClass:"bottomGroupControlsButton",class:{active:t===e.activeChartType},attrs:{outlined:""},on:{click:function(r){return e.changeActiveChartType(t)}}},[e._v(" "+e._s(t)+" ")])})),1),r("v-btn",{staticClass:"resetZomButton",attrs:{outlined:""},on:{click:function(t){return e.resetZomButton()}}},[e._v(" reset zoom ")])],1)])}),I=[],U=function(e){return e.theme={colors:["#2b908f","#90ee7e","#f45b5b","#7798BF","#aaeeee","#ff0066","#eeaaee","#55BF3B","#DF5353","#7798BF","#aaeeee"],chart:{backgroundColor:{linearGradient:{x1:0,y1:0,x2:1,y2:1},stops:[[0,"#2a2a2b"],[1,"#3e3e40"]]},style:{fontFamily:"'Unica One', sans-serif"},plotBorderColor:"#606063"},title:{style:{color:"#E0E0E3",textTransform:"uppercase",fontSize:"20px"}},subtitle:{style:{color:"#E0E0E3",textTransform:"uppercase"}},xAxis:{gridLineColor:"#707073",labels:{style:{color:"#E0E0E3"}},lineColor:"#707073",minorGridLineColor:"#505053",tickColor:"#707073",title:{style:{color:"#A0A0A3"}}},yAxis:{gridLineColor:"#707073",labels:{style:{color:"#E0E0E3"}},lineColor:"#707073",minorGridLineColor:"#505053",tickColor:"#707073",tickWidth:1,title:{style:{color:"#A0A0A3"}}},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.85)",style:{color:"#F0F0F0"}},plotOptions:{series:{dataLabels:{color:"#F0F0F3",style:{fontSize:"13px"}},marker:{lineColor:"#333"}},boxplot:{fillColor:"#505053"},candlestick:{lineColor:"white"},errorbar:{color:"white"}},legend:{backgroundColor:"rgba(0, 0, 0, 0.5)",itemStyle:{color:"#E0E0E3"},itemHoverStyle:{color:"#FFF"},itemHiddenStyle:{color:"#606063"},title:{style:{color:"#C0C0C0"}}},credits:{style:{color:"#666"}},labels:{style:{color:"#707073"}},drilldown:{activeAxisLabelStyle:{color:"#F0F0F3"},activeDataLabelStyle:{color:"#F0F0F3"}},navigation:{buttonOptions:{symbolStroke:"#DDDDDD",theme:{fill:"#505053"}}},rangeSelector:{buttonTheme:{fill:"#505053",stroke:"#000000",style:{color:"#CCC"},states:{hover:{fill:"#707073",stroke:"#000000",style:{color:"white"}},select:{fill:"#000003",stroke:"#000000",style:{color:"white"}}}},inputBoxBorderColor:"#505053",inputStyle:{backgroundColor:"#333",color:"silver"},labelStyle:{color:"silver"}},navigator:{handles:{backgroundColor:"#666",borderColor:"#AAA"},outlineColor:"#CCC",maskFill:"rgba(255,255,255,0.1)",series:{color:"#7798BF",lineColor:"#A6C7ED"},xAxis:{gridLineColor:"#505053"}},scrollbar:{barBackgroundColor:"#808083",barBorderColor:"#808083",buttonArrowColor:"#CCC",buttonBackgroundColor:"#606063",buttonBorderColor:"#606063",rifleColor:"#FFF",trackBackgroundColor:"#404043",trackBorderColor:"#404043"}}};function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){Object(y["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var H=Object(a["a"])("statisticModule"),$=H.mapActions,W=H.mapState;l.a.theme=U(l.a),l.a.setOptions(l.a.theme);var q=["day","month","year"],J={AREA:"area",COLUMN:"column"},X={data:function(){return{isAreaCurrentChartType:!0,groupChartTypes:null,activeChartType:null}},computed:z({},W(["stockChartData","pieChartsData"])),watch:{activeChartType:function(){this.redraw()},isAreaCurrentChartType:function(){this.redraw()},stockChartData:function(){this.redraw()}},created:function(){this.groupChartTypes=q,this.activeChartType=q[1]},mounted:function(){var e={chart:{type:"area",zoomType:"x",renderTo:"stockChartContainer",resetZoomButton:{theme:{display:"none"}}},title:{text:"Ufo frequency chart"},xAxis:{type:"datetime"},yAxis:{title:{text:"Ufo amount"}},legend:{enabled:!1},series:[{name:"UFO amount",type:"area",data:[],color:"#6fcd98"}],plotOptions:{area:{fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,l.a.getOptions().colors[0]],[1,l.a.Color(l.a.getOptions().colors[0]).setOpacity(0).get("rgba")]]},marker:{radius:2,enabled:!1},lineWidth:1,states:{hover:{lineWidth:1}},threshold:null}}};this.chart=new l.a.StockChart(e)},methods:z({},$({updateCharts:"updateCharts"}),{redraw:function(){this.chart.series[0].update({data:this.getGroupedUfoItems("ufo_data"),type:this.isAreaCurrentChartType?J.AREA:J.COLUMN})},getGroupedUfoItems:function(e){if(!Object(C["isNil"])(this.activeChartType)&&!Object(C["isNil"])(this.stockChartData))return Object(C["map"])(this.stockChartData[this.activeChartType][e],(function(e){var t=e.milliseconds_date,r=e.value;return[t,r]}))},changeActiveChartType:function(e){this.activeChartType=e},toggleChartType:function(){this.isAreaCurrentChartType=!this.isAreaCurrentChartType},resetZomButton:function(){this.chart.zoomOut()}})},Z=X,K=(r("6d43"),Object(k["a"])(Z,V,I,!1,null,"35c265a0",null)),Q=K.exports;M()(K,{VBtn:G["a"]});var ee=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pieChartContainer",attrs:{id:e.chartName}})},te=[];l.a.theme=U(l.a),l.a.setOptions(l.a.theme);var re={props:{chartName:{type:String,required:!0},pieChartData:{type:Object,required:!0}},watch:{pieChartData:function(){this.initializePieChart()}},mounted:function(){this.initializePieChart()},methods:{initializePieChart:function(){var e={chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie",renderTo:this.chartName},title:{text:"Statistic by ".concat(this.chartName," frequency")},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,format:"<b>{point.name}</b>: {point.percentage:.1f} %"}}},series:[{name:"Brands",colorByPoint:!0,data:this.pieChartData.data}]};this.chart=new l.a.Chart(e)},redraw:function(){Object(C["isNil"])(this.chart.series[0])||this.chart.series[0].setData(this.pieChartData.data)}}},ne=re,ae=(r("eedb"),Object(k["a"])(ne,ee,te,!1,null,"8b513e00",null)),oe=ae.exports;function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function se(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(r),!0).forEach((function(t){Object(y["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ce=Object(a["a"])("statisticModule"),le=ce.mapState,ue=ce.mapActions,pe={1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"},de={components:{PieChart:oe,StockChart:Q},props:{},data:function(){return{activeCountry:null,chartYearsRangeSlider:[1999,2014]}},computed:se({},le(["pieChartDataTypes","pieChartsData","countries","selectedCountry","yearsRange"]),{pieFormattedChartsData:function(){return Object(C["map"])(this.pieChartsData,(function(e,t){return{data:Object(C["map"])(e,(function(e,r){var n=e.name,a=e.value;return{name:"month"===t?pe[r]:n,y:a}})),chartName:t}}))},selectedCountry:{get:function(){return this.$store.state.statisticModule.selectedCountry},set:function(e){this.changeSelectedCountry(e)}}}),watch:{chartYearsRangeSlider:function(){this.setChartYearsRangeSlider(this.chartYearsRangeSlider)}},created:function(){Object(C["isNil"])(this.pieChartsData)&&this.updateCharts()},methods:se({},ue({updateCharts:"updateCharts",changeSelectedCountry:"changeSelectedCountry",setChartYearsRangeSlider:"setChartYearsRangeSlider"}))},be=de,fe=(r("2119"),r("5963")),he=r("b974"),ge=Object(k["a"])(be,N,F,!1,null,"38926486",null),me=ge.exports;M()(ge,{VBtn:G["a"],VRangeSlider:fe["a"],VSelect:he["a"]});var ye=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"globeContainer"},["globe"===e.activeGlobeView?r("Globe",{attrs:{globeMarkersToDisplay:e.globeMarkersToDisplay}}):e._e(),"map"===e.activeGlobeView?r("Map",{attrs:{markersToDisplay:e.globeMarkersToDisplay}}):e._e(),r("v-navigation-drawer",{staticClass:"controlsPanel",attrs:{"hide-overlay":"",width:"25%",app:"",right:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("div",{staticClass:"controlsPanelContent"},[r("v-btn",{staticClass:"closeControlPaneButton",attrs:{outlined:""},on:{click:function(t){e.drawer=!e.drawer}}},[r("i",{staticClass:"material-icons closeControlPanelIcon"},[e._v(" arrow_forward_ios ")])]),r("GlobeControls")],1)]),e.drawer?e._e():r("v-icon",{staticClass:"toggleControlIcon",on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}},[e._v(" mdi-dialpad ")])],1)},ve=[],Oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mapContainer"},[r("GmapMap",{staticClass:"map",attrs:{center:{lat:48.1750554,lng:1.4843474},zoom:4,options:{streetViewControl:!1},"map-type-id":"terrain"}},e._l(e.markersToDisplay,(function(t){return r("GmapMarker",{key:t.location+Math.random(),attrs:{position:e.getPosition(t)}})})),1)],1)},Ce=[];function je(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function we(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?je(Object(r),!0).forEach((function(t){Object(y["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):je(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Se=Object(a["a"])("globeModule"),_e=Se.mapState,Ee={props:{markersToDisplay:{type:Object,required:!0}},computed:we({},_e(["globeMarkersToDisplay"])),methods:{getPosition:function(e){var t=e.longitude,r=e.latitude;return{lat:Object(C["toNumber"])(r),lng:Object(C["toNumber"])(t)}}}},De=Ee,Ae=(r("0c5c"),Object(k["a"])(De,Oe,Ce,!1,null,"c5664474",null)),Te=Ae.exports,Re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"earth_globe"}})},Pe=[],ke=r("cb99");function xe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Me(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?xe(Object(r),!0).forEach((function(t){Object(y["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):xe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ge=Object(a["a"])("globeModule"),Le=Ge.mapActions,Be=Object(a["a"])("commonModule"),Ne=Be.mapState,Fe=1e4,Ve={props:{globeMarkersToDisplay:{type:Object,required:!1,default:function(){return[]}}},computed:Me({},Ne(["activeMode"])),watch:{globeMarkersToDisplay:function(){this.initializeGlobe()}},mounted:function(){Object(C["isNil"])(this.globeMarkersToDisplay)||this.initializeGlobe()},methods:Me({},Le({toggleLoading:"toggleLoading"}),{initializeGlobe:function(){var e=Object(C["map"])(this.globeMarkersToDisplay,(function(e){var t=e.longitude,r=e.latitude,n=e.size;return{lat:r,lng:t,size:n/Fe,color:["red","white","blue","green"][Math.round(3*Math.random())]}})),t=Object(ke["a"])()(document.getElementById("earth_globe")).globeImageUrl("//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg").pointsData(e).backgroundColor("rgba(0, 0, 0, 0)").pointAltitude("size").pointColor("color");t.controls().autoRotate=!0,t.controls().autoRotateSpeed=.2}})},Ie=Ve,Ue=Object(k["a"])(Ie,Re,Pe,!1,null,null,null),Ye=Ue.exports,ze=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"controlsContainer"},[r("div",{staticClass:"filterControlsContainer"},[r("div",{staticClass:"groupControlContainer"},[r("span",{staticClass:"controlTitle"},[e._v("Grouped by")]),r("v-select",{staticClass:"groupControl",attrs:{outlined:"",dark:"",items:e.regions,"menu-props":"auto",filled:"",dense:"","item-value":"value",label:"Grouped by","single-line":""},model:{value:e.groupedByRegionId,callback:function(t){e.groupedByRegionId=t},expression:"groupedByRegionId"}})],1),r("div",{staticClass:"control"},[r("span",{staticClass:"controlTitle"},[e._v("Year")]),r("v-range-slider",{attrs:{"thumb-label":"always","thumb-size":28,min:e.yearsRange.start,max:e.yearsRange.stop},model:{value:e.yearsRangeSlider,callback:function(t){e.yearsRangeSlider=t},expression:"yearsRangeSlider"}})],1),r("div",{staticClass:"control"},[r("span",{staticClass:"controlTitle"},[e._v("Month")]),r("v-range-slider",{attrs:{"thumb-label":"always","thumb-size":24,min:e.monthsMinMax.min,max:e.monthsMinMax.max},model:{value:e.monthsRangeSlider,callback:function(t){e.monthsRangeSlider=t},expression:"monthsRangeSlider"}})],1),r("div",{staticClass:"control"},[r("span",{staticClass:"controlTitle"},[e._v("Day")]),r("v-range-slider",{attrs:{"thumb-label":"always","thumb-size":24,min:e.daysMinMax.min,max:e.daysMinMax.max},model:{value:e.daysRangeSlider,callback:function(t){e.daysRangeSlider=t},expression:"daysRangeSlider"}})],1),r("div",{staticClass:"control"},[r("v-btn",{staticClass:"applyFilterButton",attrs:{outlined:""},on:{click:e.applyFilter}},[e._v(" apply filter ")])],1),r("ToggleGlobeControls")],1)])},He=[],$e=(r("96cf"),r("1da1")),We=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"toggleGlobeControlsContainer"},e._l(e.globeViews,(function(t){return r("v-btn",{key:t,staticClass:"ma-2 toggleGlobeViewButton",class:{active:t===e.activeGlobeView},attrs:{outlined:""},on:{click:function(r){return e.changeActiveGlobeView(t)}}},[e._v(" "+e._s(t)+" ")])})),1)},qe=[];function Je(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Xe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Je(Object(r),!0).forEach((function(t){Object(y["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Je(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ze=Object(a["a"])("globeModule"),Ke=Ze.mapActions,Qe=Ze.mapState,et={computed:Xe({},Qe(["activeGlobeView","globeViews"])),methods:Xe({},Ke({changeActiveGlobeView:"changeActiveGlobeView"}))},tt=et,rt=(r("6aca"),Object(k["a"])(tt,We,qe,!1,null,"26e05cf6",null)),nt=rt.exports;function at(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ot(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?at(Object(r),!0).forEach((function(t){Object(y["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):at(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}M()(rt,{VBtn:G["a"]});var it=Object(a["a"])("globeModule"),st=it.mapActions,ct=it.mapState,lt={min:2012,max:2014},ut={min:1,max:12},pt={min:1,max:31},dt=[{text:"Not grouped",value:"0"},{text:"City",value:"1"},{text:"State/province",value:"2"},{text:"Country",value:"3"}],bt={components:{ToggleGlobeControls:nt},data:function(){return{regions:dt,groupedByRegionId:null,yearsRangeSlider:null,monthsRangeSlider:null,daysRangeSlider:null,monthsMinMax:{min:null,max:null},daysMinMax:{min:null,max:null}}},computed:ot({},ct(["yearsRange","globeMarkersToDisplay"])),created:function(){this.groupedByRegionId=dt[3].value;var e=lt.min,t=lt.max,r=ut.min,n=ut.max,a=pt.min,o=pt.max;this.yearsRangeSlider=[e,t],this.monthsRangeSlider=[r,n],this.daysRangeSlider=[a,o],this.monthsMinMax={min:r,max:n},this.daysMinMax={min:a,max:o},Object(C["isNil"])(this.globeMarkersToDisplay)&&this.applyFilter()},methods:ot({},st({setGlobeData:"setGlobeData"}),{applyFilter:function(){var e=Object($e["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this.yearsRangeSlider,r=this.monthsRangeSlider,n=this.daysRangeSlider,a=this.groupedByRegionId,this.setGlobeData({yearsRangeSlider:t,monthsRangeSlider:r,daysRangeSlider:n,groupedByRegionId:a});case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()})},ft=bt,ht=(r("9ec2"),Object(k["a"])(ft,ze,He,!1,null,"3f997b47",null)),gt=ht.exports;function mt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function yt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?mt(Object(r),!0).forEach((function(t){Object(y["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):mt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}M()(ht,{VBtn:G["a"],VRangeSlider:fe["a"],VSelect:he["a"]});var vt=Object(a["a"])("globeModule"),Ot=vt.mapActions,Ct=vt.mapState,jt={components:{Map:Te,Globe:Ye,GlobeControls:gt},data:function(){return{drawer:!1}},computed:yt({},Ct(["globeMarkersToDisplay","activeGlobeView"]),{isControlsPaneOpened:function(){return this.drawer}}),methods:yt({},Ot({toggleLoading:"toggleLoading"}))},wt=jt,St=(r("de8c"),r("132d")),_t=r("f774"),Et=Object(k["a"])(wt,ye,ve,!1,null,"139a4482",null),Dt=Et.exports;M()(Et,{VBtn:G["a"],VIcon:St["a"],VNavigationDrawer:_t["a"]});var At=r("d0a6"),Tt=r.n(At);function Rt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Pt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Rt(Object(r),!0).forEach((function(t){Object(y["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Rt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var kt=Object(a["a"])("commonModule"),xt=kt.mapState,Mt=kt.mapGetters,Gt={components:{Header:B,OrbitSpinner:j["a"],GlobeContainer:Dt,UfoChartsStatistic:me},data:function(){return{serverApi:null,variables:Tt.a}},computed:Pt({},xt(["isLoading","activeMode"]),{},Mt(["isGlobeMode"])),created:function(){var e=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_FD_SERVER_URL;this.serverApi=Object(C["isNil"])(e)?null:"".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_FD_SERVER_URL)}},Lt=Gt,Bt=(r("cae2"),r("a797")),Nt=Object(k["a"])(Lt,v,O,!1,null,"6d9f34b2",null),Ft=Nt.exports;M()(Nt,{VOverlay:Bt["a"]});var Vt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"appAnimatedBackgroundContainer"},[r("div",{staticClass:"appAnimatedBackground"}),r("vue-particles",{staticClass:"particlesBackground",attrs:{color:"#ffffff","particle-opacity":1,"particles-number":80,"shape-type":"circle","particle-size":1.5,"lines-color":"#07ca68","lines-width":1,"line-linked":!0,"line-opacity":.4,"lines-distance":150,"move-speed":1,"hover-effect":!0,"hover-mode":"grab","click-effect":!0,"click-mode":"repulse"}})],1)},It=[],Ut="appAnimatedBackground",Yt={data:function(){return{lFollowX:0,lFollowY:0,x:0,y:0,friction:.01}},mounted:function(){var e=this;window.addEventListener("mousemove",(function(t){return e.moveBackground(t)}))},destroyed:function(){window.removeEventListener("mousemove",this.moveBackground)},methods:{moveBackground:function(e){var t=Math.max(-100,Math.min(100,window.innerWidth/2-e.clientX)),r=Math.max(-100,Math.min(100,window.innerHeight/2-e.clientY));this.lFollowX=20*t/100,this.lFollowY=10*r/100,this.x+=(this.lFollowX-this.x)*this.friction,this.y+=(this.lFollowY-this.y)*this.friction;var n="translate("+this.x+"px, "+this.y+"px) scale(1.1)",a=document.querySelector(".".concat(Ut));if(Object(C["isNil"])(a))return null;Object(C["assign"])(a.style,{"-webit-transform":n,"-moz-transform":n,transform:n})}}},zt=Yt,Ht=(r("8e9d"),Object(k["a"])(zt,Vt,It,!1,null,"a153b4f4",null)),$t=Ht.exports,Wt=(r("99af"),r("d3b7"),"items"),qt="chart_data",Jt=new n["a"]({data:{toggleLoading:null,serverApi:null},created:function(){var e=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_FD_SERVER_URL;this.serverApi=Object(C["isNil"])(e)?"":"".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_FD_SERVER_URL)},methods:{setToggleLoadingCallback:function(e){this.toggleLoading=e},fetchStatisticChartData:function(){var e=Object($e["a"])(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.fetchHelper("".concat(this.serverApi,"/").concat(qt),{country:n,years_range:{start:t,stop:r}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(t,r,n){return e.apply(this,arguments)}return t}(),fetchGlobeMapData:function(){var e=Object($e["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.fetchHelper("".concat(this.serverApi,"/").concat(Wt),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),fetchHelper:function(){var e=Object($e["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.toggleLoading(),e.next=3,fetch(t,{method:"POST",body:JSON.stringify(r),cache:"no-cache",headers:new Headers({"content-type":"application/json"})});case 3:return n=e.sent,this.toggleLoading(),e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()}}),Xt=Jt;function Zt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Kt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Zt(Object(r),!0).forEach((function(t){Object(y["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Zt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Qt=Object(a["a"])("commonModule"),er=Qt.mapActions,tr={name:"App",components:{RootContainer:Ft,AppAnimatedBackground:$t},data:function(){return{}},created:function(){var e=this;Xt.setToggleLoadingCallback((function(){return e.toggleLoading()}))},methods:Kt({},er({toggleLoading:"toggleLoading"}))},rr=tr,nr=r("7496"),ar=Object(k["a"])(rr,g,m,!1,null,null,null),or=ar.exports;M()(ar,{VApp:nr["a"]});var ir="TOGGLE_LOADING",sr="SET_GLOBE_MARKERS_DATA",cr="CHANGE_ACTIVE_GLOBE_VIEW",lr=["map","globe"],ur={namespaced:!0,state:{isLoading:!1,globeViews:lr,activeGlobeView:lr[1],yearsRange:{start:1929,stop:2014},globeMarkersToDisplay:null},mutations:{SET_GLOBE_MARKERS_DATA:function(e,t){e.globeMarkersToDisplay=t},TOGGLE_LOADING:function(e){e.isLoading=!1},CHANGE_ACTIVE_GLOBE_VIEW:function(e,t){e.activeGlobeView=t}},actions:{setGlobeData:function(){var e=Object($e["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,i,s,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=r.yearsRangeSlider,o=r.monthsRangeSlider,i=r.daysRangeSlider,s=r.groupedByRegionId,n(ir),c={regionType:s,year:{start:a[0],stop:a[1]},month:{start:o[0],stop:o[1]},day:{start:i[0],stop:i[1]}},e.next=6,Xt.fetchGlobeMapData(c);case 6:l=e.sent,n(sr,l);case 8:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),toggleLoading:function(e){var t=e.commit;t(ir)},changeActiveGlobeView:function(e,t){var r=e.commit;r(cr,t)}}},pr="TOGGLE_LOADING",dr="CHANGE_ACTIVE_MODE",br=["globe","chart statistic"],fr={namespaced:!0,state:{isLoading:!1,modes:br,activeMode:br[0]},mutations:{TOGGLE_LOADING:function(e){e.isLoading=!e.isLoading},CHANGE_ACTIVE_MODE:function(e,t){e.activeMode=t}},actions:{toggleLoading:function(e){var t=e.commit;t(pr)},changeActiveMode:function(e,t){var r=e.commit;r(dr,t)}},getters:{isGlobeMode:function(e){return e.activeMode===br[0]}}},hr="SELECTED_COUNTRY_CHANGE",gr="STATISTIC_CHART_DATA_SET",mr="SET_YEARS_RANGE_SLIDER_SET",yr={start:1906,stop:2014},vr=[1999,2014],Or={UFO_STATISTIC_DEFAULT_ACTIVE_YEARS_RANGE:vr,UFO_STATISTIC_DEFAULT_START_STOP_YEARS_RANGE:yr},Cr={namespaced:!0,state:{selectedCountry:null,countries:null,pieChartsData:null,pieChartDataTypes:[],stockChartData:null,yearsRange:Or.UFO_STATISTIC_DEFAULT_START_STOP_YEARS_RANGE,yearsRangeSlider:Or.UFO_STATISTIC_DEFAULT_ACTIVE_YEARS_RANGE},mutations:{STATISTIC_CHART_DATA_SET:function(e,t){e.pieChartsData=t.pie_chart_data,e.stockChartData=t.stock_chart_data,e.yearsRange=t.years_range,e.countries=t.countries_data.countries,e.selectedCountry=t.countries_data.selected_country,e.pieChartDataTypes=Object(C["map"])(t.pie_chart_data,(function(e,t){return t}))},SET_YEARS_RANGE_SLIDER_SET:function(e,t){e.yearsRangeSlider=t},SELECTED_COUNTRY_CHANGE:function(e,t){e.selectedCountry=t}},actions:{updateCharts:function(){var e=Object($e["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,o,i,s,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,n=t.state,a=n.yearsRangeSlider,o=n.selectedCountry,i=a[0],s=a[1],e.next=6,Xt.fetchStatisticChartData(i,s,o);case 6:c=e.sent,r(gr,c);case 8:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),setChartYearsRangeSlider:function(e,t){var r=e.commit;r(mr,t)},changeSelectedCountry:function(e,t){var r=e.commit;r(hr,t)}}};n["a"].use(a["b"]);var jr=new a["b"].Store({modules:{globeModule:ur,commonModule:fr,statisticModule:Cr}}),wr=jr,Sr=r("9224"),_r=Sr.geopoliticalMapOptions;n["a"].use(f["a"]),n["a"].use(h,{load:_r}),n["a"].use(a["b"]),b()(l.a),n["a"].use(o["a"]),n["a"].use(p.a),n["a"].config.productionTip=!1,new n["a"]({store:wr,vuetify:s,VueParticles:o["a"],render:function(e){return e(or)}}).$mount("#app")},5930:function(e,t,r){},"6aca":function(e,t,r){"use strict";var n=r("ba23"),a=r.n(n);a.a},"6d43":function(e,t,r){"use strict";var n=r("7cd4"),a=r.n(n);a.a},"7cd4":function(e,t,r){},"8e9d":function(e,t,r){"use strict";var n=r("5930"),a=r.n(n);a.a},9224:function(e){e.exports=JSON.parse('{"name":"ufo-test-project","version":"0.1.0","private":true,"scripts":{"build":"vue-cli-service build --mode production","lint":"vue-cli-service lint","dev":"vue-cli-service serve"},"dependencies":{"@vue/eslint-config-standard":"^5.1.0","cesium":"^1.65.0","core-js":"^3.4.3","epic-spinners":"^1.1.0","eslint-config-standard":"^14.1.0","eslint-plugin-import":"^2.20.0","eslint-plugin-node":"^11.0.0","eslint-plugin-promise":"^4.2.1","eslint-plugin-standard":"^4.0.1","globe.gl":"^2.7.2","highcharts":"^8.0.0","highcharts-vue":"^1.3.5","include-media":"^1.4.9","lodash":"^4.17.15","moment":"^2.24.0","vue":"^2.6.11","vue-cesium":"^2.0.5","vue-particles":"^1.0.9","vue2-google-maps":"^0.10.7","vuetify":"^2.1.0","vuex":"^3.1.2"},"devDependencies":{"@mdi/font":"^4.7.95","@vue/cli-plugin-babel":"^4.1.0","@vue/cli-plugin-eslint":"^4.1.0","@vue/cli-service":"^4.1.0","babel-eslint":"^10.0.3","copy-webpack-plugin":"^5.1.1","eslint":"^5.16.0","eslint-plugin-vue":"^5.2.3","material-design-icons-iconfont":"^5.0.1","sass":"^1.19.0","sass-loader":"^8.0.0","vue-cli-plugin-vuetify":"^2.0.2","vue-template-compiler":"^2.6.10","vuetify-loader":"^1.3.0"},"eslintConfig":{"root":true,"env":{"node":true},"extends":["plugin:vue/essential","eslint:recommended"],"rules":{},"parserOptions":{"parser":"babel-eslint"}},"browserslist":["> 1%","last 2 versions"],"geopoliticalMapOptions":{"key":"AIzaSyAWQ8iRopFMgVSsyQxxKrnrGxh3YGGR3Qs","region":"EN","language":"en"}}')},"92d1":function(e,t,r){"use strict";var n=r("fde3"),a=r.n(n);a.a},"9ec2":function(e,t,r){"use strict";var n=r("e1be"),a=r.n(n);a.a},ba23:function(e,t,r){},cae2:function(e,t,r){"use strict";var n=r("225a"),a=r.n(n);a.a},d0a6:function(e,t,r){e.exports={green:"#07ca68"}},d39b:function(e,t,r){},de8c:function(e,t,r){"use strict";var n=r("0d79"),a=r.n(n);a.a},e1be:function(e,t,r){},eedb:function(e,t,r){"use strict";var n=r("d39b"),a=r.n(n);a.a},fde3:function(e,t,r){}});
//# sourceMappingURL=app.16cb727e.js.map