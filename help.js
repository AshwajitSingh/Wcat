function helpFn(){
    console.log(`What Excatly Wcat Do:

    1- wcat filepath => displays content of the file in the terminal 
    2- wcat filepath1 filepath2 filepath3... => displays content of all files in the terminal(contactinated form) in the given order. 
    3- wcat -s filepath => convert big line breaks into a singular line break 
    
    4- wcat -n filepath => give numbering to all the lines  
    5- wcat -b filepath => give numbering to non-empty lines  
    6- wcat filepath > filename2path => put all the content of filename into filename2 by overriding and also creates ~~filename2~~ if it doesn't exist. 
    7- wcat filename2path >> filename2path => append all the content of filename into ~~filename2~~
    8- node wcat -s filename > filename2 =>get the file content of filename remove large spaces and save the output in filename2
    `);
}

module.exports ={
    helpkey:helpFn,
}