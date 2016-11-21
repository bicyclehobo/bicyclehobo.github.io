 $(document).ready(function() {
    // la magia aquí

    // This key only works for this demo on GitHub
    // You must create your own at:
    // https://developers.google.com/youtube/v3/getting-started
    window.api_key = 'AIzaSyBwQX6kg_bpLPSRZ92t74WgAPRDR74ja1s';

    // Start all players on the page with default options
    // $('.RYPP').rypp('AIzaSyBwQX6kg_bpLPSRZ92t74WgAPRDR74ja1s');

    // Start two players by ID, with default settings
    $('#rypp-demo-1').rypp( window.api_key, { debug: true } );

    $('#rypp-demo-2').rypp( window.api_key, { debug: true } );

    // Start two players by ID, with default settings
    $('#rypp-demo-3').rypp( api_key ,{
      update_title_desc: true, // Default false
      autoplay: false,
      autonext: false,
      loop: false,
      mute: true,
      debug: false
    });

    // 100 videos in playlist
    $('#rypp-demo-4').rypp( window.api_key, { debug: true } );

  });
