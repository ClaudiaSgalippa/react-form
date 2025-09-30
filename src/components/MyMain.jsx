import MyArticles from "./MyArticles"; {/*Importiamo l'array di MyArticle.jsx nel MyMain.jsx*/}
import {useState} from "react"; {/*Creazione della variabile di stato*/}

const MyMain = () => {
    
    const [newArticles, setNewArticles] = useState(""); 
    
    return (
        <>
            <main>
                <div className="onlyMain">
                    <input type="text" placeholder="Nuovo articolo" value={newArticles} onChange={e => {setNewArticles(e.target.value)}}/>
                </div>
            </main>
        </>
    )
};

export default MyMain