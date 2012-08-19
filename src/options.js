(function(document) {
   document.addEventListener('DOMContentLoaded', function(e) {
      document.getElementById("button").addEventListener('click', function(e) {
         e.preventDefault();
         save_options();
      }, false);

      restore_options();
   }, false);


   function save_options()
    {
      var select = document.getElementById("mode");
      localStorage["mode"] = select.value;
      var status = document.getElementById("status");
      status.innerHTML = "Settings have been saved.";
      setTimeout(function(e) {
        status.innerHTML = "";
      }, 1500);
    }

    function restore_options()
    {
      var mode = localStorage["mode"];
      if (!mode) { return; }
      var select = document.getElementById("mode");
      select.value = mode;
    }
})(document);
