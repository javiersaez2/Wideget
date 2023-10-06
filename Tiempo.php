<!DOCTYPE html>
<html lang="es">
<head>

<meta http-equiv='cache-control' content='no-cache'>
<meta http-equiv='expires' content='0'>
<meta http-equiv='pragma' content='no-cache'>


    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="tiempo.css" />
    <title>Document</title>
</head>
<body>

    <section class="section">    
        <div class="tarjeta">
            <div class="tipografia">
                <div class="hora" id ="hora">
                13:46
                </div>
                <div class="dia">
                 SAB 25 FEB
                </div>
                <div class="linea">
                    </div>
                    <div id="icono">
                        <img alt="a" id="iconos">
                    </div>
                    <div class="texto">
                        <div  class="texto2">
                            TEMP
                        </div>
                        <div id="grados" class="texto2">

                        </div>
                        <div id="viento" class="texto2">
                        </div>
                    </div>
                    <div id="nombre" class="texto2">
                    </div>
                    <input  id="ciudadinput"placeholder="Nombre ciudad">
                      

    <div class="ajax"> 
   <div id="cancion22">  

                </div>
                <div id="fotocancion"></div>
                </div>
                <div class="container">
	<button class="btn play-pause">
		<div class="icon-container">
			<svg class="icon play">
				<use xlink:href="#play"></use>
			</svg>
		</div>
		<div class="icon-container">
			<svg class="icon pause">
				<use xlink:href="#pause"></use>
			</svg>
		</div>
	</button>

<svg xmlns="http://www.w3.org/2000/svg" class="icons">
	<symbol id="play" viewBox="0 0 448 512">
		<path
				d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
	</symbol>
	<symbol id="pause" viewBox="0 0 448 512">
		<path
				d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48
					48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z" />

	</symbol>

</svg>
        </div>
        
        <div id="app">
            <display v-bind:res="weatherRes"></display>
            <actions v-bind:location="cityName" @search="searchcity"></actions>
          </div>
    </section>
    <!-- partial:index.partial.html -->





    
</body><script src="https://code.jquery.com/jquery-3.6.3.js"></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.2.4/vue.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/axios/0.15.3/axios.min.js'></script><script  src="script.js"></script>

</html>





<!-- "<div class="stations__station__track" title="En directo ahora" role="status">Emilia,Ludmilla,Zecca <br> No se ve</div><br>" -->