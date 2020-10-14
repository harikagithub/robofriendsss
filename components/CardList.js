import React from 'react';
import Card from './Card';


  const CardList= ({robotnames}) => {
    return (
	 <div>
	   {
        robotnames.map((user, i) => {
         return (
          <Card
            key={i}
            id={robotnames[i].id}
            name={robotnames[i].name}
            email={robotnames[i].email}
            />
          );
        })
       }
     </div>
    );     	
  }

 export default CardList;    	    
