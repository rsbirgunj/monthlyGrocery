import React from 'react';


var date = () => {
    var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var d = new Date();
    var monthName=['Plan for the month of '+ months[d.getMonth()]];
    return(
        <div>
                {monthName}
           
        </div>
    );
}

export default date;