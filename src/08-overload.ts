// Marta  => [M,a,r,t,a] => string => string[]
// [M,a,r,t,a] =>  Marta => string[] => string

function parseStr(input:string | string[]): string |string[] {
    if (Array.isArray(input)){
        return input.join(''); //string
    }
    else{
        return input.split(''); //string[]
    }
}
const rtArray = parseStr('Marta');
// rtArray.reverse();
if (Array.isArray(rtArray)){
    rtArray.reverse();
}
console.log('rtaArray', 'Nico =>', rtArray);
const rtStr = parseStr(['M','a','r','t','a']);
// rtStr.toLowerCase();
if(typeof.rtStr === 'string'){
    rtStr.toLowerCase();
}
console.log('rtStr', "['M','a','r','t','a'] =>" ,rtStr);
