const kisi = {

    ad:"hazar",
    soyad: "hamarat",
    yas : 33,
    adSoyad:function(){
        return this.ad + " " +this.soyad
    }
}
debugger
document.write(`kisi ${kisi.adSoyad()} </br>`)


function selamla(isim){
    return "selamlar " + isim
}

document.write(`${selamla("hazar")} </br>`)

let karsila =""

karsila = (ad,soyad) =>{
    return "merhaba nasilsin" + ad +" " + soyad
}

document.write(`${karsila("hazar","hamarat")} </br>`)

/* arrow funk */

let toplam =0

toplam = (fNum,sNum) =>{
    
    return "2 sayinin toplami " + (Number(fNum) + Number(sNum))
}

document.write(`${toplam("1","24")} </br>`)


/*Class*/

class Hayvan {
    constructor(ad,soyad){
        this.ad= ad 
        this.soyad = soyad
    }
    konus(){
        return "miyav"
    }

}

const a =new Hayvan("grogu","hamaeat")
document.write(`hayvan soyad: ${a.soyad} </br>`)

class kedi extends Hayvan{
    constructor(tur){
        super()
        this.tur = tur
    }
}

const b = new kedi("tekir")
document.write(`kedi ad: ${b.konus()} </br>`)
document.write(`kedi tur: ${b.tur} </br>`);


let text  ={
    "evler" : [
        {"ev1":1},
        {"ev2":2}


    ]
}



 