@import url('https://fonts.googleapis.com/css2?family=Clicker+Script&family=Poppins:wght@200;300;400;500;600;700&display=swap');
:root{
    --bg-black-900:#f2f2fc;
    --bg-black-100:#fdf9ff;
    --bg-black-50:#e8dfec;
    --text-black-900:#302e4d;
    --text-black-700:#504e70;
}
body.dark{    
    --bg-black-900:#151515;
    --bg-black-100:#222222;
    --bg-black-50:#393939;
    --text-black-900:#ffffff;
    --text-black-700:#e9e9e9;
}

body{
    margin:0;
    padding:0;
    line-height:1.5;
    font-size: 16px;
    font-family:'Poppins' sans-serif;
}
*{
    margin:0;
    padding:0;
    outline:none;
    text-decoration:none;
    box-sizing: border-box;
}

::before,::after{
    box-sizing:border-box;
}

ul{
    list-style:none;
}


.section{
    background:var(--bg-black-900);
    min-height:100vh;
    display:block;
    padding:0 30px;
    opacity:1;
    position:fixed;
    left:270px;
    top:0px;
    right:0;
    bottom:0;
    z-index:0;
    overflow-y: auto;
    overflow-x: hidden;
    transition: all 0.3s ease;
}
.section.back-section{
    z-index:1;
}

.section.active{
    z-index:2;
    opacity:1;
    animation: slideSection 1s ease-in;
}

@keyframes slideSection{
    0%{
        transform: translateX(100%);
    }
    100%{
        transform: tarnslateX(0%);
    }
}

.hidden{
    display:none !important;
}

.padd-15{
    padding-left: 15px;
    padding-right: 15px;
}

.container{
    max-width:1100px;  
    width:100%;
    margin:auto;
}

.section .container{
    padding-top: 70px;
    padding-bottom: 80px;
}

.section-title{
    flex:0 0 100%;
    max-width:100%;
    margin-bottom: 60px;
}

.section-title h2{
    font-size: 40px;
    font-weight: 700;
    color:var(--text-black-900);
    position:relative;
}

.section-title h2::before{
    content:' ';
    height:4px;
    width:50px;
    background-color: var(--skin-color);
    position: absolute;
    top:100%;
    left:0;
}

.section-title h2::after{
    content:' ';
    height:4px;
    width:25px;
    background-color: var(--skin-color);
    position: absolute;
    top:100%;
    left:0;
    margin-top:8px ;
}

.row{
    display: flex;
    flex-wrap:wrap;
    margin-left: -15px;
    margin-right: -15px;
    position:relative;
}

.btn{
    font-size:16px;
    font-weight: 500;
    padding:12px 35px;
    color:white;
    border-radius: 40px;
    display:inline-block;
    white-space: nowrap;
    border:none;
    background: var(--skin-color);
    transition: all 0.3s ease;
}

.btn:hover{
    transform: scale(1.05);
}
.shadow-dark{
    box-shadow: 0 0 20px rgba(48,46,77,0.15)
}

/*aside */
.aside{
    width:270px;
    background:var(--bg-black-100);
    position:fixed;
    left:0;
    top:0;
    padding:20px;
    height:100%;
    border-right:1px solid var(--bg-black-50);
    display: flex;
    justify-content:center;
    align-items:center;
    z-index:10;
    transition:all 0.3s ease ;
}

.aside .logo{
    position:absolute;
    top:50px;
    font-size:30px;
    text-transform:capitalize;
}
.aside .logo a{
    color:var(--text-black-900);
    font-weight:700;
    padding:15px 20px;
    font-size:30px;
    letter-spacing:5px;
    position: relative;
}
.aside .logo a span{
    font-family: 'Clicker Script', cursive;
    font-size:40px;
}
.aside .logo a::before{
    content: ' ';
    position: absolute;
    width: 20px;
    height: 20px;
    border-bottom: 5px solid var(--skin-color);
    border-left: 5px solid var(--skin-color);
    bottom:0;
    left:0;
}
.aside .logo a::after{
    content: ' ';
    position: absolute;
    width: 20px;
    height: 20px;
    border-right: 5px solid var(--skin-color);
    border-top: 5px solid var(--skin-color);
    top:0;
    right:0;
}

