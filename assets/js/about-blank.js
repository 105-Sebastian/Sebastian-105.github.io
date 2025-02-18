var gamesContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <script type="text/javascript">
      window.smartlook ||
        (function (d) {
          var o = (smartlook = function () {
              o.api.push(arguments);
            }),
            h = d.getElementsByTagName("head")[0];
          var c = d.createElement("script");
          o.api = new Array();
          c.async = true;
          c.type = "text/javascript";
          c.charset = "utf-8";
          c.src = "https://web-sdk.smartlook.com/recorder.js";
          h.appendChild(c);
        })(document);
      smartlook("init", "a7e3ed1415658b0add8ad2a553f68a513f045a4e", {
        region: "eu",
      });
    </script>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="The better unblocked games website." />
    <meta
      name="keywords"
      content="front-end web developer, unblocked, games, google sites, unblocked games mom, ublocked, code, coding, programmer, development, javascript, jquery, bootstrap, sass, less, git" />
    <meta name="author" content="Sebastian-105" />
    <meta content="Games | Sebastian-105" property="title" />
    <meta content="The best unblocked games website." property="description" />
    <meta content="105.png" property="image" />
    <link rel="icon" href="/105.png" />
    <link href="/assets/css/style.css" rel="stylesheet" />
    <link rel="stylesheet" href="/assets/lib/fonts/fonts.css" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Consolas|Roboto|Google+Sans|vollkorn|Kings|Oxygen" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="../assets/lib/font-awesome.min.css" />
    <title>Sebastian S | Games</title>
    <link href="../assets/css/Sebastian-105.css" rel="stylesheet" />
    <link rel="icon" href="/105.png" />
  </head>
  <body id="game-page-body">
    <!-- <center>
      <div id="announcementBar" style="top: 6px;">
        <p class="announcement" style="font-size:18px;">Most of the games don't work, Sorry :(</p>
        <script>
          var visible = new Boolean(true); //Announcement Toggle
        </script> 
        
      </div>
      
</center> -->
    <div style="margin-top: 100px; text-align: center">
      <h1 style="font-size: 50px">Games Page</h1>
      <hr />
      <h2 style="font-size: 30px">By Sebastian</h2>
    </div>
    <div class="gameSearch">
      <input
        type="text"
        id="myInput"
        placeholder="Search games . . ."
        onmouseover="gameSearchFunction1(this)"
        onclick="gameSearchFunction()" />
      </div>
    <!--<h4 style="text-align: center; margin-top:25px; margin-bottom: 0px;">Filters</h4>
    <div class="filterGamesSection" style="margin: auto; margin-top:25px; border-radius: 25px;">
      <button style="background-color: var(--theme2);"></button>
    </div> -->

    <div id="games">
      <div class="games">
        <!-- Games go here -->
      </div>
    </div>

    <div class="gamecontainer hidden">
      <div class="nav">
        <div class="item" id="back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 96 960 960"
            fill="white">
            <path
              d="M627 948 276 597q-5-5-7-10t-2-11q0-6 2-11t7-10l351-351q11-11 28-11t28 11q12 12 12 28.5T683 261L368 576l315 315q13 13 12 29t-12 27q-12 12-28.5 12T627 948Z" />
          </svg>
        </div>
        <div class="item right" id="fullscreen">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 96 960 960"
            fill="white">
            <path
              d="M230 856q-12.75 0-21.375-8.625T200 826V693q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T260 693v103h103q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T363 856H230Zm-.175-367Q217 489 208.5 480.375T200 459V326q0-12.75 8.625-21.375T230 296h133q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T363 356H260v103q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625ZM597 856q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T597 796h103V693q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T760 693v133q0 12.75-8.625 21.375T730 856H597Zm132.825-367Q717 489 708.5 480.375T700 459V356H597q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T597 296h133q12.75 0 21.375 8.625T760 326v133q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Z" />
          </svg>
        </div>
      </div>

      <div class="frame">
        <iframe
          frameborder="0"
          id="gameframe"
          class="gameframe"
          src=""></iframe>
      </div>
    </div>

    <span class="spinner">
      <svg viewBox="22 22 44 44">
        <circle
          class="spinnerSvg"
          cx="44"
          cy="44"
          r="20.2"
          fill="none"
          stroke-width="3.6"></circle>
      </svg>
    </span>
    <footer class="footer" style="text-align: center">
      <hr style="width: 100%; height: 3px" />
      <img
        src="./105.png"
        style="width: 35px; height: 35px; border-radius: 50%" /><seb
        style="color: var(--font-color)">
        &copy; 2022 - 2023 Sebastian-105, DanyangXu77. </seb
      ><a style="padding-left: 50px" href="https://github.com/Sebastian-105"
        >@Sebastian-105</a
      >
      ~ <a href="https://github.com/DanyangXu77">@DanyangXu77</a> ~
    </footer>
    <copyalertcorner
      style="display: none"
      class="alertcorner"
      id="copyalertcorner"
      >copyalertcorner</copyalertcorner
    >
    <!--%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
Scripts  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% -->
    <!--JS Libarys-->
    <script>
          function gameSearchFunction1(e) {
        $(e).hide('slow'); setTimeout(() => {
          $('.gameSearch').text('This feature is currently not working, suck it up.')
        }, 350);
         
      }
      function gameSearchFunction() {
        swal({
          title: "Search bar",
          text: 'I am currently trying to fix the search bar, until then just use "ctrl + f" \n-Sebastian',
          icon: "error",
          button: "I'll be patient",
        });
      }
    </script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"
      integrity="sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"
      integrity="sha512-AA1Bzp5Q0K1KanKKmvN/4d3IRKVlv9PYgwFPvm32nPO6QS8yH1HO7LbgB1pgiOxPtfeg5zEn2ba64MUcqJx6CA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"></script>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/vue/3.3.4/vue.cjs.js"
      integrity="sha512-Om0T2d9tl4H2ShSsEkWjJeQOlXGJg4OZvXKZw075refp2RNZ1avQDbqd6WhwGbWhqpcn2oPmExCEa/lSLzZaJw=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.3/angular.min.js"
      integrity="sha512-KZmyTq3PLx9EZl0RHShHQuXtrvdJ+m35tuOiwlcZfs/rE7NZv29ygNA8SFCkMXTnYZQK2OX0Gm2qKGfvWEtRXA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"></script>
    <!--JS Libarys end -->
    <!--
    <script>
      // Redirects
      if(location.href.includes("/game/")) {
        location.replace("https://game-105.onrender.com")
      }
    </script> -->
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
      integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"></script>
    <script
      type="text/javascript"
      src="../assets/lib/javascriptlib.js"></script>
    <script type="text/javascript" src="../assets/js/jQuery.min.js"></script>
    <script type="text/javascript" src="../assets/js/Sebastian-105.js"></script>
    <script type="text/javascript" src="../assets/js/about-blank.js"></script>
    <script
      type="text/javascript"
      src="https://icon105.netlify.app/Sebastian105.js"
      defer></script>
    <script type="text/javascript" src="/game/json.js"></script>
  </body>
</html>
`