const form_user = document.getElementById('form_user');
const ipt_user = document.getElementById('ipt_user');
const btn_login = document.getElementById('btn_user-login');
const btn_logout = document.getElementById('btn_user-logout');
const user = document.getElementById('user');

export const USERNAME = 'userName'
const DEFAULT_USERNAME = 'LOG IN FIRST!'

function when_submit(e){
    e = e || window.event;
    e.preventDefault();
    
    const val = ipt_user.value; 
    save_user(val);
    hide_login();
    display_greeting();
}//when_submit

function save_user(val){
    localStorage.setItem(USERNAME,val);
}//save_user

export function hide_login(){
    ipt_user.classList.add('hidden');
    btn_login.classList.add('hidden');
    btn_logout.classList.remove('hidden');
}//hide_login

function show_login(e){
    e = e || window.event;
    e.preventDefault();
    ipt_user.classList.remove('hidden');
    btn_login.classList.remove('hidden');
    btn_logout.classList.add('hidden');
}//hide_login

function when_logout(){
    localStorage.removeItem(USERNAME);
    display_greeting();

    show_login();
    ipt_user.value = '';
    ipt_user.focus();
}//when_logout

export function display_greeting(){
    user.innerText = localStorage.getItem(USERNAME)??DEFAULT_USERNAME;
}//display_greeting

form_user.addEventListener('submit',(e)=>{when_submit(e)});
btn_logout.addEventListener('click', when_logout);
