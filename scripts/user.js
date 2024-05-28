function ShowBook(){
    document.getElementById("book-tab").style.display = 'block'
    document.getElementById("form-tab").style.display = 'none'
}

function ShowForm(){
    document.getElementById("form-tab").style.display = 'block'
    document.getElementById("book-tab").style.display = 'none'
}

window.onload = function(){
    ShowBook()
}

document.getElementById("book-form").addEventListener("submit", function(e){
    e.preventDefault()      // Прерывание отправки
    const spec = document.getElementById("spec").value;
    const nameDoctor = document.getElementById("name-doctor").value;
    const ex = document.getElementById("ex").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    fetch('/book_form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            spec: spec,
            nameDoctor: nameDoctor,
            ex: ex,
            date: date,
            time: time
        })
    }).then(response => response.json())
    })

})   