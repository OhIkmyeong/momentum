const sect_clock = document.getElementById('sect_clock');
const time_clock = sect_clock.getElementsByClassName('clock')[0];
const status_clock = sect_clock.getElementsByClassName('status_clock')[0];

let today = new Date();

let time = {
    hh : undefined,
    mm : undefined,
    ampm : undefined
}

export function display_clock(){
    today = new Date();
    time.hh = today.getHours();
    time.mm = today.getMinutes();

    times_of_day(time.hh);

    time_clock.innerText = `
        ${time.hh > 12 ? time.hh - 12 : time.hh }:${String(time.mm).padStart(2,"0")}
    `;

    status_clock.innerText = time.ampm;
    setTimeout(display_clock,60000);
}//display_clock

function times_of_day(curr){
    if(curr < 7){
        time.ampm = "Good Night";
    }else if(curr < 12){
        time.ampm = "Good Morning";
    }else if(curr < 18){
        time.ampm = "Good Afternoon";
    }else{
        time.ampm = "Good Evening";
    }
}//times_of_day
