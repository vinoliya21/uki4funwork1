 SC.initialize({
   client_id: '340f063c670272fac27cfa67bffcafc4'
 });

 $(document).ready(function() {

   SC.stream('/tracks/496789389',function(sound){

     $('#start').click(function(e) {
            e.preventDefault();
            sound.start();
          });
          $('#stop').click(function(e) {
            e.preventDefault();
            sound.stop();
          });
        });
 });
