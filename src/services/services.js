export default function getPhotos (photos,page) {
const BASE_URL = 'https://pixabay.com/api/';
const KEY  = '24365452-de0ed4643bffa9cf97baa21c7';
const url = `${BASE_URL}?key=${KEY}&q=${photos}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`
return fetch(url).then(response=>  {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
}
