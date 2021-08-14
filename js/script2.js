// event pada saat link di klik
$('.nav-link').on('click', function(e){

	//ambil isi href
	var tujuan = $(this).attr('href');

	//tangkap element ybs
	var element_tujuan = $(tujuan);
	// console.log(element_tujuan.offset().top);

	// console.log($('html,body').scrollTop());

	// //pindahkan scroll
	$('html,body').animate({
		scrollTop: element_tujuan.offset().top -50
	},1250,'swing');
	
	e.preventDefault();


}); 