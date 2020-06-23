function sidenav() {
  $(document).ready(function () {
    // SideNav Button Initialization
    $(".button-collapse").sideNav();
    // SideNav Scrollbar Initialization
    var sideNavScrollbar = document.querySelector(".custom-scrollbar");
    var ps = new PerfectScrollbar(sideNavScrollbar);
  });
}

function errorModal() {
  $("#errorModal").modal("show");
}

function hideErrorModal() {
  $("#errorModal").modal("hide");
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

function newUserModal() {
  $("#newUserModal").modal("show");
}

function hideNewUserModal() {
  $("#newUserModal").modal("hide");
}

function hideRegisterModal() {
  $("#registerModal").modal("hide");
}

function hideLoginModal() {
  $("#loginModal").modal("hide");
}

function loginModal() {
  $("#loginModal").modal("show");
}

function stepper() {
  $(document).ready(function () {
    $(".stepper").mdbStepper();
  });
}

function fileTable() {
  $(document).ready(function () {
    $("#dtBasicExample").DataTable();
    $(".dataTables_length").addClass("bs-select");
  });
}

function counter(totalMembers, tasksCompleted, tasksRemaining, totalTeams) {
  $.fn.jQuerySimpleCounter = function (options) {
    var settings = $.extend(
      {
        start: 0,
        end: 100,
        easing: "swing",
        duration: 400,
        complete: "",
      },
      options
    );

    var thisElement = $(this);

    $({ count: settings.start }).animate(
      { count: settings.end },
      {
        duration: settings.duration,
        easing: settings.easing,
        step: function () {
          var mathCount = Math.ceil(this.count);
          thisElement.text(mathCount);
        },
        complete: settings.complete,
      }
    );
  };

  $("#number1").jQuerySimpleCounter({ end: totalMembers, duration: 3000 });
  $("#number2").jQuerySimpleCounter({ end: tasksCompleted, duration: 3000 });
  $("#number3").jQuerySimpleCounter({ end: tasksRemaining, duration: 2000 });
  $("#number4").jQuerySimpleCounter({ end: totalTeams, duration: 2500 });

  /* AUTHOR LINK */
  $(".about-me-img").hover(
    function () {
      $(".authorWindowWrapper")
        .stop()
        .fadeIn("fast")
        .find("p")
        .addClass("trans");
    },
    function () {
      $(".authorWindowWrapper")
        .stop()
        .fadeOut("fast")
        .find("p")
        .removeClass("trans");
    }
  );
}

function createProject() {
  $("#createProject").modal("show");
}

function createWorkspaceEvent() {
  $("#createEvent").modal("show");
}

function addWorkspaceMembers() {
  $("#addMembers").modal("show");
}

function leaveWorkspace() {
  $("#leaveWorkspace").modal("show");
}

function totalWorkspaceMembers() {
  $("#totalMembers").modal("show");
}

function projectsCompleted() {
  $("#projectsCompleted").modal("show");
}

function projectsRemaining() {
  $("#projectsRemaining").modal("show");
}

function totalTeams() {
  $("#totalTeams").modal("show");
}

function totalTeamMembers() {
  $("#viewMembers").modal("show");
}

function tasksCompleted() {
  $("#tasksDone").modal("show");
}

function tasksRemaining() {
  $("#tasksLeft").modal("show");
}
