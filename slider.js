const testimonialSliderContainer = document.querySelector(".testimonial--slider-container"),
 testimonialStudentImage = testimonialSliderContainer.querySelector(".testimonial__student-image"),
 testimonialSliderPrev = testimonialSliderContainer.querySelector(".testimonial__slider__prev"),
 testimonialSliderNext = testimonialSliderContainer.querySelector(".testimonial__slider__next");

const testimonialStatementContainer = document.querySelector(".testimonial--statement-container"),
 testimonialStatement = testimonialStatementContainer.querySelector(".testimonial__statement"),
 testimonialStudentFullName = testimonialStatementContainer.querySelector(".testimonial__student__full-name"),
 testimonialStudentJobRole = testimonialStatementContainer.querySelector(".testimonial__student__job-role");

const testimonials = [{
 statement: `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`,
 name: "Tanya Sinclair",
 role: "UX Engineer",
 image: "images/image-tanya.jpg"
},{
 statement: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
 name: "John Tarkpor",
 role: "Junior Front-end Developer",
 image: "images/image-john.jpg"
}];

let testimonialIndex = 0;

function loadTestimonial(testimonial){
 testimonialStudentImage.src = testimonial.image;
 testimonialStatement.innerText = testimonial.statement;
 testimonialStudentFullName.innerText = testimonial.name;
 testimonialStudentJobRole.innerText = testimonial.role;
}

function paintTestimonial(n) {
 if(n >= testimonials.length) {
  n = 0;
  testimonialIndex = n;
 }
 if(n < 0) {
  n = testimonials.length - 1;
  testimonialIndex = n;
 }
 
 loadTestimonial(testimonials[n]);
}

function handleClickNext(){
 paintTestimonial(testimonialIndex += 1);
}

function handleClickPrev(){
 paintTestimonial(testimonialIndex -= 1);
}

function testimonialSliderAddEventListener(){
 testimonialSliderPrev.addEventListener("click", handleClickPrev);
 testimonialSliderNext.addEventListener("click", handleClickNext);
}

function init() {
 testimonialSliderAddEventListener();
 paintTestimonial(testimonialIndex);
}

init();