const visiblePage = 'section-1'
const pages = ['section-1','section-2','section-3'];

document.getElementById('section-1-button').addEventListener("click", function(){(toggle_visibility('section-2'))})

function toggle_visibility(id) {
    console.log('made it')
    var old_e = document.getElementById(visiblePage);
    var new_e = document.getElementById(id);
    if(old_e) {
        console.log('old', old_e, 'none');
        old_e.style.display = 'none';
    }
    console.log('new', new_e, 'block');
    new_e.style.display = 'grid';   
    top.visible_div_id = id; 
         
}
