Documentation for christian's contributions

> heres some info about my contributions

> below is some code for a problem i encountered

> A problem i ran into
>In the begining i had a big problem with the nesting. I later found that i should add another div instead of just adding the image.
```html
<div id="logo">
     <div id="imgDiv">
          <img 
          id="logoImg" 
          src="./assets/images/Logo.png" 
          alt="main logo"
          > 
     </div>
</div>
```
> I had a bit of trouble when centering the img of the logo inside the logo div. I tried to use justify-content: center; but ran into an issue. Or rather i made a mistake,
```css problem
#logo {
  width: 90vw;
  height: 20vh;
  background-color: #f2efe7;
  margin: auto;
  margin-top: 2.5vw;
  text-align: center;
  border: 2px solid black;
}

}
img#logoImg {
     display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}
```
>I fixed it!!!
>I ended up putting that line inside the img#logoImg {} css instead of the parent #logo {}. But i fixed it :)
```css fix

#logo {
  display: flex;
  justify-content: center;
  width: 90vw;
  height: 20vh;
  background-color: #f2efe7;
  margin: auto;
  margin-top: 2.5vw;
  text-align: center;
  border: 2px solid black;
}

img#logoImg {
  width: 100%;
  height: 100%;
}
```
