<!doctype html>
<html lang="en">
    <head>
        <title>lister</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="main.css" type="text/css"/>
        <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Lora:400' type='text/css'>
        <script src="js/jquery.min.js"></script>
        <link rel="apple-touch-icon" sizes="57x57" href="ico/apple-touch-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="ico/apple-touch-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="ico/apple-touch-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="ico/apple-touch-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="ico/apple-touch-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="ico/apple-touch-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="ico/apple-touch-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="ico/apple-touch-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="ico/apple-touch-icon-180x180.png">
        <link rel="icon" type="image/png" href="ico/favicon-32x32.png" sizes="32x32">
        <link rel="icon" type="image/png" href="ico/favicon-194x194.png" sizes="194x194">
        <link rel="icon" type="image/png" href="ico/favicon-96x96.png" sizes="96x96">
        <link rel="icon" type="image/png" href="ico/android-chrome-192x192.png" sizes="192x192">
        <link rel="icon" type="image/png" href="ico/favicon-16x16.png" sizes="16x16">
        <link rel="manifest" href="ico/manifest.json">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="ico/mstile-144x144.png">
        <meta name="theme-color" content="#3b3b3b">
	</head>
    <body>
        <header>
            <h1 id = "logo">Lister</h1>
            <p id = "sub">we have an open plan office</p>
            <p class="headerlinks" id="golink">go</p>
            <p class="headerlinks" id="addlink">add</p>
            <p class="headerlinks" id="editlink">edit</p>
        </header>
        <div id="go">
            <div id="playlist-id'">id</div>
            <div id="playlist-title">title</div>
            <div id="playlist-description">description</div>
            <div id="status">status</div>
            <button id="playlist-button">button</button>
            <div id="loaderwrap">
                <div id="loader">
                    <div class="cc" style="background-color:khaki"></div>
                    <div class="cc" style="background-color:cyan"></div>
                    <div class="cc" style="background-color:springgreen"></div>
                    <div class="cc" style="background-color:violet"></div>
                    <div class="cc" style="background-color:tomato"></div>
                    <div class="cc" style="background-color:royalblue"></div>
                    <div class="cc" style="background-color:#3b3b3b"></div>
                </div>
                <div id="loadertext">generating playlist</div>
            </div>
        </div>
        <div id="login">
            <p>to edit, please provide the keyword</p>
                <label for="keyin">keyword</label>
                <input id="keyin" name="keyin" type="password" autocomplete="off" spellcheck="false" maxlength="255" onkeydown="if (event.keyCode == 13) login()">
                <button class = "keybutt" type="button">go</button>
            <div class="loginmessage"></div>
            </div>
        <div id = "add">
            <div id = "addform">
                <div>
                    <label for="linkin">link</label>
                    <div>
                        <input id="linkin" name="linkin" type="url" autocomplete="off" spellcheck="false" maxlength="255" onkeydown="if (event.keyCode == 13) document.getElementById('addbutt').click()">
                        <button id="clearbutt" onclick="clearform()">clear</button>
                    </div>
                </div>
                <div>
                    <label for="titlein">title</label>
                    <div>
                        <input id="titlein" name="titlein" type="text" autocomplete="off" spellcheck="false" maxlength="255" onkeydown="if (event.keyCode == 13) document.getElementById('addbutt').click()">
                    </div>
                </div>
                <div>
                    <div>
                        <input id="addbutt" name="add" type="submit" value="add">
                    </div>
                </div>
            </div>
            <div id = "thumbwrap">
                <div id = "thumbnail">
                    <div class="cc" style="background-color:khaki"></div>
                    <div class="cc" style="background-color:cyan"></div>
                    <div class="cc" style="background-color:springgreen"></div>
                    <div class="cc" style="background-color:violet"></div>
                    <div class="cc" style="background-color:tomato"></div>
                    <div class="cc" style="background-color:royalblue"></div>
                    <div class="cc" style="background-color:#3b3b3b"></div>
                </div>
            </div>
            <div class="addmessage"></div>
            <div id="dropmessage">drop here to add</div>
        </div>
        <noscript>
            <p class="down">your browser is not running javascript. you should update or enable scripts in order to vote, add and generate playlists.</p>
        </noscript>
        <ul id = "tracklist">
            <?php include("includes/ajaxloadposts.php"); ?>
        </ul>
        <footer>
            <p id = "us">produce of <a href="https://github.com/rorymalcolm">rory malcolm</a> and <a href = "http://chrispollock.uk">chris pollock</a><br>&#169; copyright lister 2015</p>
            <p id = "about"><a href="/dev/lister/about.html">about</a></p>
            
        </footer>
    </body>
    <script src="https://apis.google.com/js/client:plusone.js?onload=makeAPICall" type="text/javascript"></script>
    <script src="js/add.js" type="text/javascript"></script>
    <script src="js/auth.js" type="text/javascript"></script>
    <script src="js/drop.js" type="text/javascript"></script>
    <script src="js/go.js" type="text/javascript"></script>
    <script src="js/load.js" type="text/javascript"></script>
    <script src="js/login.js" type="text/javascript"></script>
    <script src="js/menus.js" type="text/javascript"></script>
    <script src="js/message.js" type="text/javascript"></script>
    <script src="js/tuber.js" type="text/javascript"></script>
    <script src="js/vote.js" type="text/javascript"></script>
</html>