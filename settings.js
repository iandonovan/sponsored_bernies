document.addEventListener('DOMContentLoaded', function(){
	var enable_checkbox = document.getElementById("enable_checkbox");
	var radio_buttons = document.getElementById("radios");
	var bernie_radio = document.getElementById("use_bernies");
	var custom_radio = document.getElementById("use_custom");
	var already_on = localStorage["enable_extension"];
	var already_bernie = localStorage["use_bernies"];

	// Remember user's enabled state
	if (already_on == "true"){
		enable_checkbox.checked = true;
		radio_buttons.style.display = 'block';
	}
	else{
		enable_checkbox.checked = false;
		radio_buttons.style.display = 'none';
	}

	// Remember user's picture choice
	if (already_bernie == "true")
		bernie_radio.checked = true;
	else
		custom_radio.checked = true;

	// Hide radio buttons on disable, set enabled localstorage
	enable_checkbox.addEventListener("change", function(){
		localStorage["enable_extension"] = enable_checkbox.checked;
		if (enable_checkbox.checked)
			radio_buttons.style.display = 'block';
		else
			radio_buttons.style.display = 'none';
	});

	// Set picture choice localstorage
	radio_buttons.addEventListener("change", function(){
		if (document.getElementById("use_bernies").checked){
			localStorage["use_bernies"] = true;
			localStorage["use_custom"] = false;
		}
		else{
			localStorage["use_custom"] = true;
			localStorage["use_bernies"] = false;
		}
	});
});
