let user_lct = {
    lat : null,
    lon : null,
    API_key : "1125ad24b03c41d48d9e975c98dfcf2b"
};

let weather_obj = {
    country : null
    ,location :null
    ,temp:null
    ,weather :null
};

const sect_weather = document.getElementById('sect_weather');

export function display_weather(){
    get_user_geo();
}//display_weather

function get_user_geo(){
    navigator.geolocation.getCurrentPosition(
        success_pos, instead_pos
    );
}//get_user_geo

/* 🚩 기초 정보 불러오기 */
function success_pos(e){
    user_lct.lat  = e.coords.latitude;
    user_lct.lon  = e.coords.longitude;
    update_api_url();
}//success_pos

function instead_pos(){console.log('nah...');}//instead_pos

/* 🚩 URL */
function update_api_url(){
    const {lat,lon,API_key} = user_lct;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;

    fetch(URL)
    .then(response => response.json())
    .then(data =>{
        weather_obj.country = data.sys.country;
        weather_obj.location = data.name;
        weather_obj.temp = data.main.temp;
        weather_obj.weather = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    })
    .then(()=>{
        make_weather()
    });
}//update_api_url

function make_weather(){
    const {country, location, temp, weather} = weather_obj;
    const h_lct = document.createElement('SPAN');
    const h_cnt = document.createElement('SPAN');
    const h_ic = new Image;
    const h_temp = document.createElement('SPAN');

    h_lct.classList.add('location');
    h_cnt.classList.add('country');
    h_ic.classList.add('ic_weather');
    h_temp.classList.add('temp');

    h_lct.innerText = location;
    h_cnt.innerText = country;
    h_temp.innerText = `${temp}°C`;
    h_ic.src = weather;

    sect_weather.appendChild(h_lct);
    sect_weather.appendChild(h_cnt);
    sect_weather.appendChild(h_ic);
    sect_weather.appendChild(h_temp);

}//make_weather
