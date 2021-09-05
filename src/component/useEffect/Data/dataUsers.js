import React from 'react'


const DataUsers = ({users}) => {
    return (
        <div className="container-fluid">
            <h2>List of Data from JSONplaceholder</h2>
            <div className="container-fluid mt-5">
                
                    
                {

                        users.map((curElem) => {
                        
                            const {title,body } = curElem;
                        return (
                            <div className="mb-5">
                             <h3>{title}</h3>
                             <p>{body}</p>
                             </div>
                        )
                })        

                }
                    
                </div>
            </div>
        
    )
}

export default DataUsers
