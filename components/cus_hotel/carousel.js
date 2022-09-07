import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
  
export default class NextJsCarousel extends Component {
    render() {
        return (
            <div>
              
              <Carousel>
                  <div className='object-cover h-56 w-full'>
                      <img class="object-cover h-56 w-full" src="https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="image1"/>
                      
  
                  </div>
                  <div>
                      <img class="object-cover h-56 w-full" src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="image2" />
                      
  
                  </div>
                  <div>
                      <img class="object-cover h-56 w-full" src="https://images.unsplash.com/photo-1572177215152-32f247303126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="image3"/>
                      
  
                  </div>
                  <div>
                      <img class="object-cover h-56 w-full" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="image4"/>
                      
  
                  </div>
                  <div>
                      <img class="object-cover h-56 w-full" src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="image5"/>
                      
  
                  </div>
              </Carousel>
            </div>
        );
    }
};