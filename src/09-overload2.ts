// Marta  => [M,a,r,t,a] => string => string[]
// [M,a,r,t,a] =>  Marta => string[] => string

export function parseStr(input:string) : string[];
export function parseStr(input:string[]) : string;
export function parseStr(input:number) : boolean;

/* 
export function parseStr(input:string | string[]): string |string[] {
    if (Array.isArray(input)){
        return input.join(''); //string
    }
    else{
        return input.split(''); //string[]
    }
} */

export function parseStr(input:unknown): unknown {
    if (Array.isArray(input)){
        return input.join(''); //string
    }
    else if (typeof input === 'string'){
        return input.split(''); //string[]
    }
    else if (typeof input === 'number'){
        return  true; //boolean
    }
}

const rtArray = parseStr('Marta');
rtArray.reverse();
/* if (Array.isArray(rtArray)){
    rtArray.reverse();
} */
console.log('rtaArray', 'Nico =>', rtArray);
const rtStr = parseStr(['M','a','r','t','a']);
rtStr.toLowerCase();
/* if(typeof rtStr === 'string'){
    rtStr.toLowerCase();
} */
console.log('rtStr', "['M','a','r','t','a'] =>" ,rtStr);


const rtBoolean= parseStr(12);
