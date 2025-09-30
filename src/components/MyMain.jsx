import MyArticles from "./MyArticles"; {/*Importiamo l'array di MyArticle.jsx nel MyMain.jsx*/}
import {useState} from "react"; {/*Creazione della variabile di stato*/}

const MyMain = () => {

    const [articles, setArticles] = useState(MyArticles); {/*Funzione di Hook per gestire i cambiamenti dei dati*/}

    const [newArticles, setNewArticles] = useState(""); {/*Funzione di Hook per gestire i cambiamenti dei dati*/}

    const addArticles = (e) => {  
        e.preventDefault (); {/*Per impedire il refresh della pagina*/}
        
        const updateArticles = {
            id: articles.length + 1, 
            title: newArticles,
        }; {/*Facciamo in modo di poter inserire un nuovo oggetto*/}

        setArticles ([...articles, updateArticles]); 
        setNewArticles(""); {/*Aggiorniamo l'array con i nuovi articoli*/}
    };

    const removeArticles = (id) => { {/*Creiamo la funzione per il "filtraggio" dell'id*/}
        setArticles(articles.filter((article) => article.id !== id));
    };
    
    return (
            <main>
                <ul> 
                    {articles.map((articles, id) => ( 
                        <li key={articles.id}>{articles.title} <button className="delete" onClick={() => removeArticles(articles.id)}>Delete</button></li>
                    ))}
                </ul>
                <form onSubmit={addArticles} className="onlyForm">
                    <input type="text" placeholder="Nuovo articolo" value={newArticles} onChange={(e) => {setNewArticles(e.target.value)}}/>
                    <button type="submit" className="add">Inserisci un nuovo articolo</button>
                </form>
            </main>
    )
};

export default MyMain