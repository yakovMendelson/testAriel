

function render(template, dataArr) {
    let h = '';
    
    let re = template.match(/#(.*)#/g);
   
    

    for (let i = 0; i < re.length; i++) {
        let p = re[i];
        p = p.replace('#', '').replace('#', '')
        re[i] = p
    };

    for (let i in dataArr){
       
        item= dataArr[i];
        let temp = template;
        re.forEach(p => {
            let prop = item[p];
            temp = temp.replace(`#${p}#`, prop);
        });
        h += temp;
    };
    return h;

}




function renderB(template, item) {
    let h = '';
    
    let re = template.match(/#(.*)#/g);
   
    

    for (let i = 0; i < re.length; i++) {
        let p = re[i];
        p = p.replace('#', '').replace('#', '')
        re[i] = p
    };

    
        let temp = template;
        re.forEach(p => {
            let prop = item[p];
            temp = temp.replace(`#${p}#`, prop);
        });
        h += temp;
    return h;

}
function renderC(template, dataArr) {
    let h = '';
    
    let re = template.match(/#(.*)#/g);
   
    

    for (let i = 0; i < re.length; i++) {
        let p = re[i];
        p = p.replace('#', '').replace('#', '')
        re[i] = p
    };

    dataArr.forEach(item => {
        let temp = template;
        re.forEach(p => {
            let prop = item[p];
            temp = temp.replace(`#${p}#`, prop);
        });
        h += temp;
    });
   
    
    return h;

}