const link = document.getElementById("email");
const emailAddress = document.getElementById("uwEmail");
const rulebookInput = document.getElementById("rbInput");
const queryDesc = document.getElementById("queryDesc");
const auditorEmail = document.getElementById("auditorEmail");
const axisShare = document.getElementById("axisShare");

link.onclick = () => {
  const underWriterEmailId = emailAddress.value;
  const rulebookInputValue = rulebookInput.value;
  const queryDescription = queryDesc.value;
  let axisShareValue = axisShare.value;
  let auditorEmailAddress = auditorEmail.value;
  let ccArray = ["a@gmail.com", "b@gmail.com"];

  let subIdRegex = /S-[0-9]*-[0-9]*/gm;
  let policyNumberRegex = /[0-9]*\/[0-9]*\/ | [0-9]*\/[0-9]*\/[0-9]*\/[0-9]*\//;

  let policyNumberList = rulebookInputValue.match(policyNumberRegex);
  let submissionId = rulebookInputValue.match(subIdRegex);
  let assuredName = getStringBetween(
    "ASSURED:",
    "BROKER CONTACT:",
    rulebookInputValue
  );

  let subject = `${assuredName} /\ ${submissionId} /\ ${axisShareValue}`;
  let cc = [...ccArray, auditorEmailAddress];
  let uwFirstName = capitalizeName(getName(underWriterEmailId).firstName);
  let newLine = "%0a%0d%0a";
  let credit = "Thanks" + "&" + "Regards";
  console.log(uwFirstName);
  let body = `Hi ${uwFirstName}, ${newLine}
  We have a Query Regarding the below Policy.${newLine}
  Policy Number : ${policyNumberList} ${newLine}
  Submission ID : ${submissionId}${newLine}
  Assured Name : ${assuredName}${newLine}
  Query Description : ${queryDescription}${newLine}
  ${credit}${newLine}${newLine}`;
  let hrefContent = `mailto:${underWriterEmailId}?subject=${subject}&cc=${cc}&body=${body}`;

  let uwEmailID = link.setAttribute("href", hrefContent);
};

function getName(name) {
  let fullName = name.split("@", 10)[0];
  return (nameObj = {
    firstName: fullName.split(".", 10)[0],
    secondName: fullName.split(".", 10)[1],
  });
}

function capitalizeName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function getStringBetween(start, end, content) {
  const result = content.match(new RegExp(start + "(.*)" + end));
  const output = result[1];
  return output;
}
