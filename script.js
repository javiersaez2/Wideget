data = ""
Dato = "2";
datosseparados = "";
nombrecancion = ""
const url = "https://timezone.abstractapi.com/v1/current_time/?api_key=5bcebd1be7a34ff7b57c1d5f3831f5d7&location=Oxford, United Kingdom"

//Funcion llamada de api hora y dia y envio de datos a funcion "tiempo"
const getDataTiempo = async (lat, long) => { //Coge la latitud y longitud de la llamada de la otra api
  console.log(url)
  const res2 = await fetch("https://api.timezonedb.com/v2.1/get-time-zone?key=0PM00EQ5VCX2&format=json&by=position&lat=" + lat + "&lng=" + long)
  datos = await res2.json();
  console.log(datos)
  console.log("b")
  tiempo(datos)

}

//Funcion llamada de api metereologia y envio de datos a funcion "pruebas"
const getData = async (city) => {
  const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&lang=sp&appid=aae97860de78632108ecc73036d6d17c')
  data = await res.json();
  console.log(data)
  console.log("A")
  pruebas(data)
}



window.onload = () => {
  getData("Eibar")
  // getDataTiempo("Eibar");
  addEventListener('change', (event) => {
    inputciudad = document.getElementById("ciudadinput").value;
    console.log(inputciudad);
    getDataTiempo(inputciudad);
    getData(inputciudad)
  });
}

function pruebas(datos) {
  console.log(data.name)
  lat = data.coord.lat
  lon = data.coord.lon
  getDataTiempo(lat, lon) //Envia la latitud y longitud para uso de la segunda api



  document.getElementById("nombre").innerHTML = data.name
  document.getElementById("iconos").setAttribute('src', "Weathericons/" + data.weather[0].icon + '.svg');
  // document.getElementById("icono").innerHTML='<img  src="Weathericons/'+data.weather[0].icon+'.svg"'
  document.getElementById("grados").innerHTML = Math.trunc(data.main.temp)
  // +"°"
  document.getElementById("viento").innerHTML = data.wind.speed + " k/h"
}

function tiempo(datos2) {
  console.log(datos2.formatted)

  datosseparados = "";
  datosseparados = datos2.formatted.split([" "]) //Separamos los datos por espacios

  document.getElementById("hora").innerHTML = datosseparados[1] // Sacamos la hora


  //Funcion hora
  // console.log(Dato + "Numero 1")
  hora = "";
  hora = datosseparados[1].split([":"])
  if (Dato == "1") {
    Dato = "1";
    // alert("Nulo")
    // console.log(Dato + "Numero if")
    clearInterval(refreshId);

  }
  else {
    Dato = "1";
    // console.log(Dato + "Numero else")
    var refreshId = setInterval(function () {
      // refreshId = window.setInterval(1000);
      if (parseInt(hora[2]) == 59) {
        if (hora[1].length == 1) {
          hora[1] = parseInt(hora[1]) + 1;
        }
        else {
          hora[1] = parseInt(hora[1]) + 1;
          hora[2] = "00";
        }
      }
      else {
        // console.log("--")
        // console.log(hora[2].toString().length)
        // console.log(hora[2].toString())
        hora[2] = parseInt(hora[2]) + 1;
        if (parseInt(hora[2]) < 10) {
          hora[2] = hora[2].toString().padStart(2, '0')

        }

      }


      document.getElementById("hora").innerHTML = hora[0] + ":" + hora[1] + ":" + hora[2] // Sacamos la hora
    }, 1000);
  }
}




i = 0
//Cancion reload

function cancionRadio() {
  // $("#cancion22").load(' #cancion22');//actualizas el div
  console.log(i = i + 10);
  // track=document.querySelectorAll('.stations__station__track a');
  console.log(
    document.querySelectorAll('.stations__station__track a')[0]
  )
  var url = "image.php";



  // if (!document.querySelectorAll('.stations__station__track a')[0].getAttribute("href")) {

  // }
  // else {
  var data = { 'cambiocancion': 'no' };
  cancicamb = "si"
  // console.log(data);

  //////////////////////////// -/ FETCH \- ///////////////////////////////////////
  //////////////////////////// -| FETCH |- ///////////////////////////////////////
  //////////////////////////// -\ FETCH /- ///////////////////////////////////////

  fetch(url, {
    method: 'POST', // or 'POST'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: { 'Content-Type': 'application/json' }  // input data
  })
    .then(res => res.json()).then(result => {
      nombrecancion = result.ncancion
      artistacancion = result.acancion
      ncanciontexto = document.getElementsByClassName("ncancion")
      acanciontexto = document.getElementsByClassName("acancion")
      console.log(ncanciontexto.length)
      for (i = 0; i < ncanciontexto.length; i++) {
        ncanciontexto[i].innerHTML = nombrecancion + "&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;";
      }
      for (i = 0; i < acanciontexto.length; i++) {
        acanciontexto[i].innerHTML = artistacancion + "&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;";
      }
      movertextoradio()

      if (cancicamb == "si") {
        document.getElementById("fotocancion").innerHTML = result.imagen
      }
      else {

      }


      document.getElementById("letra").addEventListener("click", () => {
        artistacancionletra=artistacancion.replace(/(<([^>]+)>)/gi, "");
        nombrecancionletra=nombrecancion.replace(/(<([^>]+)>)/gi, "");
        window.open('http://google.com/search?q=' + nombrecancionletra +" " +  artistacancionletra +" lyrics");
        // window.open('http://google.com/search?q='+);
      })


      console.log((result))
    })
  // }
}

