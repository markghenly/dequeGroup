import React, { useState } from 'react';
import Header from './header';
import Navigation from './Navigation';
import Section from './Section';
import Footer from './footer';
import './Header.css';
import './navigation.css';
import './section.css';
import './Footer.css';
import Admission from './Admission';


const Home = () => <section>
       <div class="container">
    <aside class="aside">

    <div class="col-8">
               
                    <div >
                        <img src="/logo.png" class="logo"></img>
                    

                    <div class="text-logo">
                        <div >Republic of the Philippines</div>
                        <hr></hr>
                        <div id="agency-name">Ilocos Sur Polytechnic State College</div>
                        <div id="agency-tagline">Tagudin Campus | Tagudin, Ilocos Sur</div>
                    </div>
                </div>
            </div>
    </aside>
    <div class="content">
      
      <h1>BRIEF HISTORY</h1>
      <hr></hr>
      
          <p>Tagudin Campus is the seat of governance in the South Cluster. It was known formerly as the Tagudin General Comprehensive High School established which started as the Tagudin High School and became a national high school by virtue of RA 4447 which was signed into law in June 19, 1965. After its integration into ISPSC, it became the College of Arts and Sciences. Today it houses the College of Teacher Education, the College of Business and Hospitality Management, the College of Arts and Sciences, and the College of Information Technology.</p>

    </div>
    
    
 <aside class="aside2">
      
 <div class="row">

  <div>


  </div>
                    <div class="col-6">  
                    <h3>Welcome to ISPSC Tagudin Campus</h3>
                    <hr></hr>

                      <ul>
                          <li>
                              <strong>Dr. Tessie Dela Cruz</strong><br/>
                              Dean, Graduate School
                          </li>
                          <li>
                              <strong>Dr. Ernest D. Padiwan</strong><br/>
                              Dean, College of Arts and Sciences
                          </li>
                          <li>
                              <strong>Dr. Shirley P. Palma</strong><br/>
                              Dean, College of Teacher Education
                          </li>
                          <li>
                              <strong>Atty. Carlo Manglioan</strong><br/>
                              Dean, College of Business, Management and Entrepreneurship
                          </li>
                          <li>
                              <strong>Mrs. Femarie M. Capistrano</strong><br/>
                              Principal, Laboratory High School
                          </li>
                      </ul>
                    </div>
                    </div>
    </aside>
  </div>
    </section>

const About = () => <section>
<div class="container">
<aside class="aside">


        
<div class="card">
                            <h3>Vision</h3>
                            <hr></hr>
                            <p>
                            <em>
                                A vibrant and nurturing Polytechnic Service College for transforming lives and communities.
                                </em>
                                </p>
                            <p >
                              <em>              
                                  Filipino: (Pangitain) Maningning at mapag-arugang politeknikong serbisyo-kolehiyo para sa pagpapaunlad ng buhay at lipunan.
                              </em>
                            </p>
                            <p >
                              <em>
                                Iloco: (Sirmata) Narimat ken managtaripato nga serbisyo-kolehiyo politekniko para ti pannakabalbaliw iti biag ken kagimongan.
                              </em>
                            </p>
                        </div>
     
</aside>
<div class="content">


<h1>ABOUT</h1>
<hr></hr>
<em>
<p>ISPSC is a comprehensive six-campus institution of higher learning mandated to give professional and technical training both in the undergraduate and graduate levels in the fields of economics,
         agriculture, fishery, trade, home industry, engineering, education, forest research and conservation, management, finance, accounting and business administration, public administration and other
          fields as may be relevant, besides providing for the promotion of scientific and technological researches which the College deems necessary in carrying out its objectives. The main campus is 
          situated in Santa Maria, Ilocos Sur and the five other campuses are strategically located in Candon City and the municipalities of  Narvacan, Santiago, Tagudin, and Cervantes, all in the second district of Ilocos Sur.</p>
          </em>
</div>


<aside class="aside2">

<div class="row">
<div class="card">
                            <h3>Mission</h3>
                            <hr></hr>
                            <p >
                                <em>To improve the lives of people and communities through quality instruction, innovations, productivity, initiatives, environment and industry-feasible technologies, resource mobilization and transformational outreach programs and services.
                                </em>
                                </p>
                            <p >
                              <em> Filipino: Mapaunlad ang buhay ng tao at lipunan sa pamamagitan ng de-kalidad na pagtuturo, pagkamalikhain, panguguna sa pagiging produktibo, teknolohiyang pangkapaligiran at industria, tamang paggamit ng pinagkukunang yaman at mga program at serbisyong makapagbabago sa kabuhayan.
                              </em>
                            </p>
                            <p>
                              <em>
                                Iloco: Mapadur-as iti panagbiag dagiti tattao ken gimong babaen iti de-kalidad a panagisuro, panagpartuat, nabunga ken naballigi a gannuat, teknolohiya a mangsaluad iti aglawlaw ken iti industria, naikalintegan a panagusar dagiti pagbaknangan ken pannakaipaay iti programa ken serbisyo nga mangidanon iti panagbalbaliw.

                              </em>
                            </p>
                        </div>
                        </div>
    
</aside>
</div>

</section>

const App = () => {
  const [currentPage, setCurrentPage] = useState('/');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header />
      <Navigation handleNavigation={handleNavigation} />
      {currentPage === 'Home' && <Home />}
      {currentPage === '/' && <Home />}
      {currentPage === 'about' && <About />}
      {currentPage === 'admission' && <Admission />}
      <Footer />
    </div>
  );
};

export default App;
