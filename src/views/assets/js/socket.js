const socket = io.connect("https://anka.qtr1.repl.co/");

socket.on('userCount', userCount => {
        document.getElementById('connectionCount').innerHTML = userCount;
  })