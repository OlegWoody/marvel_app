import useRequest from "../hooks/http.hook";

const _apiBase="https://gateway.marvel.com:443/v1/public";
// const _apiComics="https://gateway.marvel.com:443/v1/public/characters";
const _apiKey="apikey=4a1cee68a845fc20042b5dc8b9523728";
const _baseOffSet=290;
const _issueNumber=16

const MarvelService = () =>{
    const {request, error, loading} = useRequest()


// 4a1cee68a845fc20042b5dc8b9523728
// _apiBase='https://gateway.marvel.com:443/v1/public/characters';
// Усі, ліміт 9: 
// https://gateway.marvel.com/v1/public/characters?limit=9&offset=210&apikey=729b5cdb5d9dcfb32ca407c6c566b080
// By ім'я:
// https://gateway.marvel.com:443/v1/public/characters?name=ИМЯЯЯЯЯЯ&apikey=4a1cee68a845fc20042b5dc8b9523728
// By id:
//(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=4a1cee68a845fc20042b5dc8b9523728`)


    const getAllCharacters = async (offSet=_baseOffSet) =>{
            const res = await request(`${_apiBase}/characters?limit=9&offset=${offSet}&${_apiKey}`);
            return res.data.results.map(_transformChar);
        }

    const getCharactersById = async (id, type='characters') =>{
            const res = await request(`${_apiBase}/${type}/${id}?${_apiKey}`)
            if(type==='characters'){
                return _transformChar(res.data.results[0])
            } else if(type==='comics'){
                console.log(res.data.results[0])
                return _transformComics(res.data.results[0])
            } else {
                return
            }
        }

    const getCharactersByName = async (name) =>{
        const res = await request(`${_apiBase}/characters?name=${name}&${_apiKey}`)   
        if(res.data.count >= 1){
            return _transformChar(res.data.results[0])
        } else{
            return res.data.results
        }
    }

    const getAllComics = async (offSet=_baseOffSet) =>{
        const res = await request(`${_apiBase}/comics?limit=8&offset=${offSet}&${_apiKey}`);
        return res.data.results.map(_transformComics);
    }

    const getComicsByName = async (name, issueNumber=_issueNumber) =>{
        const encodedName = encodeURIComponent(name);
        const res = await request(`${_apiBase}/comics?title=${encodedName}&dateDescriptor=2006&issueNumber=${issueNumber}&${_apiKey}`)   
        if(res.data.count >= 1){
            return _transformComics(res.data.results[0])
        } else{
            return res.data.results
        }
    }

    const _transformComics= (comics) =>{
    console.log(comics)
    const date = new Date(comics.modified);
    const formattedModified = date.toLocaleDateString('en-CA');  
        // let objStyle = { objectFit: "cover" };
        // if (char.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" || char.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708") {
        //     objStyle = { objectFit: "fill" };
        // } 
            return{
                id: comics.id,
                name: comics.title,
                series: comics.series.name,
                description: comics.description && comics.description.length > 0 ? comics.description : "The comic has no description",
                modified: formattedModified,
                saleDate: comics.dates,
                issueNumber: comics.issueNumber,
                characters: comics.characters.items,
                author: comics.creators.items,
                // language: comics.language,
                fullDescription: comics.description && comics.description.length > 0  ? comics.description : "The comic has no description",
                // comics.description.length > 0 ? (comics.description.length > 170 ? comics.description.substring(0, 170) + "..." : comics.description) : "Here no descr",
                // fullDescription: comics.description.length > 0 ? comics.description : "Here no descr",
                thumbnail: `${comics.thumbnail.path}.${comics.thumbnail.extension}`,
                // thumbnail: `${comics.imgages[0].path}.${comics.imgages[0].extension}`?????,
                printPrice: typeof comics.prices[0].price === 'number' ? comics.prices[0].price + " $" : comics.prices[0].price,
                digitalPrice: comics.prices[1] ? typeof comics.prices[1].price === 'number' ? comics.prices[1].price + " $" : comics.prices[1].price: "Not available",
                pageCount: comics.pageCount,
                detail: comics.urls[0].url
                // objStyle: objStyle
            }
        }



    const _transformChar= (char) =>{
        console.log(char)
        const date = new Date(char.modified);
        const formattedModified = date.toLocaleDateString('en-CA');  
        let objStyle = { objectFit: "cover" };
        if (char.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" || char.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708") {
            objStyle = { objectFit: "fill" };
        } 
        
            return{
                id: char.id,
                name: char.name,
                description: char.description.length > 0 ? (char.description.length > 150 ? char.description.substring(0, 170) + "..." : char.description) : "The character has no description",
                fullDescription: char.description.length > 0 ? char.description : "The character has no description",
                thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
                homepage: char.urls[0].url,
                wiki: char.urls[1].url,
                comics: char.comics.items,
                modified: formattedModified,
                objStyle: objStyle
            }
        }
    
    return {getAllCharacters, getCharactersById, getCharactersByName, getAllComics, loading, error, getComicsByName}
}



export default MarvelService;
