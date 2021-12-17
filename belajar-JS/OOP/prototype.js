function mail (){
    this.from = 'maulanatoyek@gmail.com'
}
mail.prototype.sendMessage = function n(msg,to){
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
}

const myMail = new mail();
myMail.sendMessage("woi ayo gelod","everybody")

//tanpa protorype

function surat (){
    this.from = 'buzzerp500@gmail.com'
    this.sendPesan = function(msg,to){
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
    }
}

// surat.prototype.sendPesan = (msg, to) => {
//     console.log(`you send: ${msg} to ${to} from ${this.from}`);
// }

const suratku = new surat()
suratku.sendPesan("Go", "the blog")


//using Class

class Poster{
    constructor(){
        this.from = `pengirim@dicoding.com`
    }
    sendMessage(msg,to = 'everybody'){
        console.log(`message : ${msg} to ${to} from ${this.from}`);
    }
}
const posterku = new Poster()
posterku.sendMessage('matamu')