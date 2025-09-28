import React, {useEffect,useState} from 'react';
import axios from 'axios';

function Banner() {
    const [bannerImage, setBannerImage] = useState('');
    const [title, setTitle] = useState('Your Movie Title');

    useEffect(() => {
        axios.get('https://api.tvmaze.com/search/shows?q=breaking+bad')
            .then(response => {
                const show = response.data[0].show;
                setBannerImage(show.image.original);
                setTitle(show.name);
            });
    }, []);

  return (
    <div className='h-[20vh] md:h-[70vh] bg-cover bg-center bg-no-repeat flex items-end overflow-hidden' style={{backgroundImage: `url('${bannerImage}')`}}>

      <div className='text-white w-full text-center text-2xl md:text-4xl font-bold p-4 bg-opacity-100'>
        {title}
      </div>
    </div>
  )
}

export default Banner
