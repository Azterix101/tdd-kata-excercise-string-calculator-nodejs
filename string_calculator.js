//Create a simple String calculator with a method signature:

const Add = (number_set)=>{
    try{
        console.log(Summation(number_set));
    } catch(e){
        console.error(e.toString());
    }
}

const Summation = (number_set) =>{
    const sum=Filter_out_Unwanted_Characters(number_set);

    if(hasNegativeNumbers(number_set)){
        const negativeNumbers = sum.filter(n => n <0);
        throw new NegativeNumberException(`:${negativeNumbers}`) 
    }
  
    if(sum.length === 0){
        return sum.length;
    }else{
        return sum.filter(isLessThan1000).reduce((total, n) => total + n, 0); 
    }
}

const hasNegativeNumbers = (string_element) => {
    return  string_element.includes('-')
};

const isLessThan1000 = (number) => {
    return number < 1000;
}

function NegativeNumberException (value){
    this.value = value;
    this.message = 'negatives not allowed ';
    this.toString = function() {
        return this.message + this.value;
      };
}

const Filter_out_Unwanted_Characters= (string_list) =>{
    return string_list.match(/-?\d+/g).map(Number);
}

Add("//[-*][%]\n1*2%3");