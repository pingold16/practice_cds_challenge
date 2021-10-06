const apiUrl = 'https://developers.google.com/apis-explorer/#p/youtube/v3/'
const key = 'AIzaSyC7qdPm7aCYuNt_5s_w8QsOGVtVfPvskrE'

let getSearch = async (search) => {
    let url = apiUrl + 'youtube.search.list'
    const response = await fetch(url, {
        part:   'snippet',
        order:  'views',
        q:      search.replace(' ', '+'),
        type:   'video'
    });

    if(!response.ok) {
        console.log(response);
        return response;
    }

    return await response.json();
}

export default getSearch;
