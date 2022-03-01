var sentence='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

var words=()=>{
    sentence=sentence.replace(/[,.]/g, "")
    const wordArray = sentence.split(" ");
    return wordArray
}
var wordArr=words()

var wordFrequency=(wordArr)=>{
    let wordS= new Set(wordArr)
    console.log(wordS.size);
    let word=[...wordArr]
    let wordCount={}
    
    word.forEach((item) => {
        if (wordCount[item] == null){
            wordCount[item] = 1;
        }else {
            wordCount[item] += 1;
            }
        });
 return wordCount
}
console.log(wordFrequency(wordArr));