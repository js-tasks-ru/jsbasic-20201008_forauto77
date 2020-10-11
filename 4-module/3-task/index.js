/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    for (let i = 1; i < table.rows.length; i++){
        let status = table.rows[i].lastElementChild;
        let gender = status.previousElementSibling;
        let age = gender.previousElementSibling;
        if (status.hasAttribute('data-available')){
            if (status.getAttribute('data-available') == 'true') {
                table.rows[i].classList.add('available')
            } else {
                table.rows[i].classList.add('unavailable')
            }
        } else {
            table.rows[i].hidden = true;
        };

        if (gender.innerHTML == 'm') {
            table.rows[i].classList.add('male')
        } else {
            table.rows[i].classList.add('female')
        }

        if (+age.innerHTML < 18) {
            table.rows[i].style.textDecoration = 'line-through'
        } 
    }

}


