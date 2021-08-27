const ul_todo = document.getElementById('ul_todo');
const ipt_todo = document.getElementById('ipt_todo');

const todo_ID = 'todo_';
const del_btn_content = '<button class="btn_del">❌</button>';

let obj_todo = {};


/* 🚩 생성 관련 */
export function when_submit(e){
    e = e || window.event;
    e.preventDefault();

    if(!localStorage.getItem('userName')){
        ipt_todo.value = "";
        return;
    }

    const val = ipt_todo.value;
    ipt_todo.value = "";

    make_li_todo(val);
}//when_submit

function make_li_todo(val){
    const li = document.createElement('LI');
    const key = String(Date.now());
    li.dataset.count = key;
    li.innerHTML = `<p>${val}</p> ${del_btn_content}`;
    ul_todo.appendChild(li);

    update_obj_todo(key,val);
}//make_li_todo


/* 🚩 이미 존재하는 LI 삭제 관련 */
function try_delete(e){
    e = e || window.event;
    const target = e.target; 
    if(target.tagName !== "BUTTON"){return;}
    
    const li = target.parentElement;
    const li_id = li.dataset.count;
    delete_li(li);
    delete_obj_todo(li_id);
}//try_delete

function delete_li(li){
    li.classList.add('del');
    setTimeout(()=>{ul_todo.removeChild(li)},800);
}//delete_li

/* 🚩 localStorage 업데이트 및 그리기 관련 */
function update_obj_todo(key,val){
    obj_todo[key] = val;
    update_localStorage();
}//update_obj_todo

function delete_obj_todo(thisID){
    delete obj_todo[thisID];
    update_localStorage();
}//delete_obj_todo

function update_localStorage(){
    localStorage.setItem('obj_todo', JSON.stringify(obj_todo));
}//update_localStorage

export function display_obj_todo(){
    obj_todo = JSON.parse(localStorage.getItem('obj_todo'));
    obj_todo = obj_todo ?? {};

    for(let key in obj_todo){
        const li = document.createElement('LI');
        li.dataset.count = key;
        li.innerHTML = `
            <p>${obj_todo[key]}</p>
            ${del_btn_content}
        `;
        ul_todo.appendChild(li);
    }//for
}//display_obj_todo

/* ✨ 실행 */
ul_todo.addEventListener('click',try_delete);