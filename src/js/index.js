import "../style/index.scss";
/*
{
    includeCover: true, // if includeCover is true the algorithm should
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
    socialMediaPosition: "left", // social media bar position (left or right)
    
    twitter: null, // social media usernames
    github: "alesanchezr",
    linkedin: null,
    instagram: null,

    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
}
*/

function render(variables = {}) {
  console.log("These are the current variables: ", variables);
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let name = "Lucy";
  let lastname = "Boilett";
  let twitter = "alesanchezr";
  let github = "alesanchezr";
  let linkedin = "alesanchezr";
  let instagram = "alesanchezr";
  let role = "Web Developer";
  let city = "Miami";
  let country = "USA";

  if (variables.name != null && variables.name.trim() != "")
    name = variables.name;
  if (variables.lastname != null && variables.lastname.trim() != "")
    lastname = variables.lastname;
  if (variables.twitter != null && variables.twitter.trim() != "")
    twitter = variables.twitter;
  if (variables.github != null && variables.github.trim() != "")
    github = variables.github;
  if (variables.linkedin != null && variables.linkedin.trim() != "")
    linkedin = variables.linkedin;
  if (variables.instagram != null && variables.instagram.trim() != "")
    instagram = variables.instagram;
  if (variables.role != null) role = variables.role;
  if (variables.city != null) city = variables.city;
  if (variables.country != null) country = variables.country;

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${window.variables.avatarURL}" class="photo" />
          <h1>${name} ${lastname}</h1>
          <h2>${role}</h2>
          <h3>${city}, ${country}</h3>
          <ul class="${variables.socialMediaPosition}">
            <li><a href="https://twitter.com/${twitter}"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/${github}"><i class="fa fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${linkedin}"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${instagram}"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables);
  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
