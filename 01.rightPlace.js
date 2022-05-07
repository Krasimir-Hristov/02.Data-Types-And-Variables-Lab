function solve(firststring,char,secondstring){
   let newString = firststring.replace("_",char);
   let result = (newString === secondstring) ?
       "Matched" : "Not Matched"

   console.log(result);

//////////////////////////////////////////////////////
   if(newString === secondstring){
       console.log("Matched")
   }else{
       console.log("Not Matched")
   }
}
solve('Str_ng', 'i',`String` )