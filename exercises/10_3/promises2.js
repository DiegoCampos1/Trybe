const betterDeveloper = "diego";

function whoIsBetterCallback() {
  return new Promise((resolve, reject) => {
    if (betterDeveloper != "vanessa" && betterDeveloper != "diego") {
      reject({
        name: "This is wrong,",
        message: betterDeveloper + "? Really",
      });
    } else {
      resolve({
        name: betterDeveloper,
        message: "CDFs are the best",
      });
    }
  });
}

whoIsBetterCallback()
  .then((result) => {
    console.log(result.name + "? Yeah!" + result.message);
  }).catch((error) => {
    console.log(error.name + " " + error.message);
  }
);
