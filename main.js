let temp = 0;
let array_inners = ['inn_avatar', 'inn_messages', 'inn_courses', 'inn_calendar', 'inn_tasks', 'inn_courses', 'inn_tasks', 'inn_courses'];
let array_pages = ['avatar', 'messages_inc', 'courses', 'calendar', 'hw', 'courses_task', 'actual_hw', 'courses_materials']
let array_pics_id = ['pic_avatar', 'pic_messages', 'pic_courses', 'pic_calendar', 'pic_tasks', 'pic_courses', 'pic_tasks', 'pic_courses']
let array_pics = ['avatar.JPG', 'mes.jpg', 'les.jpg', 'cal.jpg', 'task.jpg', 'les.jpg', 'task.jpg', 'les.jpg']
let array_bluepics = ['avatar_on_blue.JPG', 'mes_on_blue.jpg', 'les_on_blue.jpg', 'cal_on_blue.jpg', 'task_on_blue.jpg', 'les_on_blue.jpg', 'task_on_blue.jpg', 'les_on_blue.jpg']

//id - айди элемента на навбаре
//pageId - айди вкладки, которая должна открыться
//pic_num - номер картинки, которая должна быть открыта

function rewriteScript(id, pageId, pic_num){
    
    //Если меняется подвкладка, то меняем состояние кнопки на навбаре
    last = document.getElementById(array_inners[temp]);
    last.classList.remove('inn_active')
    last.classList.add('inn_unactive');

    //Сокрытие старой вкладки
    last_page = document.getElementById(array_pages[temp]);
    last_page.classList.add('unactive');
    last_page.classList.remove('active');

    //Изменение картинки на основную на навбаре
    pic = document.getElementById(array_pics_id[temp]);
    pic.src = './image/' + array_pics[temp];
    console.log(pic.src);

    //Изменение кнопки на навбаре
    icon = document.getElementById(id);
    icon.classList.add('inn_active');
    icon.classList.remove('inn_unactive');

    //Изменение страницы
    act_page = document.getElementById(pageId);
    act_page.classList.add('active');
    act_page.classList.remove('unactive');

    //Изменение цвета кнопки на навбаре
    pic = document.getElementById(array_pics_id[pic_num]);
    pic.src = './image/' + array_bluepics[pic_num];
    console.log(pic.src);

    //Присваивание темпу номера открытой вкладки
    for(i = 0; i < array_pages.length; i++){
        if(array_pages[i] == pageId){temp = i; break;}
    }
    console.log(temp)
}

function changePage(idEl, spId, spTxtId){
    el = document.getElementById(idEl);
    sp = document.getElementById(spId);
    sp1 = document.getElementById(spTxtId);
    el_uc = document.getElementById('uc');
    el_ac = document.getElementById('ac');
    if(el_uc.style.display == 'none'){
        el_ac.style.display = 'none';
        el_uc.style.display = 'flex';
        el.style.backgroundColor = '#FFFFFF';
        sp.classList.remove('text_white');
        sp1.classList.remove('text_white');
    }
    else{
        el_uc.style.display = 'none';
        el_ac.style.display = 'flex';
        el.style.backgroundColor = '#8A9FFF';
        sp.classList.add('text_white');
        sp1.classList.add('text_white');
    }
}

window.onkeydown = (e) => {
    el_uc = document.getElementById('uc');
    el_ac = document.getElementById('ac');
    el = document.querySelectorAll('.mf');
    sp = document.querySelectorAll('.tx');
    if(e.keyCode == 27){
        if(el_uc.style.display == 'none'){
            el_ac.style.display = 'none';
            el_uc.style.display = 'flex';
            for(i = 0; i < el.length; i++){
                el[i].style.backgroundColor = '#FFFFFF';
            }
            for(i = 0; i < sp.length; i++){
                sp[i].classList.remove('text_white');
            }
        }
    }
}