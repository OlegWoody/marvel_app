// import CharInfo from "../charInfo/CharInfo";
// import CharList from "../charList/CharList";
// import ErrorBoundary from '../errorBoundary/ErrorBoundary';
// import Search from "../search/Search";
// import { useState } from "react";

// const MainPage = () =>{
//     const [selectedChar, setSelectedChar] = useState('')

//     const selectForInfo = (id) =>{
//         setSelectedChar(id)
//     }

//     return (
//         <div className="char__content">
//             <CharList selectForInfo={selectForInfo}/>
//             <ErrorBoundary>
//                 <CharInfo selectedId={selectedChar}/>
//             </ErrorBoundary>
//             <Search/>
//         </div>
//     )
// }

// export default MainPage;