const clock = document.getElementById("clock");
const stopAlert = document.getElementById("alert");
const audioPlay = document.getElementById("myaudio");

let milisec=0,
    sec=0,
    min=0,
    intervalID,
    stopId;

const start = () =>{
    intervalID = setInterval(() =>{
         if(milisec<99){
             milisec++;
         }
         else if(sec<59){
            milisec=0;
            sec++;
         }
         else{
            min++;
            sec=0;
            milisec=0;
         }
         
         const miliSeconds = String(milisec).padStart(2,"0");
         const Seconds = String(sec).padStart(2,"0");
         const minutes = String(min).padStart(2,"0");

         clock.innerText=`${minutes}:${Seconds}:${miliSeconds}`;

         audioPlay.play();
         
    },10);

}

const stop = () =>{
    clearInterval(intervalID);
    audioPlay.pause();
}

const restart = () =>{
    milisec=0;
    sec=0;
    min=0;

    const miliSeconds = String(milisec).padStart(2,"0");
    const Seconds = String(sec).padStart(2,"0");
    const minutes = String(min).padStart(2,"0");

    clock.innerText=`${minutes}:${Seconds}:${miliSeconds}`;

    audioPlay.pause();
}