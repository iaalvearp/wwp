import img1 from '/public/imgs/1.avif';
import img2 from '/public/imgs/2.avif';
import img3 from '/public/imgs/3.avif';
import img1Crop from '/public/imgs/1-thumb.avif';
import img2Crop from '/public/imgs/2-thumb.avif';
import img3Crop from '/public/imgs/3-thumb.avif';

const gallery = [
    { picture: img1, src: img1.src, crop: img1Crop.src, alt: 'Image 1' },
    { picture: img2, src: img2.src, crop: img2Crop.src, alt: 'Image 2' },
    { picture: img3, src: img3.src, crop: img3Crop.src, alt: 'Image 3' },
];

export default gallery;