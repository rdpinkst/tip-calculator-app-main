# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./screen-shot.png)


### Links

- Solution URL: [Add solution URL here](https://github.com/rdpinkst/tip-calculator-app-main)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

The structure of this app was the first thing that needed to be done, coding up the semantic HTML5 markup.  CSS was then used to style the app, getting it looking as close to the design file pictures as possible.  The app now looked good, but needed some interactivity.  Javascript came to the rescue.  Using javascript I manipulated the DOM, getting the input values for bill total, tip percentage, and number of people.  These values where then used to calculate the tip amount each person needed to pay, along with the total bill each person had to pay.  


### Built with

- Semantic HTML5 markup
- CSS 
- Flexbox
- CSS Grid
- Javascript

### What I learned

Building this project I saw how numbers act in javascript.  Not getting the number you think, but that many numbers after the decimal place.  To correct this, when I changed the DOM I converted the number to a string with two decimal places.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**
