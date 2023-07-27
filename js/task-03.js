const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


function createGallery(){
  const galleryList = document.querySelector('.gallery');
  let galleryHtml = '';

  for( let i = 0; i < images.length; i += 1){

    const url = images[i].url;
    const alt = images[i].alt;
    const imagesHtml = `
    <li class="gallery-img" >
        <img src='${url}' alt='${alt}' height=150px weight=150px/>
    </li>`
      //  galleryList.firstChild.classList.add('gallery-img');
        galleryHtml += imagesHtml;
      

        }
  galleryList.insertAdjacentHTML('beforeend', galleryHtml);
 

}
// console.log(createGallery());
createGallery();