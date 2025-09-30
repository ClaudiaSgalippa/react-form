import MyArticles from "./MyArticles"; {/*Importiamo l'array di MyArticle.jsx nel MyMain.jsx*/}
import {useState} from "react"; {/*Creazione della variabile di stato*/}

const MyMain = () => {

    const [articles, setArticles] = useState(MyArticles);

    const [newArticles, setNewArticles] = useState(""); 

    const addArticles = (e) => { 
        e.preventDefault ();
        
        const updateArticles = {
            id: articles.length + 1,
            title: newArticles,
        };

        setArticles ([...articles, updateArticles]);
        setNewArticles("");
    }
    
    return (
            <main>
                <ul> 
                    {articles.map((articles) => ( 
                        <li key={articles.id}>{articles.title}</li>
                    ))}
                </ul>
                <form onSubmit={addArticles} className="onlyForm">
                    <input type="text" placeholder="Nuovo articolo" value={newArticles} onChange={(e) => {setNewArticles(e.target.value)}}/>
                    <button type="submit">Inserisci un nuovo articolo</button>
                </form>
            </main>
    )
};

export default MyMain