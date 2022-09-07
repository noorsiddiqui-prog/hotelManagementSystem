
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
  

export default function BlogCarousel () {
    
        return (
            <div >
             
              <Carousel className='w-[100%] h-[20%]'>
                  <div>
                      <img src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" width={100} height={100} alt="image1"/>
                      <p className="legend">Image 1</p>
  
                  </div>
                  <div>
                      <img src="https://media.istockphoto.com/photos/the-more-you-know-the-more-your-business-grows-picture-id1292991881?b=1&k=20&m=1292991881&s=170667a&w=0&h=5QfHORbgcqTFyHbRp7L83YlVF-U5Mt-AsWXX2zBtOZ8=" alt="image2" />
                      <p className="legend">Image 2</p>
  
                  </div>
                  <div>
                      <img src="https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="image3"/>
                      <p className="legend">Image 3</p>
  
                  </div>
                  <div>
                      <img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="image4" />
                      <p className="legend">Image 4</p>
  
                  </div>
                  <div>
                      <img src="https://images.unsplash.com/photo-1546074177-ffdda98d214f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="image5"/>
                      <p className="legend">Image 5</p>
  
                  </div>
              </Carousel>
            </div>
        )
        };
