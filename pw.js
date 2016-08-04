function credentialsValid() {
  var userId = prompt("Enter User Id");
  var password = prompt ("Enter password");
  return userId !== password && userId.length >=6 && password.length >=6 &&
  (!userId.includes("!") && !userId.includes("#") && !userId.includes("$")) &&
  ((password.includes("!") || password.includes("#") || password.includes("$")) && !password.includes("password")
  && (password.includes("1") || password.includes("2") || password.includes("3") || password.includes("4") || password.includes("5") || password.includes("6") || password.includes("7") || password.includes("8") || password.includes("9")
  || password.includes("0")) && password !== password.toUpperCase() && password !== password.toLowerCase());
}

function idCheck(id)
{
  if (id.length >=6 && !id.includes("!") && !id.includes("#") && !id.includes("$"))
  {return "Valid: True";}
  if (!id.length >=6) {
    return "Valid: False, reason: User ID too short. [User ID must be at least 6 characters]";
  }
  if (id.includes("!") || id.includes("#") || id.includes("$"))
  {return "Valid: False, reason: User ID cannot contain '!', '#' or '$'."}
}

function pwCheck(pw) {
  if (!(pw.includes("!") || pw.includes("#") || pw.includes("$"))) {
    return "Valid: False, reason: Password must include '!', '#' or '$'."
  }
  if (!(pw.includes("1") || pw.includes("2") || pw.includes("3") || pw.includes("4") || pw.includes("5") || pw.includes("6") || pw.includes("7") || pw.includes("8") || pw.includes("9")
  || pw.includes("0"))) {
    return "Valid: False, reason: Password must include at least one number."
  }
  if (pw == pw.toUpperCase() || pw == pw.toLowerCase()){
    return "Valid: False, reason: Password must include at least one upper case letter and at least one lower case letter."
  } else {return "Valid: True"}
}
