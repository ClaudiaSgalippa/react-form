import MyArticles from "./MyArticles"; {/*Importiamo l'array di MyArticle.jsx nel MyMain.jsx*/}
import {useState} from "react"; {/*Creazione della variabile di stato*/}

const MyMain = () => {

    const [newArticles, setNewArticles] = useState(""); 
    const [articles, setArticles] = useState("Gli articoli di oggi"); 
    const addArticles = (e) => { 
        e.preventDefault (); 
    }
    
    return (
        <>
            <main>
                <form onSubmit={addArticles} className="onlyForm">
                    <input type="text" placeholder="Nuovo articolo" value={newArticles} onChange={e => {setNewArticles(e.target.value)}}/>
                </form>
            </main>
        </>
    )
};

export default MyMain