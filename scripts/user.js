function ShowBook(){
    document.getElementById("book-tab").style.display = 'block'
    document.getElementById("form-tab").style.display = 'none'
}

function ShowForm(){
    document.getElementById("form-tab").style.display = 'block'
    document.getElementById("book-tab").style.display = 'none'
    fetch('/specializations')
    .then(data => {
        const specializationSelect = document.getElementById('spec');
        specializationSelect.innerHTML = '';
        data.forEach(spec => {
            const option = document.createElement('option');
            option.value = spec.id;
            option.textContent = spec.name;
            specializationSelect.appendChild(option);
        });
        loadDoctors();    
    })
    .catch(error => console.error('Error:', error));
}

function loadDoctors(){
    fetch('/doctors')
    .then(response => response.json())
    .then(data => {
        const doctorSelect = document.getElementById('name-doctor');
        doctorSelect.innerHTML = '';
        data.forEach(doctor => {
            const option = document.createElement('option');
            option.value = doctor.id;
            option.textContent = doctor.name;
            doctorSelect.appendChild(option);
        });
    })
    .catch(error => console.error('Error:', error));

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
            specializaionId: spec,
            DoctorId: nameDoctor,
            examinationId: ex,
            date: date,
            time: time
        })
    })
    .then(response => {
        if (response.ok) {
            alert('Successfully booked');
        }
        else{
            alert('Failed!');
        }
    })
    .catch(error => console.error('Error:', error));
});