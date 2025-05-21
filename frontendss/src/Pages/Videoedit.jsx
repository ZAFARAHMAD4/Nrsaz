import React from 'react';
import video1 from '../Video/videoedit1.mp4';
import video2 from '../Video/videoedit2.mp4';
import video3 from '../Video/videoedit3.mp4';
import video4 from '../Video/videoedit4.mp4';
import video5 from '../Video/videoedit5.mp4';
import video6 from '../Video/videoedit6.mp4';
import video7 from '../Video/videoedit7.mp4';
import video8 from '../Video/vedioedit8.mp4';
import video9 from '../Video/videoedit9.mp4';

const videoList = [
  { src: video1, title: 'First Video' },
  { src: video2, title: 'Second Video' },
  { src: video3, title: 'Third Video' },
  { src: video4, title: 'Third Video' },
  { src: video5, title: 'Third Video' },
  { src: video6, title: 'Third Video' },
  { src: video7, title: 'Third Video' },
  { src: video8, title: 'Third Video' },
  { src: video9, title: 'Third Video' },
];

function VideoGallery() {
  return (
    <div className="container mt-5">
      <div className="row">
        {videoList.map((video, index) => (
          <div className="col-12 col-sm-6 col-md-4 mb-4 mt-5" key={index}>
            <div className="ratio ratio-16x9">
              <video 
                controls 
                preload="metadata" 
                playsInline 
                className="w-100 h-100"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <h5 className="mt-2 text-center">{video.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoGallery;
