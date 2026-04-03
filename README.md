# Leonard Portfolio Website

A clean and professional portfolio website designed to showcase my creative work, technical skills, and professional journey.

---

## 🔗 Live Demo

Check it out here: [https://revou-fsse-feb26.github.io/milestone-1-leogurning/]

---

## 📖 Overview

This website serves as my digital business card. The goal was to create a fast-loading, visually appealing space that provides potential employers or clients with everything they need to know about my work in one place.

---

## ✨ Features

- **About me:** The summary of myself, education background, experiences, and skills.

- **Portfolio:** A list of my projects, showcasing my latest work with clients.
- **Contact Form:** A stylized form for direct inquiries.
- **Sticky/Fixed header:** The sticky/fixed header is designed locked to the top of the browser window from the moment the page loads. This is to keep important links of logo text and other navigation links.
- **Table of work experience:** A table in a website is a way to organize information of work experiences into rows and columns.
- **Social links:** A simple stylized links with absolute destination address to linkedin and instagram.
- **Dropdown input:** A input element for Reason for Contact purpose in the Contact Us form that allows user to choose one value from a pre-defined list. Instead of typing out an answer, user can click the box, and there is a list "drops down" to pick from.
- **Reset button:** A button in the Contact Us form to reset all of input values given.
- **Implementation of `<aside>`, `<figure>`+`<figcaption>`, nested `<article>`:** These are semantic HTML implemented in the website to have clean and more organized Projects information.

- **CSS Box model Implementation:** Every element in CSS is essentially a box. It consists of Margin, Border, Padding, and Content. Using `box-sizing: border-box;` globally to ensure that padding and borders are included in the element's total width and height.
- **CSS Grid Display:** Grid is perfect for the Heading, Aside, Main, and Footer structure. Define `grid-template-areas` to literally name where the "Header" "Aside" "Main/Content" "Footer" should go.

  <img src="images/grid.png" width="250">

- **CSS Flex Display:** Inside the header, use Flexbox for the logo and navigation. Inside the Home/Hero, About, Projects section, also use Flex display and Flex wrap display in Projects to align and adjust items correctly in the layout adaptively.

  <img src="images/flex-nav01.png" width="250">

  <img src="images/flex-nav02.png" width="100">

  <img src="images/flex.png" width="250">

- **Google Font and Typography:** Implement Google Fonts, typograhy Font with various weight, size, color and multiple colors background (with text fill color and background clip). Also using linear gradient utility to combine several colors and its gradient

  <img src="images/typogph.png" width="150">

- **Responsive Design & Media Queries:** This is how to make the site "adaptive.". Define the correct layout for each different screen sizes (mobile, tab, desktop). For Desktop, Aside will be displayed for Side Sticky Navigation. The Hamburger Menu will be displayed only for mobile device screen

  <img src="images/grid.png" width="150">

  <img src="images/tab.png" width="150">

- **The Adaptive Navigation Bar:** This is to implement adaptive Navigation bar for Desktop, Tab, Mobile devices.
  1. Only Desktop: the `Aside` is visible on the left, and shows all navigation links.
  2. Tab and Mobile: `Aside` disappear and `Header` Navigation bar will be displayed. Hamburger menu will be displayed only in Mobile.

    <img src="images/grid.png" width="250">
    
    <img src="images/flex-nav01.png" width="250">
    
    <img src="images/flex-nav02.png" width="150">
    
    <img src="images/mob-nav.png" width="150">

- **Interaction: Pseudo-classes & Selectors:** These allow you to style elements based on their state or position (hover, nth-child). Also use `transform` property to rotate, scale, or move (translate) elements without breaking the document flow.

- **Typewriter Animation:** The "typewriter" effect on the hero text is achieved using a combination of CSS Keyframes and the steps() timing function.

  Logic: The container begins with a width of 0 and expands to 100%. By using steps(), the width increases in discrete increments corresponding to the number of characters, creating the illusion of real-time typing.

  Cursor: A secondary animation handles the border-right blinking to simulate a terminal cursor.

  <img src="images/typewriter-effect.png" width="150">

- **Preloader Spinner Animation:** Enhance user retention and visual polish with a lightweight CSS-driven preloader. This feature provides immediate visual feedback during the initial page load, masking asset delivery and ensuring a seamless transition to the fully rendered site.

  <img src="images/preloader-spinner.png" width="150">

- **Smooth State Transitions:** To ensure a fluid feel, all interactive elements (buttons, links, projects content, form input) leverage CSS Transitions.

  a. Properties: primarily target background-color, transform, and box-shadow.

  b. Duration: A standard 0.3s ease is applied to maintain a snappy yet organic feel, preventing jarring visual jumps when a user interacts with the UI.

---

## 🛠️ Technology Used

### HTML5

- **Semantic Markup:** Used elements like `<header>`, `<main>`, `<section>`, `<article>`, `<aside>` and `<footer>` for better SEO and accessibility.

- **Forms:** Implemented native HTML5 validation for the contact section.

### CSS3

- **Grid and Flex Display & CSS:** Utilized simple CSS for creating a good layout of header, Navbar, table and footer.
- **Google Fonts Integration:** Using google fonts to enhance readability.

### JAVASCRIPT

- **JavaScript: The Hamburger Toggle Class:** Instead of manually changing styles in JS, we use a Class to manage the state. The JS simply "toggles" a CSS class (like .active), and CSS handles the visual transition

### Visual Studio Code Editor

- **Utilize Visual Studio Code as the primary IDE**. It handles everything from syntax highlighting and IntelliSense to version control and integrated terminal operations.

  **The Power-Ups: Extensions**
  To bridge the gap between the editor and the browser, we rely on specific extensions that automate repetitive tasks. Key functionalities include: Live Server, Linting & Formating, Auto Completed.

### Chrome Browser

- **The Testing Ground: Google Chrome:** Google Chrome serves as our primary runtime and testing environment. Its V8 engine and DevTools suite provide the industry standard for: DOM inspection, Performance profiling, and view in several devices.

---

## 🚀 Getting Started

1.  **Clone the repository:**
    `git clone https://github.com/Revou-FSSE-Feb26/milestone-1-leogurning`
2.  **Open the project:**
    Simply open the `index.html` file in any modern web browser.

3.  **📂 Project Structure:**
    This directory contains the core files and folders for the website. Below is a breakdown of the organization:

    ```
    root/
    │
    ├── css/ # Stylesheets (style.css)
    ├── images/ # Image assets (jpg, png, svg, etc.)
    ├── js/ # JavaScript files (index.js)
    │
    ├── index.html # Main entry point of the website
    └── README.md # Project documentation and info
    ```

4.  **📂 Deployment:**
    This project using Github Pages feature. The Build and Deployment setting has been completed and it will deploy from main branch automatically if there is new push / code updated.

## 📧 Contact

Feel free to reach out if you have any questions or just want to connect!

- **Email:** leogurning@ovi.com
