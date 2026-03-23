// Get username from input element ✅
// Get data from https://api.github.com/users/${username}
// Add data to the html page (profile.html)
// When user adds wrong username then show him an alert with "This username is not found"
const input = document.querySelector(`#input`);
const button = document.querySelector(`#button`);
const img = document.querySelector(`#avatar_url`);
const displayInfo = document.querySelectorAll(`span`);

async function getGithubData(username) {
  if (!username) {
    throw new Error("username is required!");
  }
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (!response.ok) {
    throw new Error(`username "${username}" does not exist `);
  }

  const data = await response.json();

  return {
    pic: data.avatar_url,
    name: data.name,
    bio: data.bio,
    twitter: data.twitter_username,
    followers: data.followers,
  };
}

// getGithubData("")
//   .then((result) => {
//     console.log(result.followers);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

async function printData() {
  const inputValue = input.value;
  try {
    const result = await getGithubData(inputValue);
    img.src = result.pic;
    displayInfo[0].textContent = result.name ?? "not provided";
    displayInfo[1].textContent = result.bio ?? "not provided";
    displayInfo[2].textContent = result.twitter ?? "not provided";
    displayInfo[3].textContent = result.followers ?? "not provided";
  } catch (error) {
    alert(error.message);
  }
}

button.addEventListener("click", (event) => {
  event.preventDefault();
  printData();
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
});
