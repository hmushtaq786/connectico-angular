function sidenav() {
  $(document).ready(function() {
    // SideNav Button Initialization
    $(".button-collapse").sideNav();
    // SideNav Scrollbar Initialization
    var sideNavScrollbar = document.querySelector(".custom-scrollbar");
    var ps = new PerfectScrollbar(sideNavScrollbar);
  });
}

function membersModal() {
  $("#membersModal").modal("show");
}

function workspacesModal() {
  $("#workspacesModal").modal("show");
}

function projectsModal() {
  $("#projectsModal").modal("show");
}

function teamsModal() {
  $("#teamsModal").modal("show");
}

function registerModal() {
  $("#registerModal").modal("show");
}

function loginModal() {
  $("#loginModal").modal("show");
}

function stepper() {
  $(document).ready(function() {
    $(".stepper").mdbStepper();
  });
}
