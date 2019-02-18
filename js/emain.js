
SC.initialize({
  client_id: 'a3e059563d7fd3372b49b37f00a00bcf'

});

$(document).ready(function() {
/* Letme love you */
  SC.stream('/tracks/124531845', function(sound) {
    $('#start').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });
  /* shape */
    SC.stream('/tracks/303123954', function(sound) {
      $('#start1').click(function(e) {
        e.preventDefault();
        sound.start();
      });
      $('#stop1').click(function(e) {
        e.preventDefault();
        sound.stop();
      });
    });

  /* Perfect*/
    SC.stream('/tracks/345625110', function(sound) {
      $('#start2').click(function(e) {
        e.preventDefault();
        sound.start();
      });
      $('#stop2').click(function(e) {
        e.preventDefault();
        sound.stop();
      });
    });27083067

    /* Dalinda*/
      SC.stream('/tracks/89145752', function(sound) {
        $('#start3').click(function(e) {
          e.preventDefault();
          sound.start();
        });
        $('#stop3').click(function(e) {
          e.preventDefault();
          sound.stop();
        });
      });

      /* Get it started*/
        SC.stream('/tracks/51187884', function(sound) {
          $('#start3').click(function(e) {
            e.preventDefault();
            sound.start();
          });
          $('#stop3').click(function(e) {
            e.preventDefault();
            sound.stop();
          });
        });

        /* Nina*/
          SC.stream('/tracks/114776547', function(sound) {
            $('#start3').click(function(e) {
              e.preventDefault();
              sound.start();
            });
            $('#stop3').click(function(e) {
              e.preventDefault();
              sound.stop();
            });
          });
});
