var listaFilmes = [];
listaFilmes[0] = "https://upload.wikimedia.org/wikipedia/pt/1/1b/Schoolrockposter.jpg";

listaFilmes[1] = "https://static.wixstatic.com/media/da06f2_9e0748f8e4fc45eba701ee2bd5581c11~mv2.jpg/v1/fill/w_640,h_998,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/da06f2_9e0748f8e4fc45eba701ee2bd5581c11~mv2.jpg";

listaFilmes[2] = "https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg";

listaFilmes[3] = "https://upload.wikimedia.org/wikipedia/pt/6/62/How_to_Train_Your_Dragon_%28filme%29_Poster.jpg";

listaFilmes[4] = "https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg";

for(var i = 0;i < listaFilmes.length;i++){
    document.write('<img src=' + listaFilmes[i] + '>');
}