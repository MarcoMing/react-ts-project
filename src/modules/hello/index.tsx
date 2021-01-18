
import * as React from 'react';


interface Props {
  name: string
  enthusiasmLevel?: number;
}


function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

export const Hello: React.SFC<Props>  = (props: Props) => {

   const { name, enthusiasmLevel = 0 } = props;

   if (enthusiasmLevel <= 0) {
     throw new Error('You could be a little more enthusiastic. :D');
   }

   return (
     <div className="hello">
       <div className="greeting">
         Hello {name + getExclamationMarks(enthusiasmLevel)}
       </div>
     </div>
   );

}
