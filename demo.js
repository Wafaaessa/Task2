
let upper = document.querySelector('.upper');
let profile = document.querySelector('.profile');
let title = document.querySelector('.title');
let social2 = document.querySelector('.social2');
let paragraph = document.querySelector('.paragraph');

upper.innerHTML=`<img src="https://i.imgur.com/Qtrsrk5.jpg" class="img-fluid">`
profile.innerHTML=`<img src="https://i.imgur.com/JgYD2nQ.jpg" class="rounded-circle" width="80">`
title.innerHTML= `<h1 class="name fw-bolder">Harsh P</h1>
<p class="fw-bolder mt-3  btn btn-sm follow">Product Designer</p>
<div class="container-fluid">
<div class="row">
<div class="col-md-12 text-center mt-4 pt-3 ">
<p class="text-center">Crafting Seamless Experiences, Where UX Design Meets Business Efficiency!</p>
</div>
</div>
</div>`

social2.innerHTML=` <a  href=' https://twitter.com/?lang=ar' class="icon p-2 mx-2  justify-content-center align-items-center">
<i class="fa-brands fa-twitter mx-3 p-2 text-info"></i>
</a>
<a  href='https://www.behance.net/' class="icon p-2 mx-2  justify-content-center align-items-center">
<i class="fa-brands fa-behance mx-5 p-2 text-info"></i>
</a>
<div class="icon p-2 mx-0 justify-content-center align-items-center">
<i class="fa-solid fa-basketball text-danger mx-0 p-2"></i>
</div>`

paragraph.innerHTML=` <div class="col-md-12 mt-3">
<h5>Create a Component: </h5>  
   <p>
       Create a functional component named UserProfile that displays the user's name, email, and profile picture.
       <br>
       Additional: Use dummy data to display information.
   </p>
</div>`














