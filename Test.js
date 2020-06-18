let dataStudents = {
    1: { name: 'yakov1', age: 20, year: 1, successful: true ,ID:3215648614},
    2: { name: 'yakov2', age: 21, year: 2, successful: false,ID:3856489646},
    3: { name: 'yakov3', age: 22, year: 5, successful: false,ID:8564564564},
    4: { name: 'yakov4', age: 23, year: 1, successful: false,ID:8549499656},
    5: { name: 'yakov5', age: 24, year: 3, successful: false ,ID:4585646556},
    6: { name: 'yakov6', age: 25, year: 2, successful: true ,ID:8646485685},
    7: { name: 'yakov7', age: 26, year: 3, successful: false ,ID:748968766},
    8: { name: 'yakov8', age: 27, year: 6, successful: true ,ID:8456658549},
    9: { name: 'yakov9', age: 28, year: 1, successful: false ,ID:8413686857},
    10: { name: 'yakov10', age: 29, year: 4, successful: false ,ID:849499499},
    11: { name: 'yakov11', age: 30, year: 2, successful: false ,ID:64366546546},
    12: { name: 'yakov12', age: 31, year: 6, successful: false ,ID:1456464666},
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