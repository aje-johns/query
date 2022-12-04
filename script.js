const link = document.getElementById("email");
const emailAddress = document.getElementById("uwEmail");
const rulebookInput = document.getElementById("rbInput");
const queryDesc = document.getElementById("queryDesc");
const auditorEmail = document.getElementById("auditorEmail");
const axisShare = document.getElementById("axisShare");
const op = document.getElementById("output");

link.onclick = () => {
  const underWriterEmailId = emailAddress.value;
  const rulebookInputValue = rulebookInput.value;
  const queryDescription = queryDesc.value;
  let assuredName = "Test Assured";
  let submissionId = "Test SID";
  let axisShareValue = axisShare.value;
  let auditorEmailAddress = auditorEmail.value;
  let ccArray = ["a@gmail.com", "b@gmail.com"];

  let subject = `${assuredName} /\ ${submissionId} /\ ${axisShareValue}`;
  let cc = [...ccArray, auditorEmailAddress];
  let uwFirstName = "";
  let newLine = "%0a%0d%0a";
  let policyNumberList = [];
  let sId = "";
  let credit = "Thanks" + "&" + "Regards";
  let body = `Hi ${uwFirstName}, ${newLine}
  We have a Query Regarding the below Policy.${newLine}
  Policy Number : ${policyNumberList} ${newLine}
  Submission ID : ${sId}${newLine}
  Assured Name : ${assuredName}${newLine}
  Query Description : ${queryDescription}${newLine}
  ${credit}${newLine}${newLine}`;
  let hrefContent = `mailto:${underWriterEmailId}?subject=${subject}&cc=${cc}&body=${body}`;
  console.log(hrefContent);
  op.value = body;
  let uwEmailID = link.setAttribute("href", hrefContent);
};

function extractName(name) {}
