
// function truncateText(selector, maxLength) {
//     var element = document.querySelector(selector),
//         truncated = element.innerText;
//     console.log(element)
//     console.log(truncated)
//     if (truncated.length > maxLength) {
//         truncated = truncated.substr(0,maxLength) + '...';
//     }
//     return truncated;
// }

// const texts = document.getElementsByClassName('highlights')
// console.log(texts)

// function limit (string = '', limit = 0) {  
//     return string.substring(0, limit)
  //}
  function limitText(classnameTxts,length){
    for (let i = 0; i < classnameTxts.length; i++) {
        const text = classnameTxts[i].innerHTML;
        if(text.length > length){
            classnameTxts[i].innerHTML = text.substring(0,length) + '.....'
        }
    }
}
  $(document).ready(function(){
    
    let headlinestexts = document.getElementsByClassName('headlines')
    console.log(headlinestexts[0].innerHTML)
    limitText(headlinestexts,60)

    let highlightstexts = document.getElementsByClassName('highlights')
    console.log(highlightstexts.length)
    limitText(highlightstexts,150)


    // var txt= $('.highlights').text();
    // console.log(txt)
    // if(txt.length > 155)
    //     $('.highlights').text(txt.substring(0,150) + '.....');
  })