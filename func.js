const featuresBlog = document.getElementById("features");
const companyBlog = document.getElementById("comapny");
const featureBtn = document.getElementById("features_arrow__down");
const companyBtn = document.getElementById("comapny_arrow__down");



featuresBlog.style.display = "none";

featureBtn.addEventListener("click", (event) => {
    if (featuresBlog.style.display == "none") {
        featuresBlog.style.display = "block";
    }
    else {
        featuresBlog.style.display = "none";
    }
})


companyBlog.style.display = "none";

companyBtn.addEventListener("click", (event) => {
    if (companyBlog.style.display == "none") {
        companyBlog.style.display = "block";
    }
    else {
        companyBlog.style.display = "none";
    }
})



