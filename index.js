const express = require('express')
const app = express()
const port = 3000

app.get('/search/:finds', 
    (req, res) =>{
         let resultFinds = findme(req.params.finds)
         let setKalimat = findKalimat(req.params.finds, resultFinds)
         res.send(setKalimat)
    }
)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


var library =  ['pro', 'gram', 'merit', 'program', 'it', 'programmer']
const findme =  (data) => {
    let datas = []
    library.forEach((num, index) => {
        if(data.search(num) >= 0){
            if(data.indexOf(num) == 0){
                datas.push(num);
            }
        }
    });
    return datas;
}


const findKalimat = (data, finds) => {
    let datas = []
    finds.forEach((cari, index) => {
        datas.push(findFinish(data, cari, []))
    });
    return datas
}

const findFinish = (data, finds, datas) => {
    if(datas.length == 0){
        datas.push(finds);
    }

    library.forEach((num, index) => {
        if(data.search(finds+num) >= 0){
            if(data.indexOf(finds+num) == 0){
                datas.push(num);
                findFinish(data, finds+num, datas)
            }
        }
    });
    return datas
}
