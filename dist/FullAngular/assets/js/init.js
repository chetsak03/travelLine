(function($) {
  $(function() {
    $(".dropdown-trigger").dropdown();
    $(".sidenav").sidenav();
    $(".tap-target").tapTarget();
    $(".tooltipped").tooltip();
    $("#modal1").modal();
    $("#modal1").modal("open");
  });
})(jQuery);
