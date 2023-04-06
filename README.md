<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/PabloSgns/Kasa">
    <img src="https://github.com/InCodeBlood/Kasa/blob/main/src/assets/logo.png" alt="Logo" width="350" height=100">
  </a>

<h3 align="center">Kasa</h3>

  <p align="center">
    This project is the n°7 of OpenClassrooms Web Developper course which consists in building an e-commerce website with JavaScript.
    <br />
    <br />
    <a href="https://github.com/InCodeBlood/Kasa"><strong>Explore the docs »</strong></a>
    <br />
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#built-with">Built With</a>
    </li>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#technical-constraints">Technical constraints</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<div align="center">
    <img src="https://github.com/InCodeBlood/Kasa/blob/main/src/assets/screenshot_readme.png" alt="Logo" width="900" height="600">
</div>

<br/>
The goal here is to develop the front end of a real estate rental web application with React.js. We have no API provided but the datas we need are given to us on a JSON file.
<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Built With

* Javascript / React.js
* CSS3 / Sass

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

1. You will need to have <a href="https://nodejs.org/en">Node.js</a> installed on your computer.

2. Clone the repo
   ```sh
   git clone https://github.com/PabloSgns/Kasa.git
   ```
   
3. Go to the "back" folder and install npm
    ```sh
    npm install
    ```
4. Then from the same folder, you can run the app in development mode
    ```sh
    npm start
    ```
    
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FEATURES -->
## Technical constraints

### React Router

* Route parameters are managed by React Router in the URL to retrieve information for each dwelling.
* There is one page per route.
* The 404 page is returned for each non-existent route, or if a value present in the URL is not part of the data entered.
* The logic of the router is united in a single file.

### Gallery & Collapse

* If the user is at the first image and clicks on "Previous image", the gallery displays the last image.
* Conversely, when the displayed image is the last in the gallery, if the user clicks on "Next image", the gallery displays the first image.
* If there is only one image, the "Next" and "Previous" buttons do not appear.
* The gallery must always remain the same height, that indicated on the Figma model. The images will therefore be cropped and centered within the image frame.
* Collapse: By default, Collapses are closed on page initialization.
* If the Collapse is open, the user's click closes it.
* Conversely, if the Collapse is closed, a click opens it.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Author : Pablo Sagnes

You can reach me on <a href="https://www.linkedin.com/in/pablo-sagnes-8068a7143/">Linkedin</a> or by <a href="mailto:sagnes.pablo@gmail.com">email</a>.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
