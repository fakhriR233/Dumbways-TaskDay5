
let postProject = [];

//Fungsi ambil data

function projectSubmit(){
    let name = document.getElementById("input-project").value;
    let startDate = document.getElementById("input-start-date").value;
    let endDate= document.getElementById("input-end-date").value;
    let desc = document.getElementById("input-desc").value;
    let projectCheckbox = document.querySelectorAll('input[name="checkall"]:checked');
    let image = document.getElementById("input-upload-image").files;

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
        image: image
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
            <p>Durasi : X bulan</p>
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