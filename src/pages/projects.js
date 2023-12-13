import React from 'react';
import project from '../assets/project1.png'
export function Projects(){
    return (
      <section className="section" id="portfolio">
      <div className="container text-center">
          <h6 className="section-title mb-6">Portfolio</h6>
         
          <div className="row">
              <div className="col-md-4">
                  <a href="#" className="portfolio-card">
                      <img src={project} className="portfolio-card-img"/>
                    
                      <span className="portfolio-card-overlay">
                          <span className="portfolio-card-caption">
                             <h4>Movies-App</h4>
                                  <p className="font-weight-normal">Category: Web Templates</p>
                          </span>
                      </span>
                  </a>
              </div>
              <div className="col-md-4">
                  <a href="#" className="portfolio-card">
                      <img src={project} className="portfolio-card-img"/>
                    
                      <span className="portfolio-card-overlay">
                          <span className="portfolio-card-caption">
                             <h4>Movies-App</h4>
                                  <p className="font-weight-normal">Category: Web Templates</p>
                          </span>
                      </span>
                  </a>
              </div>
              <div className="col-md-4">
                  <a href="#" className="portfolio-card">
                      <img src={project} className="portfolio-card-img"/>
                    
                      <span className="portfolio-card-overlay">
                          <span className="portfolio-card-caption">
                             <h4>Movies-App</h4>
                                  <p className="font-weight-normal">Category: Web Templates</p>
                          </span>
                      </span>
                  </a>
              </div>
          </div>
      </div>
  </section>
        
    );
};

