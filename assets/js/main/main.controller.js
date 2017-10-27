app.controller('mainCtrl', function ($scope, $rootScope, $http, menu, mdDialog) {

    $scope.iniciosesion = function (ev) {
        mdDialog.mostrardialog('login', $scope.customFullscreen, ev);
    };


            $scope.gotoAnchor = function(x) {
                  var newHash = 'section' + x;
                  if ($location.hash() !== newHash) {
                    // set the $location.hash to `newHash` and
                    // $anchorScroll will automatically scroll to it
                    $location.hash('section' + x);
                  } else {
                    // call $anchorScroll() explicitly,
                    // since $location.hash hasn't changed
                    $anchorScroll();
                  }
            };



        this.iconos = [{nombre: 'favorite'}];

        // Slider

        $scope.images = [
            { title: 'YOUR CANADIAN LIFESTYLE', src: 'img/pictograma/lifestyle.svg', contenido: 'Elige el tipo de experiencia y tipo de vida quieres tener Veranos divertidos - Viajes culturales - Cursos de Inglés Cursos de Francés - Idiomas y trabajo - Estancias con familias Canadienses - High School, Universidad-Sister School'},
            { title: 'EL MEJOR AMBIENTE', src: 'img/pictograma/ambiente.svg', contenido: 'Canadá ofrece un gran ambiente seguro para estudiantes locales e internacionales. Asiste a eventos, actividades al aire libre, deportes, usa el transporte público, conoce lugares de interés y viaja a otras ciudades con toda tranquilidad y seguridad.' },
            { title: 'EL MEJOR LUGAR PARA VIVIR Y ESTUDIAR', src: 'img/pictograma/estudiar.svg', contenido: 'La Organización de las Naciones Unidas (ONU) ha calificado a Canadá entre los 10 mejores países para vivir gracias a su expectativa de vida , bajos niveles de violencia y sistema educativo.'},
            { title: 'UN PAÍS MULTICULTURAL', src: 'img/pictograma/multicultural.svg',contenido: 'Canadá es un país multicultural que respeta y promueve la diversidad ya que ofrece una tremenda variedad cultural, idiomática y gastronómica en cada una de las ciudades del país.' },
            { title: 'DEPORTES INVERNALES', src: 'img/pictograma/deportes.svg', contenido: 'En varios lugares puedes practicar ski, snowboard, simplemente patinar en hielo o caminar en una montaña nevada. En lugares como Vancouver, las montañas para esquiar están tan sólo a unos minutos de la ciudad y si quieres una aventura Olímpica puedes ir a Whistler que es el centro de esquí mas importante de todo América.'},
            { title: 'UN LUGAR DIVERTIDO', src: 'img/pictograma/divertido.svg', contenido: 'Tiene de todo para hacer después de clases: deportes de invierno y de verano, tiendas, vida nocturna, museos, restaurantes, eventos deportivos, galerías, conciertos musicáles, festivales, y mucho entretenimiento.'},
        ];

        $scope.images2 = [
            { title: 'YOUR CANADIAN LIFESTYLE', src: 'img/pictograma/lifestyle.svg', contenido: 'Elige el tipo de experiencia y tipo de vida quieres tener Veranos divertidos - Viajes culturales - Cursos de Inglés Cursos de Francés - Idiomas y trabajo - Estancias con familias Canadienses - High School, Universidad-Sister School'},
            { title: 'EL MEJOR AMBIENTE', src: 'img/pictograma/ambiente.svg', contenido: 'Canadá ofrece un gran ambiente seguro para estudiantes locales e internacionales. Asiste a eventos, actividades al aire libre, deportes, usa el transporte público, conoce lugares de interés y viaja a otras ciudades con toda tranquilidad y seguridad.' },
            { title: 'EL MEJOR LUGAR PARA VIVIR Y ESTUDIAR', src: 'img/pictograma/estudiar.svg', contenido: 'La Organización de las Naciones Unidas (ONU) ha calificado a Canadá entre los 10 mejores países para vivir gracias a su expectativa de vida , bajos niveles de violencia y sistema educativo.'},
            { title: 'UN PAÍS MULTICULTURAL', src: 'img/pictograma/multicultural.svg',contenido: 'Canadá es un país multicultural que respeta y promueve la diversidad ya que ofrece una tremenda variedad cultural, idiomática y gastronómica en cada una de las ciudades del país.' },
            { title: 'DEPORTES INVERNALES', src: 'img/pictograma/deportes.svg', contenido: 'En varios lugares puedes practicar ski, snowboard, simplemente patinar en hielo o caminar en una montaña nevada. En lugares como Vancouver, las montañas para esquiar están tan sólo a unos minutos de la ciudad y si quieres una aventura Olímpica puedes ir a Whistler que es el centro de esquí mas importante de todo América.'},
            { title: 'UN LUGAR DIVERTIDO', src: 'img/pictograma/divertido.svg', contenido: 'Tiene de todo para hacer después de clases: deportes de invierno y de verano, tiendas, vida nocturna, museos, restaurantes, eventos deportivos, galerías, conciertos musicáles, festivales, y mucho entretenimiento.'},
        ];

        console.log($scope.images2);

        $scope.formulario = {};

        $scope.pushData = function(){

            $http.post('/data/personas', $scope.formulario)

                .success(function(data){
                    console.log($scope.formulario);
                    $scope.formularioCompletado = true;
                })
                .error(function(err){
                    console.log(err)
                })
        }


        // $scope.pushData = function(data){
        //     $http.post('/data/personas').then(function (data) {
        //         $scope.personas = data.data;
        //         console.log(data.data);
        //     });
        // }
});
