
var $form = $('#contactForm'),
    url = 'https://script.google.com/macros/s/AKfycbxdJpbagEzUmkKnVmOA-LEfeVr4JUhyPDBiF69dqsPq-rUdp2sc/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize(),
    success: function(response){
      // alert('已收到您的回應，之後可能就會刷到你出的題目囉！');
      Swal.fire({
        type: 'success',
        title: 'weeeeee！！！已收到您的回應囉！',
        showConfirmButton: false,
        timer: 2000
      })
      setTimeout(function(){// wait for 5 secs(2)
          location.reload(); // then reload the page.(3)
     }, 2100);
      return true;
    }
  })
})
