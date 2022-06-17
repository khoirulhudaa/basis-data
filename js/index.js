document.getElementById('brand').addEventListener('click', () => {
    window.location.reload();
})

document.getElementById('comment').addEventListener('click', () => {
    document.getElementById('pageKonsultasi').classList.toggle("pageKonsultasiOpen");
})

document.getElementById('btnDanger').addEventListener('click', () => {
    document.getElementById('pageKonsultasi').classList.remove("pageKonsultasiOpen");
})

document.getElementById('reguler').addEventListener('click', () => {
    document.getElementById('keberangkatan2').classList.add('none');
})