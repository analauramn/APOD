function nasaresquested (){ 
  
    //Chama a API para o arquivo
    const urlB = 'https://api.nasa.gov/planetary/apod?';
    const apiKey = config.NASA_API_KEY;
    let dateb = "&" + "date=" + "2021-09-16" + "&";
    let fullUrl = urlB + apiKey + dateb;

    //Colocar outras datas
    // const datePicker = document.getElementById ("datePicker");
    // datePicker.addEventListener('change', (e) );

    //Faz o pedido Http
    let xmlhttp = new XMLHttpRequest ();

    //Verifica se está tudo correto com a API, se estiver funcionando, roda o restante da função
    xmlhttp.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse (this.responseText);

            //Pega os dados da API
            let copyright = data ["copyright"];
            let title = data ["title"];
            let date = data ["date"];
            let explanation = data ["explanation"];
            let hdurl = data ["hdurl"];
            let media_type = data ["media_type"];
            let url = data ["url"];
        
            let imageType = `<a id="hdurl" href="" target="_blank"><img id="image" src="" alt="Imagem da Nasa" ></a>`;
            let videoType = ` 
                <div class="ratio ratio-16x9">
                <iframe id="video" src=""       frameborder="0"
                allowfullscreen></iframe>
                </div>
            `;

    //Coloca os dados no HTML através do DOM
            document.getElementById ("titulo").innerHTML = title;
            document.getElementById ("data").innerHTML = date;
            document.getElementById ("copyright").innerHTML = copyright;
            document.getElementById ("explanation").innerHTML = explanation;

            
    //Verifica o tipo de media que é, e responde de acordo
            if (media_type === "video"){
                document.getElementById("media").innerHTML = videoType;
                document.getElementById ("video").src = url;
            }
            else {
                document.getElementById("media").innerHTML = imageType;
                document.getElementById("image").src = url;
                document.getElementById("hdurl").href = hdurl
            }
        }
    }

    xmlhttp.open ("GET", fullUrl, true);
    xmlhttp.send ();
}    
nasaresquested().onload;