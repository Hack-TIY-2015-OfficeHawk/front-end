import $ from 'jquery';

let HomeController = function($scope) {
  var mouseoversound=createsoundbite('images/Screaming Hawk 2-SoundBible.com-1003225740.mp3');
  var clicksound=createsoundbite('click.mp3'); 

};

  

  // var audio = $("images/Screaming Hawk 2-SoundBible.com-1003225740.mp3")[0];
  //   $(".button").mouseenter(function() {
  //   audio.play();
  //  }); 
  
HomeController.$inject = ['$scope'];

export default HomeController;






// function createsoundbite(sound){
//   var html5audio=document.createElement('audio');
//     }
//     html5audio.load()
//     html5audio.playclip=function() {
//       html5audio.currentTime=0
//       html5audio.play()
//     };
//     return html5audio
//   };
  


// };
