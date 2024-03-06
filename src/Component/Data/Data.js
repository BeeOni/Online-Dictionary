import React from "react";
import "./Data.css";


const Data = ({ data }) => {
    return (
      <div>
        {data.length > 0 ? (
          <div className="ansdiv">
            {data.map((item) => (
              <div>
                <div>
                  <p className="pword">{item.word}</p>
                </div>
  
                <div>
                  {item.meanings.map((meaning) => (
                    <div>
                      <p>
                        {meaning.partOfSpeech} <hr/>
                      </p>
                      <ul>
                        <p>meaning</p>
                        {meaning.definitions.map((definition) => (
                          <li>
                            {definition.definition}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="p3">No Data</p>
        )}
      </div>
    );
};
  
  export default Data;

// export default function Data({data}){
//     // const data = data.pros
//     return(
//         <div>
//             {data.length > 0 ? (
//                 <div>
//                     {data.map((item) => (
//                         <div>
//                             <div>
//                                 <p className="font-bold text-2xl">{item.word}</p>
//                             </div>

//                             <div className="">
//                                 {item.meanings.map((meaning) => (
//                                    <div className="leading-8 mt-4">
//                                     <p className="font-bold text-base text-[#5E81FF]">{meaning.partOfSpeech} <hr className="w-60 mt-2"/>
//                                     </p>
//                                     <ul>
//                                         <p className="italic">meaning</p>
//                                         {meaning.definitions.map((definition) => (
//                                             <li className="list-disc list-[#5E81FF]">
//                                                 {definition.definition}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                    </div> 
//                                 ))}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 <p>No Data</p>
//             )}
//         </div>
//     );
// };
            