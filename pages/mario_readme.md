# documentation for Mario

````html
>this is all of the html for the nav bar. I connected the navigation with each
catagory of the page so if you click contact us it will take you the the footer
and so on.
<style>
  @import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");
</style>

<div id="nav">
  <div id="flex-container">
    <div id="home"><a href="#header">Home</a></div>
    <div id="about"><a href="#sidebarContainer">About us</a></div>
    <div id="products"><a href="#bodyArea">Products</a></div>
    <div id="contact"><a href="#footer">Contact Us</a></div>
  </div>
</div>

```css >This is all of the css I used in order to style the nav bar. The creamy
color they gave us was acctually white so I had to go out of my way to find a
color that matched with what they wanted. #nav { font-family: 'Playfair
Display', serif; width: 90vw; height: 10vh; background-color: #17968b; margin:
auto; margin-top: 2.5%; } #flex-container { display: flex; flex-wrap: nowrap; }
#flex-container > div { width: 17vw; margin: 2.5vw; text-align: center;
line-height: 1px; font-size: 4vh; } a { color: #d8d628; text-decoration: none; }
a:hover { color: #faf0e6; } html { scroll-behavior: smooth; } ```js > I didnt
use any Javascript for the nav bar.
````