.aside .nav-toggler{
    height:40px;
    width:45px;
    border:1px solid var(--bg-black-50);
    cursor: pointer;
    position:fixed;
    left:300px;
    top:20px;
    border-radius:5px;
    background: var(--bg-black-100);
    display:none;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease ;
}

.aside .nav-toggler span{
    height:2px;
    width:18px;
    background:var(--skin-color);
    display: inline-block; 
    position:relative;    
}
.aside .nav-toggler.open span{
    background-color: transparent;
}

.aside .nav-toggler span::before{
    content:' ';
    height:2px;
    width:18px;
    background:var(--skin-color);
    position:absolute;
    top:-6px;
    left:0;
}
.aside .nav-toggler.open span::before{
    transform:rotate(45deg);
    top:0;
}
.aside .nav-toggler span::after{
    content:' ';
    height:2px;
    width:18px;
    background:var(--skin-color);
    position:absolute;
    top:6px;
    left:0;
}
.aside .nav-toggler.open span::after{
    transform:rotate(-45deg);
    top:0;
}

.aside .nav{
    margin-top: 50px;
}
.aside .nav li{
    margin-bottom: 20px;
    display:block;
}
.aside .nav li a{
    font-size:16px;
    font-weight:600;
    display:block;
    border-bottom: 1px solid vae(--bg-black-50);
    color:var(--text-black-900);
    padding:5px 15px;
}
.aside .nav li a.active{
    color:var(--skin-color);
}
.aside .nav li a i{
    margin-right: 15px;
}


/* home*/
.home{
    min-height:100vh;
    display:flex;
    color:var(--text-black-900);
}

.home .home-info{
    flex:0 0 60%;
    max-width:60%;
}

h3.hello{
    font-size:20px;
    margin:15px 0;
}

h3.hello span{
    font-family: 'Clicker Script', cursive;
    font-size: 30px;
    font-weight: 700;
    color: var(--skin-color);
}

h3.my-profession{
    font-size:30px;
    margin:15px 0;
}

.typing{
    color:var(--skin-color);
}

.home-info p{
    margin-bottom:70px;
    font-size:20px;
    color:var(--text-black-700);
}

.home .home-img{
    flex: 0 0 40%;
    max-width:40%;
    text-align:center;
    position:relative;
}

.home-img::before{
    content:' ';
    position:absolute;
    height:80px;
    width:80px;
    border-top:10px solid var(--skin-color);
    border-left:10px solid var(--skin-color);
    left:-20px;
    top:-40px;
}

.home-img::after{
    content:' ';
    position:absolute;
    height:80px;
    width:80px;
    border-bottom:10px solid var(--skin-color);
    border-right:10px solid var(--skin-color);
    right:20px;
    bottom:-40px;
}

.home .home-img img{
    margin: auto;
    border-radius: 5px;
    height:400px;
}


/* About */
.about .about-content{
    flex:0 0 100%;
    max-width:100%;
}
.about .about-content .about-text{
    flex:0 0 100%;
    max-width:100%;
}
.about .about-content .about-text h3{
    font-size:24px;
    margin-bottom: 15px;
    font-weight: 700;
    color:var(--text-black-900);
}

.about .about-content .about-text h3 span{
    color:var(--skin-color);
}

.about .about-content .about-text p{
    font-size:16px;
    line-height:25px;
    color:var(--text-black-700);
}

.about-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 3.5rem;
  padding-bottom: 5rem;
}
.about-container .right-about {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
}
.about-container .right-about .about-item {
  border: 1px solid var(--skin-color);
  border-radius: 5px;
  transition: all 0.4s ease-in-out;
  box-shadow: 1px 2px 15px rgba(0, 0, 0, 0.1);
}
.about-container .right-about .about-item:hover {
  cursor: default;
  transform: translateY(-5px);
  border: 1px solid #3bd6d6;
  box-shadow: 1px 4px 15px rgba(0, 0, 0, 0.32);
}
.about-container .right-about .about-item .abt-text {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}
.about-container .right-about .about-item .abt-text .large-text {
  font-size: 3rem;
  font-weight: 700;
  color: var(--skin-color);
}
.about-container .right-about .about-item .abt-text .small-text {
  padding-left: 3rem;
  position: relative;
  text-transform: uppercase;
  font-size: 1.2rem;
  color: var(--color-grey-1);
  letter-spacing: 2px;
}
.about-container .right-about .about-item .abt-text .small-text::before {
  content: "";
  position: absolute;
  left: 0;
  top: 15px;
  width: 2rem;
  height: 2px;
  background-color: var(--skin-color);
}
.about-container .left-about {
  padding-right: 5rem;
}
.about-container .left-about p {
  line-height: 2rem;
  padding: 1rem;
  color: var(--text-black-900);
}
.about-container .left-about h4 {
  font-size: 2rem;
  text-transform: uppercase;
}

