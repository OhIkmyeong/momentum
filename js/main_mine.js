import * as users from './user.js';
import * as clock from './clock.js';
import {display_quotes, display_bg} from './quotes.js';
import {when_submit, display_obj_todo} from './todo.js'
import {display_weather} from './weather.js'

const form_todo = document.getElementById('form_todo');

/* 실행 - USER 관련 */
users.display_greeting();

if(localStorage.getItem(users.USERNAME)){
    users.hide_login();
    users.display_greeting();
}//if

/* 실행 - Clock 관련 */
clock.display_clock();

/* 실행 - Quotes 관련 */
display_quotes();
display_bg();

/* 실행 - 할 일 관련 */
form_todo.addEventListener('submit',when_submit);
display_obj_todo();

/* 실행 - 위치 및 날씨관련 */
display_weather();