
let postProject = [];

//Fungsi ambil data

function projectSubmit(){
    let name = document.getElementById("input-project").value;
    let startDate = new Date(document.getElementById("input-start-date").value);
    let endDate= new Date(document.getElementById("input-end-date").value);
    let desc = document.getElementById("input-desc").value;
    let projectCheckbox = document.querySelectorAll('input[name="checkall"]:checked');
    let image = document.getElementById("input-upload-image").files;

//Timeline Mulai dan Akhir
    let timeLine;
    
    if (startDate < endDate) {
        timeLine = new Date(endDate - startDate)
    } else {
        timeLine = new Date(startDate - endDate)
    }

    // let years = (timeLine.getFullYear()-1970);
    // let month = timeLine.getMonth();
    // let days = timeLine.getDay();

    // if (timeLine / (1000*3600*24) < 0) {
    //     return alert("Waktu Selesai project tidak bisa sebelum dari waktu mulai project!")
    // } else {
    //     timeLine = timeLine
    // }

    let distance = Math.floor(timeLine / (1000 * 3600 * 24))
    let distanceMonth = Math.floor(distance/30)
    //let extraDays = distance % (30*distanceMonth)
    let distanceYears = Math.floor(distanceMonth/12)

    console.log(distance);

//menghitung timeline project
    if (distance < 30) {
        timeLine = "Dibawah 1 Bulan"
    } else if ( distance >= 30 && distance < 365 ) {
        timeLine = `${distanceMonth} Bulan`
    } else {
        timeLine = `sekitar ${distanceYears} Tahun`
    }

    console.log(timeLine);

    var ceklis = "";
    for(var i = 0; i < projectCheckbox.length; i++){
        if(projectCheckbox[i].checked){
            ceklis = ceklis + projectCheckbox[i].value +" ";
            // console.log("ini ceklis dalem = " + ceklis)
            // console.log("ini ceklis dalem = " + projectCheckbox)
            // console.log("ini ceklis dalem = " + projectCheckbox[i])
        }
    }
    // console.log("ini ceklis luar = " + ceklis)

//validasi
    if(name === "") {
        return alert("Nama Project tidak boleh kosong!")
    } 
    else if (startDate === "") {
        return alert("Durasi awal project tidak boleh kosong!")
    }
    else if (endDate === "") {
        return alert ("Durasi akhir project tidak boleh kosong!")
    }
    else if (desc === "") {
        return alert ("Deskripsi tidak boleh kosong!")
    }
    else if (projectCheckbox.length == 0) {
        return alert ("Checklist minimal salah satu project!!")
    }
    
    if (image.length === 0) {
        return alert ("Silahkan upload image project!")
    } else {
        image = URL.createObjectURL(image[0]);
    }

    let fullValue = {
        name: name,
        startDate: startDate,
        endDate: endDate,
        desc: desc,
        projectCheckbox: ceklis,
        image: image,
        timeLine: timeLine
    }

    //console.log(fullValue);
    
    postProject.push(fullValue)

        //console.log(postProject[0].desc)
    innerRender()
}

function innerRender() {
    let namaSaya = document.getElementById("project-list");

    namaSaya.innerHTML = "";
    
    postProject.forEach((data) => {
        namaSaya.innerHTML += `<div class="project-item" id="project-item">
        <div>
        <a href="#" style="text-decoration: none; color: black"><img src="${data.image}" alt=""></a>
        <div class="project-title">
            <h2>${data.name}</h2>
            <p>Durasi : ${data.timeLine}</p>
        </div>
            <div class="project-desc">
            <p>${data.desc}</p>
            </div>
        <div class="checkbox-icon">
        ${data.projectCheckbox}
        </div>
        <div class="button-project">
        <button type="button" onclick="">Edit</button>
        <button class="btn-kedua" type="button" onclick="">Delete</button>
        </div>
        </div>`;
        //console.log(data)
    });
}