// import title and date from script file
import { title } from './script.js';
import {date} from "./script.js"

// export some calculate code  to script file
export default class myPage {
    distanceTime(){
        
        setInterval(() => { 
            //calculate time to make countdown timer
            let now = new Date().getTime(); 
            let countDown = new Date(date.value).getTime();
            let difference = countDown - now; 
            let days = Math.floor(difference / (1000 * 60 * 60 * 24)); 
            let hours = Math.floor((difference%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
            let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)); 
            let seconds = Math.floor((difference % (1000 * 60)) / 1000); 
            
           //  check input 
             if (difference < 0){
                document.getElementById("countdown").innerHTML = `countdown is end &
                your event is starting`;
                
            }
            else{
                document.getElementById("countdown").innerHTML = 
                
                + days + " D " + hours + " H " + minutes + " M " + seconds + " S " +
                "<p> Event countdown has started.... <p>";

            }
        });4000;
    }

}



/*
export default class myPage {
    distanceTime(){
        getTime (()=>{
            let now = new Date().getTime(); 
                let countDown = new Date(date.value).getTime();
                let difference = countDown - now; 
                
                let days = Math.floor(difference / (1000 * 60 * 60 * 24)); 
                let hours = Math.floor((difference%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
                let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)); 
                let seconds = Math.floor((difference % (1000 * 60)) / 1000); 
                
                document.getElementById("countdown").innerHTML = 
                title
                + days + "D" + hours + "H" + minutes + "M" + seconds + "S"
                "<p> your time is start.... <p>";

        })
        setInterval(() => { 
               

             if (difference < 0){
                document.getElementById("countdown").innerHTML = `
                countdown is end
                your event is stsrting`
            }
            else{
                getTime()

            }
        });4000;
    }

}
*/