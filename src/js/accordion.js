import { addClass, removeClass } from "./utils-class";

function accordion() {
	const accordionContainer = document.getElementsByClassName("accordion");

	for (let i = 0; i < accordionContainer.length; i++) {
		const e = accordionContainer[i];

		const button = document.createElement("button")
		addClass(button, "absolute block md:hidden right-0 transform -translate-y-1/2 focus:outline-none transition duration-200 rotate-0")
		button.style.top = "50%";
		button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
		 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
		 class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline>
		 </svg>`

		 const ulList = e.getElementsByTagName("ul")[0];

		 addClass(ulList, "transition duration-200");

		 function onClickAccordion() {
		 	if (ulList.className.indexOf("h-0") > -1) {
		 		addClass(button, "rotate-180");
		 		addClass(ulList, "opacity-100");
		 		removeClass(ulList, "h-0 invisible opacity-0")
		 	} else {
		 		removeClass(button, "rotate-180");
		 		removeClass(ulList, "opacity-100");
		 		addClass(ulList, "h-0 invisible opacity-0")
		 	}
		 }

		 button.addEventListener("click", onClickAccordion)

		 e.getElementsByTagName("h5")[0].append(button)

	}
}

if (window.innerWidth < 768) {
	window.addEventListener("load", accordion)
}