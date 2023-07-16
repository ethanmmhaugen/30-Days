const LOCAL_STORAGE_VISIBLE_PAGE = 'section-1'
let visiblePage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_VISIBLE_PAGE)) || 'section-1'

document.getElementById('section-1-next-button').addEventListener("click", function(){(toggle_visibility('section-2', visiblePage))})
document.getElementById('section-2-prev-button').addEventListener("click", function(){(toggle_visibility('section-1', visiblePage))})
document.getElementById('section-2-next-button').addEventListener("click", function(){(toggle_visibility('section-3', visiblePage))})
document.getElementById('section-3-prev-button').addEventListener("click", function(){(toggle_visibility('section-2', visiblePage))})
document.getElementById('section-3-finish-button').addEventListener("click", function(){})

function toggle_visibility(id, oldPage) {
    console.log('made it')
    var old_e = document.getElementById(oldPage);
    var new_e = document.getElementById(id);
    if(old_e) {
        console.log('old', old_e, 'none');
        old_e.style.display = 'none';
    }
    console.log('new', new_e, 'block');
    new_e.style.display = 'flex';   
    visiblePage = id; 
    save()     
}

function save(){
    localStorage.setItem(LOCAL_STORAGE_VISIBLE_PAGE, JSON.stringify(visiblePage))
}

toggle_visibility(visiblePage, 'section-1');
