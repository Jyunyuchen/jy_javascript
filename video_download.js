
let fileName = '';
function btnClick(){
    fetch("http://localhost:8080/youtube-download")
    .then(response => {
        // 獲取headers
        const headers = response.headers;
        const contentDisposition = headers.get('Content-Disposition');
        fileName = contentDisposition.split(';');
        fileName = decodeURIComponent(fileName[2].split('=')[1].replace(/"/g, ''));
        console.log(fileName);
        return response.blob()
    })
    .then(blob =>{
        const file = new File([blob], fileName);
        saveAs(file);
    });

}