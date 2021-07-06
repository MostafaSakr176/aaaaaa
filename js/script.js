$('.accept').click(function() {
    var selectedSecttion = $(this).closest('.recent-order')
    //console.log(this);
    selectedSecttion.remove();
   // selectedSecttion.addClass("hide_modal");
   // $("#receive").addClass("d-none")
   // $('#ModalForm').modal('show');
   //$('.close').click(); 
   $('.modal-backdrop').remove();
   //console.log("success");
})
// $(".hide_modal").click(function () {
//     $('.modal-backdrop').remove();
// })