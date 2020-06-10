
//select items
let title = document.getElementById("title");
let date = document.getElementById("date");
let addButton = document.getElementById("add");
let dataForm = document.getElementById("data");
let countdown = document.getElementById("countdown");




addButton.addEventListener("click" ,  (e) =>{
    e.preventDefault();
    var countdown =document.getElementById("countdown");
    if (title = "" , date = ""){
        alert ("please enter your data please...")
    }
    if (countdown > 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "The countdown is over!";
    }
    else {
        const difference = +new Date(date .value).getTime();
        let remaining = "Time's up!";
        var x= setInterval(() => { 
            var now = new Date().getTime(); 
            var t = difference - now; 
            var days = Math.floor(difference / (1000 * 60 * 60 * 24)); 
            var hours = Math.floor((difference%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
            var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)); 
            var seconds = Math.floor((difference % (1000 * 60)) / 1000); 
    
            document.getElementById("countdown").innerHTML = 
            "<p>count down start <P>"
            + days + "D" + hours + "H" + minutes + "M" + seconds + "S"
            "<p> your time is start.... <p>" ;

            
        });
    }
});