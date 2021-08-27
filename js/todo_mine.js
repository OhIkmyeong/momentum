const ul_todo = document.getElementById('ul_todo');
const ipt_todo = document.getElementById('ipt_todo');

const todo_ID = 'todo_';
const del_btn_content = '<button class="btn_del">❌</button>';

let obj_todo = {};
let COUNT = Number(localStorage.getItem("COUNT")) ?? 0;


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
    update_obj_todo(COUNT,val);
}//when_submit

function make_li_todo(val){
    const li = document.createElement('LI');
    COUNT = Number(localStorage.getItem("COUNT"));
    li.dataset.count = `${todo_ID}${COUNT}`;
    li.innerHTML = `<p>${val}</p> ${del_btn_content}`;
    ul_todo.appendChild(li);
    localStorage.setItem("COUNT", COUNT + 1);
}//make_li_todo

/* 🚩 localStorage 업데이트 및 그리기 관련 */
function update_obj_todo(count,val){
    const thisID = `${todo_ID}${count}`; 
    obj_todo[thisID] = val;
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

    when_nothing();

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

function when_nothing(){
    if(!obj_todo || Object.keys(obj_todo).length === 0){
        COUNT = 0;
        localStorage.setItem('COUNT', COUNT);
    }//if
    console.log(obj_todo[0]);
    obj_todo = obj_todo ?? {};
}//when_nothing

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

/* ✨ 실행 */
ul_todo.addEventListener('click',try_delete);