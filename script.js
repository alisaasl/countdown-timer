const day = document.getElementById('days')
const hour = document.getElementById('hours')
const min = document.getElementById('mins')
const sec = document.getElementById('secs')


const newYear = '21 Jun 2024'

function countdown() {
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();


    const totalsec = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalsec / 3600 / 24);
    const hours = Math.floor(totalsec / 3600) % 24;
    const mins = Math.floor(totalsec / 60) % 60;
    const sexs = Math.floor(totalsec) % 60;

    day.innerHTML = days;
    hour.innerHTML = hours;
    min.innerHTML = mins;
    sec.innerHTML = sexs;


}

function format(time){
    return time< 10 ? `0${time}` : time;
}



countdown();




setInterval(countdown, 1000)


