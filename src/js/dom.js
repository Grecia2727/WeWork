document.getElementById("buttonStart").addEventListener('click', () => {
    getData('./data.json', (err, dataCompanies) => {
        let search = document.getElementById('textSearch').value.toUpperCase();
        let searchWorkers = document.getElementById('workerInput').value.toUpperCase();
        filterCompanies(dataCompanies, search);
        filterWorkers(dataCompanies, searchWorkers);
    })
});

document.getElementById('textSearch').addEventListener('keyup', () => {
    document.getElementById("buttonStart").click();
});