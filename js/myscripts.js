			var searchLink = document.querySelector(".search-hotel button");
			var popup = document.querySelector(".map-popup");
			var searchHotel = popup.querySelector(".search");
			
			searchLink.addEventListener("click", function(evt) {
				evt.preventDefault();
				popup.classList.toggle("popup-visible");
			});
			
			searchHotel.addEventListener("click", function(evt) {
				evt.preventDefault();
				popup.classList.remove("popup-visible");
			}); 
			
			$(function() {
			 
			  (function quantityProducts() {
				var $quantityArrowMinusAdults = $(".quantity-adults-minus");
				var $quantityArrowPlusAdults = $(".quantity-adults-plus");
				var $quantityNumAdults = $(".adults");
			 
				$quantityArrowMinusAdults.click(quantityMinus);
				$quantityArrowPlusAdults.click(quantityPlus);
			 
				function quantityMinus() {
				  if ($quantityNumAdults.val() > 1) {
					$quantityNumAdults.val(+$quantityNumAdults.val() - 1);
				  }
				}
			 
				function quantityPlus() {
				  $quantityNumAdults.val(+$quantityNumAdults.val() + 1);
				}
				
			  })();
			});
			
			$(function() {
				(function quantityProducts() {
					var $quantityArrowMinusKids = $(".quantity-kids-minus");
					var $quantityArrowPlusKids = $(".quantity-kids-plus");
					var $quantityNumKids = $(".kids");
			 
					$quantityArrowMinusKids.click(quantityMinus);
					$quantityArrowPlusKids.click(quantityPlus);
			 
					function quantityMinus() {
						if ($quantityNumKids.val() > 1) {
							$quantityNumKids.val(+$quantityNumKids.val() - 1);
						}
					}
			 
					function quantityPlus() {
						$quantityNumKids.val(+$quantityNumKids.val() + 1);
					}
				})();
			 });