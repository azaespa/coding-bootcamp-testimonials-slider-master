# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Dark Blue: hsl(240, 38%, 20%)
- Grayish Blue: hsl(240, 18%, 77%)

## Typography

### Body Copy

- Font size: 32px

### Font

- Family: [Inter](https://fonts.google.com/specimen/Inter)
- Weights: 300, 500, 700

### DOM
-body
--section.testimonial testimonial--statement-container
---p.testimonial__statement
---hgroup.testimonial__student
----h4.testimonial__student__full-name
----h4.testimonial__student__job-role
--section.testimonial testimonial--slider-container
---div.testimonial__slider
----figure.testimonial__slider__prev
----figure.testimonial__slider__next
---img.testimonial__student-image

testimonial__dynamic = for all elements that's dynamic
cant do this unless testimonial__dynamic is the parent node 