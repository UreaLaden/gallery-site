# Frontend Mentor - Art gallery website solution

This is a solution to the [Art gallery website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/art-gallery-website-yVdrZlxyA). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- **Bonus**: Use [Leaflet JS](https://leafletjs.com/) to create an interactive location map with custom location pin

### Screenshot

![](./screenshot.jpg)

<p align="center">
<img src=./public/assets/screenshotMobile.png width="200" height="400"/>
<img src=./public/assets/screenshotMobile2.png width="200" height="400"/>
</p>
<p align="center">
<img src=./public/assets/screenshotTablet.png width="300" height="400"/>
<img src=./public/assets/screenshotTablet2.png width="300" height="400"/>
</p>
<p align="center">
<img src=./public/assets/screenshotDesktop.png width="600" height="400"/>
<img src=./public/assets/screenshotDesktop2.png width="600" height="400"/>
</p>

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Flexbox
- CSS Grid
- Mobile-first workflow
- [React Leaflet](https://react-leaflet.js.org/docs/start-setup/)

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

In this project I made it a point to fully complete the mobile design first. Although this worked out alot better than my previous projects, I still found myself making adjustments when designing tablet and desktop views. I think for the next project I'll work on designing the completed layouts before adding any content.

Probably a bit basic but i learned that this actually prevents updates to the padding from resizing the element.

```css
* {
  box-sizing: border-box;
}
```

Mix Blend Mode is pretty cool. It's the same concept as using a layer mask in photo editing. Really excited to use this in other projects.

```js
logo: {
    "@media screen and (min-width:1024px)": {
      paddingLeft: "2.12%",
      svg: {
        width: "100%",
        height: "100%",
        overflow: "visible",
        path: {
          transform: "scale(7)",
          fill: Colors.White,
          "mix-blend-mode": "difference",
        },
      },
    },
};
```

### Continued development

I want take a deeper dive into using Leaflet, specifically for implementing custom polygons and route mapping.

### Useful resources

- [React Leaflet Tutorial](https://blog.logrocket.com/react-leaflet-tutorial/) - The Official Leaflet Docs didn't really help too much as I was using React so this really helped me to get started.
- [React Leaflet Docs](https://react-leaflet.js.org/docs/start-setup/) - Official Leaflet Documentation focused on React.

## Author

- Website - [Leaundrae Mckinney](https://www.linkedin.com/in/leaundrae-mckinney/)
- Frontend Mentor - [@UreaLaden](https://www.frontendmentor.io/profile/urealaden)

<table>
  <tr>
  <td align="center">
    <img src="./public/assets/Leaundrae.png" width="100px">
    <br/>
    <a href="https://www.linkedin.com/in/leaundrae-mckinney/" alt="Leaundrae Mckinney">Leaundrae Mckinney</a>
  </tr>
</table>
