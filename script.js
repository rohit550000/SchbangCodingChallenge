const create = () => {
    const maininput = document.querySelector('.maininput');
    const container = document.querySelector('.container')

    if (maininput.value.length <= 0) {
        return alert('Please Enter something');

    } else {
        const divel = document.createElement('div')
        divel.className = 'innrcontainer'
        divel.innerHTML = `<div class='funtions'>
                            <input class='bottominput' type="text" name=""  id="" />
                            <button class='edit'>edit</button>
                            <button class='delete'>delete</button>
                            <div> `
        container.appendChild(divel);

        const bottominput = divel.querySelector('.bottominput')
        bottominput.value = maininput.value
        maininput.value = ''
        bottominput.setAttribute('readonly', 'readonly')
        const edit = divel.querySelector('.edit');
        const deletebtn = divel.querySelector('.delete');

        edit.addEventListener('click', () => {
            if (edit.innerHTML === 'edit') {
                edit.innerHTML = 'save'
                bottominput.removeAttribute('readonly')
                alert('you can edit now')
            } else {
                edit.innerHTML = 'edit'
                bottominput.setAttribute('readonly', 'readonly')
                alert('your data is saved')
            }

        })

        deletebtn.addEventListener('click', () => {
            divel.remove()
        })
    }

    removeall()
}

const removeall = () => {

    if (!!document.querySelector('.removebtnclass')) {
        document.querySelector('.removebtnclass').remove()
    }
    const removealldiv = document.querySelector('.removeall')
    const removeallbtn = document.createElement('button')
    removeallbtn.className = 'removebtnclass'
    removeallbtn.textContent = 'Remove all'
    removealldiv.appendChild(removeallbtn);

    removeallbtn.addEventListener('click', () => {
        const all = document.querySelectorAll('.innrcontainer')
        all.forEach((ele) => {
            ele.remove()
            window.location.reload()
        })
    })


}