.about-container .left-about p {
  padding-left: 0;
}



/*Button */
.btn-con {
  display: flex;
  align-self: flex-start;
}

.main-btn {
  border-radius: 30px;
  color: inherit;
  font-weight: 600;
  position: relative;
  border: 1px solid var(--skin-color);
  display: flex;
  align-self: flex-start;
  align-items: center;
  overflow: hidden;
}
.main-btn .btn-text {
  padding: 0 2rem;
}
.main-btn .btn-icon {
  background-color: var(--skin-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 1rem;
  color:#fdf9ff;
}
.main-btn::before {
  content: ' ';
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(100%);
  z-index: -1;
}
.main-btn:hover{
  transform: all 0.4s ease-out;
}
.main-btn:hover::before {
  width: 100%;
  height: 100%;
  background-color: var(--bg-black-100);
  transform: translateX(0);  
  transition: all 0.4s ease-out;
}

/*Education*/
.about .about-content .education,
.about .about-content .experience {
    flex: 0 0 50%;
    max-width:50%;
    margin-top:30px;
}
.about .about-content h3.title{
    font-size:24px;
    margin-bottom:30px;
    font-weight:700;
    color:var(--text-black-900);
}

.about .about-content .timeline-box{
    flex:0 0 100%;
    max-width:100%;
}
.about .about-content .timeline{
    background-color: var(--bg-black-100);
    padding:30px 15px;
    border:1px solid var(--bg-black-50);
    border-radius:10px;
    width:100%;
    position:relative;
}
.about .about-content .timeline .timeline-item{
    position: relative;
    padding-left: 37px;
    padding-bottom: 50px;
}
.about .about-content .timeline .timeline-item:last-child{
    padding-bottom: 0;
}
.about .about-content .timeline .timeline-item::before{
    content:' ';
    width:1px;
    position: absolute;
    height:100%;
    left:7px;
    top:0;
    background: var(--skin-color) ;
}
.about .about-content .timeline .circle-dot{
    position: absolute;
    left:0;
    top:0;
    height:15px;
    width:15px;
    border-radius: 50%;
    background-color: var(--skin-color);
}
.about .about-content .timeline .timeline-date{
    font-weight: 400;
    font-size: 14px;
    margin-bottom:12px;
    color:var(--text-black-700);
}
.about .about-content .timeline .timeline-date fa{
    margin-right:5px;
}
.about .about-content .timeline .timeline-title{
    font-weight:700;
    font-size:18px;
    margin-bottom: 15px;
    text-transform: capitalize;
    color:var(--text-black-900);
}
.about .about-content .timeline .timeline-text{
    line-height:25px;
    font-size:16px;
    text-align:justify;
    color:var(--text-black-700);
}
/* Skills  */

.service .container{
    padding-bottom:40px;
}

.service .service-item{
    margin-bottom:30px;
    flex:0 0 33.33%;
    max-width: 33.33%;
}
.service .service-item .service-item-inner{
    background-color: var(--bg-black-100);
    border: 1px solid var(--bg-black-50);
    padding:30px 15px;
    text-align:center;
    transition:all .35 ease;
}
.service .service-item .service-item-inner:hover{
    box-shadow: 0 0 20px rgba(48,46,77,0.15);
}
.service .service-item .service-item-inner .icon{
    height:60px;
    width:60px;
    border-radius: 50%;
    display:block;
    margin:0 auto 30px;
    text-align:center;
    transition:all 0.3s ease;
}
.service .service-item .service-item-inner .icon .fa{
    font-size:40px;
    line-height: 60px;
    color:var(--skin-color);
    transition: all 0.3s ease;
}
.service .service-item .service-item-inner:hover .icon{
    background:var(--skin-color) ;
}
.service .service-item .service-item-inner:hover .icon .fa{
    font-size:25px;
    color:#ffffff;
}
.service .service-item .service-item-inner h4{
    font-size:18px;
    margin-bottom:15px;
    color:var(--text-black-900);
    font-weight: 700;
    text-transform: capitalize;
}
.service .service-item .service-item-inner p{
    font-size:16px;
    color:var(--text-black-700);
    line-height:25px;
}

/* Portfolio */
.portfolio .container{
    padding-bottom: 40px;
}
.portfolio .portfolio-heading{
    flex:0 0 100%;
    max-width:100%;
    margin-bottom:40px;
}
.portfolio .portfolio-heading h2{
    color:var(--text-black-900);
    font-weight: 500;
}
.portfolio .portfolio-heading-item{
    flex:0 0 33.33%;
    max-width:33.33%;
    margin-bottom:30px;
}
.portfolio .portfolio-item-inner{
    border:6px solid var(--bg-black-100);
    border-radius:10px;
    overflow:hidden;
    cursor:pointer;
}
.portfolio .portfolio-item-inner .portfolio-img img{
    width:100%;
    display:block;
}

/* Contact */

.contact-title{
    color:var(--skin-color);
    text-align: center;
    font-size:25px;
    margin-bottom: 20px;;
}
.contact-sub-title{
    color:var(--text-black-900);
    text-align: center;
    font-size:15px;
    margin-bottom:60px;
}
.contact .contact-info-item{
    flex:0 0 25%;
    max-width:25%;
    text-align:center;
    margin-bottom:60px;
}
.contact .contact-info-item .icon{
    display:inline-block;
}
.contact .contact-info-item .icon .fa{
    font-size:25px;
    color:var(--skin-color);
}
.contact .contact-info-item h4{
    font-size:18px;
    font-weight: 700;
    color: var(text-black-900);
    text-transform: capitalize;
    margin:15px 0 5px;
}
.contact .contact-info-item p{
    font-size:16px;
    line-height:25px;
    color:var(--text-black-700);
    font-weight: 400;;
}
.contact .contact-form{
    flex:0 0 100%;
    max-width:100%;
}
.contact .contact-form .col-6{
    flex:0 0 50%;
    max-width:50%;    
}
.contact .contact-form .col-12{
    flex:0 0 100%;
    max-width:100%; 
}
.contact .contact-form .form-item{
    margin-bottom:30px;
}
.contact .contact-form .form-item .form-control{
    width:100%;
    height:50px;
    border-radius:25px;
    background: var(--bg-black-100);
    border:1px solid var(--bg-black-50);
    padding: 10px 25px;
    font-size: 16px;
    color:var(--text-black-700);
    transition:all 0.3s ease;
}
.contact .contact-form .form-item .form-control:focus{
    box-shadow: 0 0 20px rgba(48,46,77,0.15);
}
.contact .contact-form .form-item textarea.form-control{
    height:140px;
}
.contact .contact-form .btn{
    height:50px;
    padding:0 50px;
}
 
@media(max-width:1199px){ 
    .section .container{
        padding-top:70px;
    }
    .aside{
        left:-270px;
    }
    .aside.open{
        left:0;
    }
    .aside .nav-toggler{
        display:flex;
        left:30px;
    }
    .aside .nav-toggler.open{
        left:300px;
    }
    .section{
        left:0;
    }
    .section.open{
        left:270px;
    }
}
@media(max-width:991px){
    .contact .contact-info-item, 
    .portfolio .portfolio-item,
    .service .service-item{
        flex:0 0 50%;
        max-width:50%;
    }
    
    .home .home-info{
        flex:0 0 100%;
        max-width:100%;
    }
    .home .home-img{
        display:none;
    }
}
@media(max-width:767px){
    .contact .contact-form .col-6,
    .contact .contact-info-item,
    .portfolio .portfolio-item,
    .service .service-item,
    .about .about-content .education,
    .about .about-content .experience,
    .about .about-content .skills,
    .about .about-content .personal-info{
        flex:0 0 100%;
        max-width:100%;
    }
}
