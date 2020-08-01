import React,{Component} from 'react';
import './team.css';
import BackImg from '../BackImage';

class About extends Component{

    render(){
        return(
            <>
            <BackImg/>
            {/* <div style={{backgroundColor:"#2985a3",paddingTop:"50px",paddingLeft:"600px",paddingBottom:"100px"}}>
            <h1 style={{color:"#48D1CC"}}> The MedLab Story </h1>
                  <h4 style={{color:"white",marginLeft:"40px"}}> Quality With Assurance </h4>
            </div> */}
        
      

         <p style={{textAlign:"centre",marginTop:"100px",marginRight:"300px",marginLeft:"300px",backgroundImage:"url('https://www.pexels.com/photo/adult-biology-chemical-chemist-356040/')"}}>
             Since its inception in March of 2005, US Diagnostics, Inc., located in New York City, has provided blood glucose meters to over one million diabetic
                   patients.US Diagnostics develops, manufactures, and distributes blood glucose monitoring systems, which are used in the home and clinical settings for 
                   the quantitative measurement of glucose levels in whole blood.Our goal is to provide a high quality, easy-to-use product for excellent diabetes
           management care at an affordable cost, as well as superior customer service.Through our ongoing research and development efforts, we continue to provide 
                   superior products and services worldwide. US Diagnostics’ corporate office is located in the center of the Big Apple near Times Square.
                 </p>
               
                 <div style={{backgroundColor:"#ccc",marginTop:"100px"}}>
                  <img style={{float:"left",marginLeft:"150px",paddingTop:"100px",width:"500px" ,src:"#"}}/>
                  <h2 style={{paddingLeft:"800px",paddingTop:"100px"}}>Our Founding </h2>
                  <p style={{paddingLeft:"800px",paddingBottom:"100px",marginRight:"200px"}}> 
                   Moz was founded by Rand Fishkin and Gillian Muessig in 2004. It was called SEOmoz, and star
                   ted as a blog and an online community where some of the world's first SEO experts shared their research and ideas. 
                   We launched the Beginner's Guide to SEO and our first Search Ranking Factors study, and that hub of industry
                   expertise transformed into a small consulting firm and led us to create some of our first SEO tools. 
                 </p>
                </div>
                
                <div style={{marginTop:"50px"}}>
                  <img style={{float:"right",marginRight:"150px",paddingTop:"100px",width:"500px",src:"#"}}/>
                  <h2 style={{paddingLeft:"200px",paddingTop:"100px"}}> The Idea </h2>
                  <p style={{paddingRight:"800px",paddingBottom:"100px",marginLeft:"200px"}}> 
                   In healthcare, the information around our medicines and lab tests is either unavailable or incomprehensible to us.
                   <br/><br/>
                   So we decided to create a platform that stood for transparent, authentic and accessible information for all.
                   <br/><br/>                     
                   This idea grew into a company and 1mg was created in 2015.
                  </p>
                </div>


                <div style={{backgroundColor:"#ccc",marginTop:"50px"}}>
                  <img style={{float:"left",marginLeft:"150px",paddingTop:"100px",width:"500px",src:"#"}}/>
                  <h2 style={{paddingLeft:"800px",paddingTop:"100px"}}>What we offer </h2>
                  <p style={{paddingLeft:"800px",paddingBottom:"100px",marginRight:"200px"}}> 
                    We provide accurate, authoritative & trustworthy information on medicines and help people use their medicines effectively and safely.
                    <br/><br/>  
                    We get medicines and other health products delivered at home in 1000+ cities across India from licensed and verified pharmacies.
                    <br/><br/>  
                    We also provide diagnostic services from certified labs and online doctor consults at any time, from anywhere.
                  </p>
                </div>
                
                
                 <div style={{marginTop:"50px"}}>
                  <img style={{float:"right",marginRight:"100px",paddingTop:"100px",width:"600px",src:"C:\Users\laidback_lark\Desktop\mm13.jpg"}}/>
                  <h2 style={{paddingLeft:"200px",paddingTop:"100px"}}> The Journey So far </h2>
                 <p style={{paddingRight:"800px",paddingBottom:"100px",marginLeft:"200px"}}> 
                    We’ve made health care accessible to millions by giving them quality care at affordable prices.
                   <br/><br/>
                    We continue to expand our rich and extensive medical content and are working hard to make this information available in multiple local languages.
                  </p>
                </div>
               
               
                <div style={{backgroundColor:"#ccc",paddingTop:"50px",paddingRight:"500px",paddingBottom:"100px"}}>
               <img style={{float:"right",marginRight:"100px",paddingTop:"100px",width:"250px" ,src:"#"}}/>
               <p style={{border:"1px solid green",padding:"10px",width:"500px",marginLeft:"300px"}}>
                   <b>"Moz, formerly SEOmoz, has a name that was inspired by organizations like DMOZ, Mozilla,
                    and Chefmoz — all companies that strove for engaging their communities with openness an
                    integrity. From the very beginning, we felt passionately about bringing that same 
                    integrity to the frustratingly opaque SEO industry."</b>
                 </p> 
                </div>

                 <h1 className="sansserif" style={{marginLeft:"40px"}}><b>The Team</b></h1>
                <h2 className="serif" style={{marginLeft:"45px"}}>Meet our expectionally talented team of Doctors</h2>
                <hr/>
               {/* <div className="teamH" style={{marginLeft:"65px",marginBottom:"20px"}}>
                 <div className="teamV">
                  <div className="member"> 
                  <img className="img" style={{borderRadius:"50%",paddingLeft:"15px",width:"230px"}}/>
                   <div className="box" style={{backgroundColor:"#E6E6FA",paddingTop:"10px",paddingBottom:"10px"}}>
                     <h2 className="memname sansserif margin" style={{color:"dimgrey",marginLeft:"10px"}}> Dr. Manish Sinha</h2>
                     <p className="serif" style={{color:"gray",marginLeft:"60px" }}> MBBS,MD </p>
                    </div>
                   </div>
                  </div>
                 </div> */}
                {/* <div className="teamV">
                  <div className="member">
                    <img className="img" src="m2.jpg" style={{borderRadius:"50%",paddingLeft:"15px",width:"230px"}}/>
                    <div className="box" style={{backgroundColor:"#E6E6FA",paddingTop:"10px",paddingBottom:"10px"}}>
                     <h2 className="memname sansserif margin" style={{color:"dimgrey",marginLeft:"10px"}}> Dr. Manish Sinha</h2>
                     <p className="serif" style={{color:"gray",marginLeft:"60px"}}> MBBS,MD </p>
                   </div>
                  </div>
                 </div> */}

                 {/* <div className="teamV">
                  <div className="member"> 
                  <img className="img" src="m2.jpg" style={{borderRadius:"50%",paddingLeft:"15px",width:"230px"}}/>
                   <div className="box" style={{backgroundColor:"#E6E6FA",paddingTop:"10px",paddingBottom:"10px"}}>
                     <h2 className="memname sansserif margin" style={{color:"dimgrey",marginLeft:"10px"}}> Dr. Manish Sinha</h2>
                     <p className="serif" style={{color:"gray",marginLeft:"60px"}} > MBBS,MD </p> 
                   </div>
                  </div>
                 </div>
                 <div className="teamV">
                  <div className="member"> 
                  <img className="img" src="m2.jpg" style={{borderRadius:"50%",paddingLeft:"15px",width:"230px"}}/>
                   <div className="box" style={{backgroundColor:"#E6E6FA",paddingTop:"10px",paddingBottom:"10px"}}>
                     <h2 className="memname sansserif margin" style={{color:"dimgrey",marginLeft:"10px"}}> Dr. Manish Sinha</h2>
                     <p className="serif" style={{color:"gray",marginLeft:"60px"}}> MBBS,MD </p>
                 </div>
                  </div>
                 </div>
                 
                 <div className="teamV">
                  <div className="member"> 
                  <img className="img" src="m2.jpg" style={{borderRadius:"50%",paddingLeft:"15px",width:"230px"}}/>
                   <div className="box" style={{backgroundColor:"#E6E6FA",paddingTop:"10px",paddingBottom:"10px"}}>
                     <h2 className="memname sansserif margin" style={{color:"dimgrey",marginLeft:"10px"}}> Dr. Manish Sinha</h2>
                     <p className="serif" style={{color:"gray",marginLeft:"60px" }}> MBBS,MD </p>
                  </div>
                  </div>
                 </div>
                <br/> */}
        <script src="team.js"></script>
                                     
      </>  
    )}
}

export default About;