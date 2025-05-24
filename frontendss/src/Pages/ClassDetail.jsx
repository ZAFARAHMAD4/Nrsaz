import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


function ClassDetail() {
  const { classSlug } = useParams();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const class1="https://www.youtube.com/embed/dou9ZGHlqkk?si=wGYW5h_IsuXwfi50"
  const class2="https://www.youtube.com/embed/LZXTvjX84jU?si=S8xcb9xnp-CozuJv"
  const class3="https://www.youtube.com/embed/YvfE5jfDlQI?si=1AUqnlKVQ2UDpqxs"

  const classVideos = {
    'class-1': [
      { title: 'Intro Canva design and its features and apply', src: class1},
 
    ],
    'class-2': [
      { title: 'CSS Introduction', src: class2 },
      
    ],
    'class-3': [
      { title: 'JavaScript Basics', src: class3 },
    
    ],
    // 'class-4': [
    //   { title: 'React Overview', src: '/videos/react1.mp4' },
    //   { title: 'JSX & Components', src: '/videos/react2.mp4' },
    // ],
  };

  const videos = classVideos[classSlug] || [];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4" data-aos="fade-down">
        🎬 {classSlug.replace('-', ' ').toUpperCase()}
      </h2>
      {videos.length > 0 ? (
        <div className="row">
          {videos.map((video, index) => (
            <div className="col-md-6 mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card shadow-sm p-3 h-100">
                <h5>{video.title}</h5>
                <iframe
                  width="100%"
                  height="400"
                  src={video.src}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />


              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No videos available for this class.</p>
      )}
    </div>
  );
}

export default ClassDetail;