cancionRadio()
$(document).ready(function () {
  var refreshId = setInterval(function () {
    cancionRadio()
  }, 2500);


});


function movertextoradio() {
  console.log(nombrecancion)
  artcananima = artistacancion.length * 0.1
  nombcancanima= nombrecancion.length * 0.1
  // console.log(nombrecancion.width());

  container = document.getElementsByClassName("textoradio")
  containerartista = document.getElementsByClassName("artistatextoradio")
  console.log($("#pixelradio").width())
  console.log(container)

  //Animacion de nombre de la cancion
  nombcancanima = nombcancanima + 2
  container[0].style.animationDuration = nombcancanima + "s";
  if ($("#pixelradio").width() <= 300) {
    container[0].style.webkitAnimationPlayState = "paused";
    container[0].style.webkitAnimationName = 'asomename'; 
    container[0].style.flexDirection = "column";
    // alert("Funciona") 
    
  }
  else {
    container[0].style.webkitAnimationName = 'somename'; 
    container[0].style.webkitAnimationPlayState = "running";
  }
  
  //Animacion del artista/s de la cancion  
  console.log($("#pixelartistaradio").width())
  artcananima = artcananima + 2
  containerartista[0].style.animationDuration = artcananima + "s";
  if ($("#pixelartistaradio").width() <= 300) {
    containerartista[0].style.webkitAnimationPlayState = "paused";
    containerartista[0].style.webkitAnimationName = 'asomename'; 
    containerartista[0].style.flexDirection = "column";

    // alert("Funciona") 

  }
  else {
    containerartista[0].style.webkitAnimationName = 'somename'; 
    containerartista[0].style.webkitAnimationPlayState = "running";
  }
  console.log("a")
}





buttons = document.getElementById("playpause");
console.log(buttons)
sonando = true
var music = new Audio('https://21223.live.streamtheworld.com/LOS40_URBAN.mp3');
buttons.addEventListener("click", () => {
  console.log(sonando)
  if (sonando) {
    buttons.classList.toggle("active");
    music.play();
    sonando = false
  }
  else {
    buttons.classList.toggle("active");
    music.pause();
    sonando = true
  }
});

















texto1 = "Cupido"
texto2 = "Rema-Rema (Halligans Live Rehearsal Version) Rema-Rema (Halligans Live Rehearsal Version)"
texto3 = "a b c d e f g h i j k l m n ñ o p q r s t u v w x y z  1 2 3 4 5 6 7 8 9 0 0 1 9 8 7 6 5 4 3 2 1 z y x w v u y s r q p o n ñ m l k j i h g f e d c b aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"












// <dd class="subject__cover--album"> 			<a href="/album/1682573331-clavaito---single" aria-label="Clavaíto - Single" class="ajax"> 			 				<img src="https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/cc/ea/be/cceabe20-3b18-1ed5-3f6b-3438e27460c2/196871054959.jpg/100x100bb.jpg" alt="Clavaíto - Single" itemprop="image"> 			 			</a> 		</dd>




/**
 * This pen uses OpenWeatherMap weather API
 * https://openweathermap.org/
 */


/*******************************************
 * GLOBAL COMPONENTS
 *******************************************/


/*
// DISPLAY
Vue.component('display', { 
  props: ['res'],
  template: `
    <section class="display">
      <h2>{{ res.name }}, {{ res.sys.country }}</h2>
      <h5>
        <span>Lat:</span> {{ res.coord.lat }}
        <span>Lon: {{ res.coord.lon }}</span>
      </h5>
      <div class="condition">
        <div class="temp">{{ temperature }}°C</div>
        <div>{{ wind }} km/h</div>
        <img v-bind:src="'./Weathericons/' + res.weather[0].icon + '.svg'" 
               v-bind:alt="'Weather in ' + res.name" 
               width="128" height="128">
          
        <p class="text">{{ res.weather[0].description }}</p>
      </div>
    </section>
    
   `,
   computed: {
    temperature(){
      //Remove decimals on temperature value
      var temp = this.res.main.temp,
          noDecimals = temp.toFixed();

      return noDecimals;
    },
    wind(){
      //Remove decimals on temperature value
      var wind = this.res.wind.speed,
      wind2=wind*3.6
      noDecimals = wind2.toFixed();

  return noDecimals;
    }
  }
});




// ACTIONS
Vue.component('actions', {
  props: ['location'],
  data(){
    return{
      isSearching: false  
    }
  },
  template: `
  <section class="actions">

    <div v-bind:class="{'active': isSearching}" class="panel"> 
      <input type="text" v-model="location">
      <button @click="search"><i class="material-icons">search</i></button> 
    </div>
  </section>
`,
 methods: {
   search(){
     this.$emit('search', this.location);
     this.isSearching = false;
   }
 }
});




/*******************************************
 * ROOT COMPONENT
 *******************************************
var app = new Vue({
  el: '#app',
  data: {
    appTitle: 'Vue Weather App',
    dataApi: 'aae97860de78632108ecc73036d6d17c',
    cityName: 'Eibar',
    lang: 'sp',
    weatherRes: null
  },
  
  // GET DATA WHEN MOUNTED
  mounted(){
    this.performAJAX();
  },
  
  // METHODS
  methods: {
    // SEARCH A NEW CITY
    searchcity(city){
      this.cityName = city;
      var ctx = this;
      ctx.performAJAX();
    },
    
    // GET WEATHER DATA
    performAJAX(){
      var ctx = this;
    
      axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + 
                ctx.cityName + '&units=metric&lang=' + 
                ctx.lang + '&APPID=' + ctx.dataApi )
      .then(function (response) { 
        ctx.weatherRes = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
});
*/