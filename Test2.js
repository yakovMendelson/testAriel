let dataStudents = {
    1: { name: 'yakov1', age: 20, year: 1, successful: true ,ID:3215648614,imag:"poto1.jpg"},
    2: { name: 'yakov2', age: 21, year: 2, successful: false,ID:3856489646,imag:"poto2.jpg"},
    3: { name: 'yakov3', age: 22, year: 5, successful: false,ID:8564564564,imag:"poto3.jpg"},
    4: { name: 'yakov4', age: 23, year: 1, successful: false,ID:8549499656,imag:"poto4.jpg"},
    5: { name: 'yakov5', age: 24, year: 3, successful: false ,ID:4585646556,imag:"poto5.jpg"},
    6: { name: 'yakov6', age: 25, year: 2, successful: true ,ID:8646485685,imag:"poto6.jpg"},
    7: { name: 'yakov7', age: 26, year: 3, successful: false ,ID:748968766,imag:"poto7.jpg"},
    8: { name: 'yakov8', age: 27, year: 6, successful: true ,ID:8456658549,imag:"poto8.jpg"},
    9: { name: 'yakov9', age: 28, year: 1, successful: false ,ID:8413686857,imag:"poto9.jpg"},
    10: { name: 'yakov10', age: 29, year: 4, successful: false ,ID:849499499,imag:"poto10.jpg"},
    11: { name: 'yakov11', age: 30, year: 2, successful: false ,ID:64366546546,imag:"poto11.jpg"},
    12: { name: 'yakov12', age: 31, year: 6, successful: false ,ID:1456464666,imag:"poto12.jpg"},
};



let templetS_A = `
                <div class="contanerListSA">
                 <div> <label>Name: </label> <span>#name#</span> </div>
                 <div> <label>ID: </label> <span>#ID#</span> </div>
                <div> <label>Age: </label> <span>#age#</span> </div>
                <div> <label>Year: </label> <span>#year#</span> </div>
                <div> <label>Successful: </label> <span>#successful#</span> </div>
                </div>
            `;

let templetS_B= `
                <div class="contanerListSB">
                 <div> <label>Name: </label> <span>#name#</span> </div>
                <div> <label>Age: </label> <span>#age#</span> </div>
                <div> <label>Year: </label> <span>#year#</span> </div>
                <div> <label>Successful: </label> <span>#successful#</span> </div>
                </div>
            `;

let listStuAHTML= document.querySelector(".templateSA") ;
listStuAHTML.innerHTML=render(templetS_A,dataStudents) ;          

let listStuBHTML= document.querySelector(".templateSB") ;
listStuBHTML.innerHTML=render(templetS_B,dataStudents) ;   


class NewCard extends HTMLElement{
    constructor(){
        super()
        console.log("gdshgds");
        
        let shadow = this.attachShadow({mode :'open'});
        this.div = document.createElement('div');
        this.img = document.createElement('img');
        this.details = document.createElement('div');

        this.div.className='divCon';
        this.details.className='divDet';

        shadow.appendChild(this.div);
        this.div.appendChild(this.img);
        this.div.appendChild(this.details);


        this.idS = this.getAttribute('idS');
        this.dataStu = dataStudents[this.idS];
        this.img.src=`${this.dataStu['imag']}`;

        this.setAttribute('year',this.dataStu['year']);
        this.setAttribute('successful',this.dataStu['successful']);


        let a = this.getAttribute('year');
        let background =`rgb(${a*30},${a*45},${a*55})`
        let b = (this.getAttribute('successful')=='true');

        let color =b?'blue':'black';
        let buld =b?'bold':'normal';
   
        let style = document.createElement('style');
        style.textContent = `
        img{
            width: 120px;
            height: 120px;
        }
        .contanerListSA{
           
            width: 120px;
            height: 120px;
         }
         .divCon{
            background: ${background};
            border: 2px solid black;
            margin: 10px; 
            width: 120px;
            height: 220px;
         }
         .divDet{
             color:${color};
             font-weight: ${buld};
         }`;
         
        shadow.appendChild(style)
        this.details.innerHTML=renderB(templetS_A,this.dataStu)
    }
}
customElements.define('new-card',NewCard)