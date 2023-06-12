import { getAll} from "../api/project"
import { useEffect, useState } from "../lib"
const HomePage = () => {
    const [projects, setProject] = useState([])
    useEffect(() => {
        getAll().then(({ data }) => setProject(data))

    }, [])
    return /*html*/ `
    <body>
    <!-- overlay -->
    <section id="overlay"></section>
    <!-- header -->
    <header>
      <div class="container">
        <nav class="navbar">
          <!-- logo -->
          <div class="navbar__logo">
            <img src="./img/logo.svg" alt="website logo" />
          </div>
          <!-- links -->
          <ul class="navbar__links">
            <li class="navbar__link"><a href="#works">Work</a></li>
            <li class="navbar__link"><a href="#things">About</a></li>
            <a href="#footer"><button class="navbar__btn">Contact</button></a>
            <a href=""><link rel="stylesheet" href="../src/pages/dangky/dangky.html"><button class="navbar__btn">Đăng ký</button></a>
            <a href="../src/pages/dangky/dangnhap.html"><button class="navbar__btn">Đăng nhập</button></a>
          </ul>
          <!-- menu button -->
          <div class="navbar__icons">
            <div class="navbar__icon"></div>
          </div>
        </nav>
      </div>
    </header>
    <!-- banner -->
    <section id="banner">
      <div class="container">
        <!-- img -->
        <div class="banner__img">
          <img src="./img/banner-img.png" alt="illustration of women" />
        </div>
        <!-- heading -->
        <div class="banner__heading">
          <h1>Hello, I'm Quang</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate a
            est culpa soluta modi beatae unde incidunt dolorem placeat maiores?
          </p>
          <a href="#"><button class="banner__btn">View More</button></a>
          <div class="banner__socials">
            <a href="#"><i class="fab fa-dribbble"></i></a>
            <a href="#"><i class="fab fa-behance"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </section>
    <!-- things -->
    <section id="things">
      <div class="container">
        <!-- dec -->
        <div class="things__dec">
          <img src="./img/things-dec-l.png" alt="illustration of leaf" />
        </div>
        <!-- dec -->
        <div class="things__dec">
          <img src="./img/things-dec-r.png" alt="illustration of leaf" />
        </div>
        <!-- heading -->
        <h2>Things I Do</h2>
        <!-- item 1 -->
        <div class="things__item">
          <!-- img -->
          <img src="./img/things-item-1.png" alt="illustration of women" />
          <!-- text -->
          <div class="things__item--heading">
            <h3>Lorem Ispum</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              consequatur provident, culpa quaerat fugit dolorem illum
              repellendus quas quasi obcaecati quia aliquid odit! Vitae, non?
            </p>
          </div>
        </div>
        <!-- item 2 -->
        <div class="things__item">
          <!-- img -->
          <img src="./img/things-item-2.png" alt="illustration of women" />
          <!-- text -->
          <div class="things__item--heading">
            <h3>Lorem Ispum</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              consequatur provident, culpa quaerat fugit dolorem illum
              repellendus quas quasi obcaecati quia aliquid odit! Vitae, non?
            </p>
          </div>
        </div>
        <!-- item 3 -->
        <div class="things__item">
          <!-- img -->
          <img src="./img/things-item-3.png" alt="illustration of computer" />
          <!-- text -->
          <div class="things__item--heading">
            <h3>Lorem Ispum</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              consequatur provident, culpa quaerat fugit dolorem illum
              repellendus quas quasi obcaecati quia aliquid odit! Vitae, non?
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- works -->
    <section id="works">
      <div class="container">
        <!-- dec -->
        <div class="works__dec">
          <img src="./img/work-dec.png" alt="illustration of leaf" />
        </div>
        <div class="works__dec">
          <img src="./img/work-dec.png" alt="illustration of leaf" />
        </div>
        <!-- heading -->
        <h2>Recent Works</h2>
        <!-- img -->
       
        <div class="works__img">
        ${projects.map((project, index) => {
          return /*html*/`
                    <div class="works__img--single">
                    
                    <a  href="/project/${project.id}"><img src="${project.image}" alt="bag" />${project.title}</a>
                    
                  </div>
                  `
                }).join("")}
          
          <!-- btn -->
        <div class="works__btn">
          <a href="#"><button>View Works</button></a>
        </div>
      </div>
    </section>
    <!-- footer -->
    <footer id="footer">
      <div class="container">
        <!-- dec -->
        <div class="footer__dec">
          <img src="./img/things-dec-l.png" alt="illustration of leaf" />
        </div>
        <!-- img -->
        <div class="footer__img">
          <img src="./img/footer-img.png" alt="illustration of women" />
        </div>
        <!-- heading -->
        <div class="footer__heading">
          <h1>Ready to make something amazing?</h1>
          <!-- contact -->
          <div class="footer__contact">
            <a href="tel:901234567">
              <i class="fas fa-phone-alt"></i>
              <p>901234567</p>
            </a>
            <a href="quangpnph20850@fpt.edu.vn">
              <i class="fas fa-envelope"></i>
              <p>quangpnph20850@fpt.edu.vn</p>
            </a>
          </div>
          <div class="banner__socials">
            <a href="#"><i class="fab fa-dribbble"></i></a>
            <a href="#"><i class="fab fa-behance"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </footer>
    //     
    `
}

export default HomePage