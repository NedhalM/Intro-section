const featuresBlog = document.getElementById('features')
const companyBlog = document.getElementById('comapny')
const featureBtn = document.getElementById('features_arrow__down')
const companyBtn = document.getElementById('comapny_arrow__down')

featureBtn.addEventListener('click', () => {
    if (featuresBlog.classList.contains('display-none')) {
        featuresBlog.classList.remove('display-none')
    }
    else {
        featuresBlog.classList.add('display-none')
    }
})
companyBtn.addEventListener('click', () => {
    if (companyBlog.classList.contains('display-none')) {
        companyBlog.classList.remove('display-none')
    }
    else {
        companyBlog.classList.add('display-none')
    }
})




