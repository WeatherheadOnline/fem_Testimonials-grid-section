# Frontend Mentor - Testimonials grid section solution

This is a solution to the [Testimonials grid section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot

![https://github.com/WeatherheadOnline/fem_Testimonials-grid-section/blob/main/project_screenshot_desktop_wide_hover.png](https://github.com/WeatherheadOnline/fem_Testimonials-grid-section/blob/main/project_screenshot_desktop_wide_hover.png)

[https://github.com/WeatherheadOnline/fem_Testimonials-grid-section/blob/main/project_screenshot_iPad_Pro_tablet.png](https://github.com/WeatherheadOnline/fem_Testimonials-grid-section/blob/main/project_screenshot_iPad_Pro_tablet.png)

### Links

- Live Site URL: [https://weatherheadonline.github.io/fem_Testimonials-grid-section](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [SASS](https://sass-lang.com/) - Stylistically Awesome StyleSheets
- JavaScript

### What I learned

I expanded on what I learned about SASS in the previous challenge. This time, I learned how to use partials, ie multiple SASS files, and how to have them pass variables and presets to each other.

I also use this opportunity to practice array iteration in Javascript. In this challenge, there is a repeating pattern of cards that each contain the same elements styled in the same way (except for colors). I built an array of testimonial objects, containing all the information that's unique to each card. When the page loads, the script adds the needed HTML for each card, inserting content from the array.

### Continued development

I aim to get more practice with SASS to deepen my understanding.

### Useful resources

- [https://sass-lang.com/documentation/breaking-changes/import/](https://sass-lang.com/documentation/breaking-changes/import/) - When I tried to use the SASS at-rule `@import`, the terminal warned that `@import` is deprecated. This SASS documentation helped point me in the right direction and find out what alternative to use (`@use` and `@forward`).
- [https://sass-lang.com/documentation/at-rules/use/](https://sass-lang.com/documentation/at-rules/use/) - This is SASS' documentation on `@use`.
- [https://www.youtube.com/watch?v=oXaMki9PfLs](https://www.youtube.com/watch?v=oXaMki9PfLs) - I was struggling to understand how to use `@forward` in combination with `@use`. This video was very helpful.
- [https://css-tricks.com/snippets/css/complete-guide-grid/](https://css-tricks.com/snippets/css/complete-guide-grid/) - I'm a little rusty on CSS Grid, and this handy reference helped me find the properties and shorthands I was looking for.

## Author

- Website - [www.weatherheadonline.com](www.WeatherheadOnline.com)
- Frontend Mentor - [@WeatherheadOnline](https://www.frontendmentor.io/profile/WeatherheadOnline)
- LinkedIn - [@eddieweatherhead](https://www.linkedin.com/in/eddieweatherhead/)