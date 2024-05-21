/* eslint-disable no-dupe-else-if */
/* eslint-disable no-redeclare */
/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/*

Here is most of the javascript for the "sebastian-105" website
*/

// const Sebastian_105 = ["https://sebastian-105.org","https://sebastian-105.com"]
$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) {
    $(".sidenav").addClass("box-shadow");
  } else {
    $(".sidenav").removeClass("box-shadow");
  }
});
var name = localStorage.getItem("personname");
var tabicon105 = localStorage.getItem("tabicon105");
var tabname1234 = localStorage.getItem("tabname1234");
var notification = $("#copyalertcorner123");
var theme = localStorage.getItem("theme");
if ((defaulttheme = "notstet")) {
  $("body").addClass("default");
} else {
  $("body").addClass(theme);
}

document.addEventListener("click", (e) => {
  let myAudio = document.querySelector("#audio");
  myAudio.play();
});
// eslint-disable-next-line no-unused-vars
let defaultThemetext = $("#TheCurrentTheme");
const defaulttab = {
  title: "105 | Sebastian",
  icon: "/105.png",
};

var examplelink = location;
var author = "Sebastian-105";
function homepage() {
  window.open("/");
}
function games() {
  window.open("/game/");
}
function docs() {
  window.open("/docs/");
}
function copytoclipboard(copiedcrap) {
  navigator.clipboard.writeText(copiedcrap);
  console.log(`${copiedcrap} has been copied.`);
  notification.fadeIn("slow").delay(1500).fadeOut("fast");
  notification.css("background-color", "#04AA6D");
  notification.html("Successfully copied: " + copiedcrap);
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//Right Click Stuff         %%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const menu = document.querySelector(".menurightclick");
// add an event listener for the right-click event on the document
document.addEventListener("contextmenu", (e) => {
  // prevent the default browser behavior
  e.preventDefault();
  // show the menu element
  menu.style.display = "block";
  // position the menu element near the cursor horizontally
  menu.style.left = `${event.clientX}px`;
  // position the menu element near the cursor vertically
  menu.style.top = `${event.clientY}px`;
});
// add an event listener for the click event on the document
document.addEventListener("click", hideMenu);
function hideMenu() {
  menu.style.display = "none";
}

// select all the option elements
const options = document.querySelectorAll(".menurightclick>div");

// add an event listener for the click event on each option element
options.forEach((ea) => {
  ea.addEventListener("click", (event) => {
    // get the text content of the clicked option
    const act = event.target.getAttribute("actions");
    if (act === "a") {
      // do something for option 1
      alert("a");
    } else if (act === "") {
      // do something for option 2
      alert("");
    } else if (act === "") {
      // do something for option 3
      console.log("");
    }
  });
});

function closesidenav() {
  $(".sidenav").hide("fast");
  $("#time").hide("slow");
  console.log("Closed sidenav");
}
function opensidenav() {
  $(".sidenav").show("fast");
  console.log("opened sidenav");
}

setTimeout(() => {
  $(".loader-wrapper").fadeOut(105);
}, 1000);

//FUNCTIONS
function openlink(link, type) {
  var myWindow = window.open(
    link,
    "_blank",
    `width=${screen.width} height=${screen.height}`
  );
}
function reseteverything() {
  document.title = "105 | Sebastian";
  localStorage.setItem("tabname1234", "Sebastian S");
  document.querySelector("link[rel='icon']").href = defaulttab.icon;
  $("#copyalertcorner123").fadeIn("fast").delay(1500).fadeOut("fast");
  $("#copyalertcorner123").css("background-color", "#04AA6D");
  $("#copyalertcorner123").html(
    `Successfully Reset tab name back to ${document.title}`
  );
}

// %%%%%%%%%%%%%%%%%%%%%%% KEYBINDS %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
document.addEventListener("keydown", (e) => {
  if (e.key === "g" && e.ctrlKey) {
    e.preventDefault();
    console.log("game page opened");
    window.open("/game/index.html");
  } else if (e.key === "g" && e.altKey) {
    e.preventDefault();
    var aboutblank123412341234 = window.open(
      "/game/index.html",
      "Games | Sebastian",
      `width=${width} height=${height}`
    );
  }else if (e.key === "r" && e.altKey) {
    e.preventDefault();
    var aboutblank123412341234 = window.open(
      "https://rbr.sebastian-105.org",
      "Games | Sebastian",
      `width=${width} height=${height}`
    );
  } else if (e.key === "P" && e.ctrlKey) {
    e.preventDefault();
    openSearchMenu();
  } else if (e.key === "s" && e.ctrlKey) {
    e.preventDefault();
    $("#settingsmenu").fadeToggle("fast");
    console.log("settings page opened");
  } else if (e.key === "h" && e.ctrlKey) {
    e.preventDefault();
    window.open("/index.html");
    console.log("settings page opened");
  } else if (e.key === "c" && e.ctrlKey) {
    e.preventDefault();
    prompt(
      "If your on a LPS school account discord is blocked, even so, here is my link to my discord server",
      "To Be Added Soon"
    );
  } else if (e.key === "c" && e.altKey) {
    var chatroomwindow = window.open(
      "/105/chatroom/index.html",
      "Chatroom | Sebastian",
      `width=${width} height=${height}`
    );
  } else if (e.key === "o" && e.ctrlKey) {
    e.preventDefault();
    window.open("https://organization-105.netlify.app/");
  } else if ((e.key === "d" && e.ctrlKey) || (e.key === "h" && e.altKey)) {
    e.preventDefault();
    window.open("/docs/index.html");
  } else if (e.key === "b" && e.altKey) {
    e.preventDefault();
    aboutblank();
  } else if (e.key === "b" && e.ctrlKey) {
    e.preventDefault();
    aboutblank_window();
  } else if (e.key === "m" && e.ctrlKey) {
    $("#menurealz").fadeToggle("fast");
  } else if (
    (e.key === "a" && e.ctrlKey) ||
    (e.key === "H" && e.ctrlKey) ||
    (e.key === "P" && e.ctrlKey) ||
    e.key === "?"
  ) {
    e.preventDefault();
    openHelpMenu();
  } else if (e.key === "p" && ctrlKey) {
    window.open("https://proxy-105.vercel.app");
  }
});
function settingsclose() {
  $("#settingsclose").click(function (e) {
    $(".menupopup").fadeOut("fast");
  });
}
function allActionsClose() {
  $("#allactionsclose").click(function (e) {
    $(".menupopup").fadeOut("fast");
  });
}
function setTitle(title = "") {
  if (title) {
    document.title = title;
    tabname1234 = title;
  } else {
    document.title = "105 | Sebastian";
  }
}
function expandCollapse() {
  $(".sidenav").css("width", "200px");
}
function darkmoderealz() {
  var checkBox = document.getElementById("dark-mode");
  if (checkBox.checked == true) {
    $("body").addClass("light");
    localStorage.setItem("theme", "light");
    var atheme = localStorage.getItem("theme");
    jQuery("#TheCurrentTheme").text("Default light");
  } else {
    $("body").removeClass("light");
    localStorage.setItem("theme", "default");
    var atheme = localStorage.getItem("theme");
    jQuery("#TheCurrentTheme").text("Default Dark");
  }
}
function setTitleButton() {
  let setTitleButton1 = document.getElementById("setTitle").value;
  setTitle(setTitleButton1);
}
function setThemes(setThemetheme) {
  $("body").attr("theme", "");
  $("body").attr("theme", setThemetheme);
  localStorage.setItem("theme", setThemetheme);
  var atheme = localStorage.getItem("theme");
  jQuery("#TheCurrentTheme").text(theme);
  notification.fadeIn("slow").delay(1500).fadeOut("fast");
  notification.css("background-color", "#04AA6D");
  notification.html(`Successfully to "${atheme}" theme`);
}
function openSettings() {
  $("#settingsmenu").fadeIn("fast");
  console.log("settings page opened");
}
$("body").attr("theme", "");
$("body").attr("theme", theme);
//Theme Set

var jqueryhtml = $("html").html();
html = `<!DoCtyPe HtML> ${jqueryhtml}`;
width = screen.width;
height = screen.height;
var gametitle = localStorage.getItem("tabname1234");

function aboutblank() {
  var aboutblank = window.open(
    "",
    "Sebastian-105",
    `width=${width} height=${height}`
  );
  aboutblank.document.write(html);
}
function aboutblank_window() {
  var aboutblank = window.open("", "Sebastian-105");
  aboutblank.document.write(html);
}

function opengamespage() {
  var myWindowopengamespage = window.open("", "_blank");
  myWindowopengamespage.document.write(gamesContent);
}
function openhomepage() {
  window.open("/");
}
function openchatroom() {
  window.open("/105/chatroom/index.html");
}
function openHelpMenu() {
  $(`#allactions`).fadeToggle(`fast`);
}
function hideE() {
  document.getElementById("hideelement").css("display", "none");
}
class Notification {
  constructor(content, status) {
    this.content = content;
    this.status = status;
    $("#copyalertcorner123").fadeIn("fast").delay(2000).fadeOut("fast");
    $("#copyalertcorner123").css("background-color", `var(--${status})`);
    $("#copyalertcorner123").html(content);
  }
}
