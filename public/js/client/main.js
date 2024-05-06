window.addEventListener('load', () => {
    const loading = document.getElementById('loadingPage');
    loading.style.display = 'none';
});

function scrollToElement(event, elementId) {
    event.preventDefault();
    const element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: "smooth" });
}

function copyText(elementId){
    const text = document.getElementById(elementId);
    navigator.clipboard.writeText(text.innerText);
    Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Copy To Clipboard",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
    });
}

class PopUp{
    startLoading(title){
        Swal.fire({
            title,
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
    }

    stopLoading(){
        Swal.close();
    }

    status(title, text, icon){
        Swal.fire({
            title,
            text,
            icon
        });
    }
}

const form = document.getElementById('form');

if (form != null)
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let popup = new PopUp();
    popup.startLoading('Loading');
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            popup.stopLoading();
            if(response.status == 200) popup.status('Success', 'Please Await Our Email', 'success');
            else popup.status('Error', 'Please Try Again Next Time', 'error');
        })
        .catch((error) => {
            popup.stopLoading();
            popup.status('Error', 'Please Try Again Next Time', 'error');
        })
        .then( () => {
            form.reset();
        });
});




const keyCells = document.querySelectorAll('.card-overlay table td:first-child');

let maxWidth = 0;

keyCells.forEach(cell => {
    const cellWidth = cell.offsetWidth;
    maxWidth = Math.max(maxWidth, cellWidth);
});

keyCells.forEach(cell => {
    cell.style.width = maxWidth + 'px';
});