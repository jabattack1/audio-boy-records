import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/mobile.css';
import '../css/scroller.css';
import '../css/sign-up.css';
import '../css/shoppingCart.css';

var Inputmask = require('inputmask');

class SignUp extends React.Component{
	constructor(props) {
		super(props);

       this.state = {
           fields: {gender:'male', country:'USA'},
           errors: {}
       }
		this.isNumberKeyPhone = this.isNumberKeyPhone.bind(this);
		this.checkMale = this.checkMale.bind(this);
		this.checkFemale = this.checkFemale.bind(this);
    }


	render(){
		if (typeof window !== 'undefined') {
					// Get the modal
			var modal = document.getElementById("myModal");

			// Get the button that opens the modal
			var btn = document.getElementById("myBtn");

			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks on the button, open the modal 
			btn.onclick = function() {
			  modal.style.display = "block";
			}

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			  modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			  if (event.target == modal) {
			    modal.style.display = "none";
			  }
			}
		}

		return(
			<div>
				<div id="myModal" className="modal">
				  	<div className="modal-content">
				    <span className="close">&times;</span>
						<div className='signUpBox' id='signBox'>
							<form>
							<div id='signUp'>
								<h3 id='signUpHeading'>GET BLASTED BY EMAILS FROM</h3>
								<img src='https://i.imgur.com/QpsNlJb.png' id='signUpImage' />
								<p id='signUpSay'>Sign up and get exclusive promotional discounts on merchandise and information on upcoming events. We promise not to blast you with a ton of emails.</p>
								<label htmlFor='first_name' id='firstNameSignUpText'>First Name<span id='firstNameError' style={{color: "red"}}>{this.state.errors["first_name"]}</span></label>
								<input ref='first_name' type='text' name='first_name' id='firstNameSignup' onChange={this.handleChange.bind(this, "first_name")} value={this.state.fields["first_name"]}/><span className='greenCheck' id='firstNameCheck' style={{color:"green"}}>&#x2713;</span>
								<label htmlFor='last_name' id='lastNameSignUpText' >Last Name<span id='lastNameError' style={{color: "red"}}>{this.state.errors["last_name"]}</span></label>
								<input ref='last_name' type='text' name='last_name' id='lastNameSignup' onChange={this.handleChange.bind(this, "last_name")} value={this.state.fields["last_name"]}/><span className='greenCheck' id='lastNameCheck' style={{color:"green"}}>&#x2713;</span>
								<label htmlFor='email' id='emailSignUpText' >Email<span id='emailError' style={{color: "red"}}>{this.state.errors["email"]}</span></label>
								<input ref='email' type='text' name='email_field' id='emailSignUp' onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/><span className='greenCheck' id='emailCheck' style={{color:"green"}}>&#x2713;</span>
								<label htmlFor='phone' id='phoneSignUpText' >Phone Number</label>
								<input ref='phone' type='tel' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' name='phone_field' id='phoneSignUp' onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]} required/><span className='greenCheck' id='phoneCheck' style={{color:"green"}}>&#x2713;</span>
								<div className='genderStuff'>
									<label htmlFor='gender' id='genderSignUpText' >Gender</label>
									<label id='femaleCheck' className='signupOption'>
									<div id='femaleCheckActual' className='signupCheckBox' onClick={this.checkFemale.bind(this, 'gender')}><span id='checkboxTextFemale'>FEMALE</span></div>
									</label>
									<label id='maleCheck' className='signupOption'>
									<div  id='maleCheckActual' className='signupCheckBox' onClick={this.checkMale.bind(this, 'gender')}><span id='checkboxTextMale'>MALE</span></div>
									</label>
									<input name='gender' id='gender' hidden />
								</div>
								<div className='birthdayStuff'>
									<label htmlFor='dob' id ='birthdaySignUpText' >Birthday</label>
									<input type='date' name='bday' id='bdaySignup' onChange={this.handleChange.bind(this, "dob")} value={this.state.fields["dob"]}/>
								</div>
								<label htmlFor='country' id='countrySignUpText' >Country of Origin</label>
								<select name='country_field' id='countrySignUp' onChange={this.handleChange.bind(this, "country")} value={this.state.fields["country"]}>
									<option value="AFG">Afghanistan</option>
									<option value="ALA">Åland Islands</option>
									<option value="ALB">Albania</option>
									<option value="DZA">Algeria</option>
									<option value="ASM">American Samoa</option>
									<option value="AND">Andorra</option>
									<option value="AGO">Angola</option>
									<option value="AIA">Anguilla</option>
									<option value="ATA">Antarctica</option>
									<option value="ATG">Antigua and Barbuda</option>
									<option value="ARG">Argentina</option>
									<option value="ARM">Armenia</option>
									<option value="ABW">Aruba</option>
									<option value="AUS">Australia</option>
									<option value="AUT">Austria</option>
									<option value="AZE">Azerbaijan</option>
									<option value="BHS">Bahamas</option>
									<option value="BHR">Bahrain</option>
									<option value="BGD">Bangladesh</option>
									<option value="BRB">Barbados</option>
									<option value="BLR">Belarus</option>
									<option value="BEL">Belgium</option>
									<option value="BLZ">Belize</option>
									<option value="BEN">Benin</option>
									<option value="BMU">Bermuda</option>
									<option value="BTN">Bhutan</option>
									<option value="BOL">Bolivia, Plurinational State of</option>
									<option value="BES">Bonaire, Sint Eustatius and Saba</option>
									<option value="BIH">Bosnia and Herzegovina</option>
									<option value="BWA">Botswana</option>
									<option value="BVT">Bouvet Island</option>
									<option value="BRA">Brazil</option>
									<option value="IOT">British Indian Ocean Territory</option>
									<option value="BRN">Brunei Darussalam</option>
									<option value="BGR">Bulgaria</option>
									<option value="BFA">Burkina Faso</option>
									<option value="BDI">Burundi</option>
									<option value="KHM">Cambodia</option>
									<option value="CMR">Cameroon</option>
									<option value="CAN">Canada</option>
									<option value="CPV">Cape Verde</option>
									<option value="CYM">Cayman Islands</option>
									<option value="CAF">Central African Republic</option>
									<option value="TCD">Chad</option>
									<option value="CHL">Chile</option>
									<option value="CHN">China</option>
									<option value="CXR">Christmas Island</option>
									<option value="CCK">Cocos (Keeling) Islands</option>
									<option value="COL">Colombia</option>
									<option value="COM">Comoros</option>
									<option value="COG">Congo</option>
									<option value="COD">Congo, the Democratic Republic of the</option>
									<option value="COK">Cook Islands</option>
									<option value="CRI">Costa Rica</option>
									<option value="CIV">Côte d'Ivoire</option>
									<option value="HRV">Croatia</option>
									<option value="CUB">Cuba</option>
									<option value="CUW">Curaçao</option>
									<option value="CYP">Cyprus</option>
									<option value="CZE">Czech Republic</option>
									<option value="DNK">Denmark</option>
									<option value="DJI">Djibouti</option>
									<option value="DMA">Dominica</option>
									<option value="DOM">Dominican Republic</option>
									<option value="ECU">Ecuador</option>
									<option value="EGY">Egypt</option>
									<option value="SLV">El Salvador</option>
									<option value="GNQ">Equatorial Guinea</option>
									<option value="ERI">Eritrea</option>
									<option value="EST">Estonia</option>
									<option value="ETH">Ethiopia</option>
									<option value="FLK">Falkland Islands (Malvinas)</option>
									<option value="FRO">Faroe Islands</option>
									<option value="FJI">Fiji</option>
									<option value="FIN">Finland</option>
									<option value="FRA">France</option>
									<option value="GUF">French Guiana</option>
									<option value="PYF">French Polynesia</option>
									<option value="ATF">French Southern Territories</option>
									<option value="GAB">Gabon</option>
									<option value="GMB">Gambia</option>
									<option value="GEO">Georgia</option>
									<option value="DEU">Germany</option>
									<option value="GHA">Ghana</option>
									<option value="GIB">Gibraltar</option>
									<option value="GRC">Greece</option>
									<option value="GRL">Greenland</option>
									<option value="GRD">Grenada</option>
									<option value="GLP">Guadeloupe</option>
									<option value="GUM">Guam</option>
									<option value="GTM">Guatemala</option>
									<option value="GGY">Guernsey</option>
									<option value="GIN">Guinea</option>
									<option value="GNB">Guinea-Bissau</option>
									<option value="GUY">Guyana</option>
									<option value="HTI">Haiti</option>
									<option value="HMD">Heard Island and McDonald Islands</option>
									<option value="VAT">Holy See (Vatican City State)</option>
									<option value="HND">Honduras</option>
									<option value="HKG">Hong Kong</option>
									<option value="HUN">Hungary</option>
									<option value="ISL">Iceland</option>
									<option value="IND">India</option>
									<option value="IDN">Indonesia</option>
									<option value="IRN">Iran, Islamic Republic of</option>
									<option value="IRQ">Iraq</option>
									<option value="IRL">Ireland</option>
									<option value="IMN">Isle of Man</option>
									<option value="ISR">Israel</option>
									<option value="ITA">Italy</option>
									<option value="JAM">Jamaica</option>
									<option value="JPN">Japan</option>
									<option value="JEY">Jersey</option>
									<option value="JOR">Jordan</option>
									<option value="KAZ">Kazakhstan</option>
									<option value="KEN">Kenya</option>
									<option value="KIR">Kiribati</option>
									<option value="PRK">Korea, Democratic People's Republic of</option>
									<option value="KOR">Korea, Republic of</option>
									<option value="KWT">Kuwait</option>
									<option value="KGZ">Kyrgyzstan</option>
									<option value="LAO">Lao People's Democratic Republic</option>
									<option value="LVA">Latvia</option>
									<option value="LBN">Lebanon</option>
									<option value="LSO">Lesotho</option>
									<option value="LBR">Liberia</option>
									<option value="LBY">Libya</option>
									<option value="LIE">Liechtenstein</option>
									<option value="LTU">Lithuania</option>
									<option value="LUX">Luxembourg</option>
									<option value="MAC">Macao</option>
									<option value="MKD">Macedonia, the former Yugoslav Republic of</option>
									<option value="MDG">Madagascar</option>
									<option value="MWI">Malawi</option>
									<option value="MYS">Malaysia</option>
									<option value="MDV">Maldives</option>
									<option value="MLI">Mali</option>
									<option value="MLT">Malta</option>
									<option value="MHL">Marshall Islands</option>
									<option value="MTQ">Martinique</option>
									<option value="MRT">Mauritania</option>
									<option value="MUS">Mauritius</option>
									<option value="MYT">Mayotte</option>
									<option value="MEX">Mexico</option>
									<option value="FSM">Micronesia, Federated States of</option>
									<option value="MDA">Moldova, Republic of</option>
									<option value="MCO">Monaco</option>
									<option value="MNG">Mongolia</option>
									<option value="MNE">Montenegro</option>
									<option value="MSR">Montserrat</option>
									<option value="MAR">Morocco</option>
									<option value="MOZ">Mozambique</option>
									<option value="MMR">Myanmar</option>
									<option value="NAM">Namibia</option>
									<option value="NRU">Nauru</option>
									<option value="NPL">Nepal</option>
									<option value="NLD">Netherlands</option>
									<option value="NCL">New Caledonia</option>
									<option value="NZL">New Zealand</option>
									<option value="NIC">Nicaragua</option>
									<option value="NER">Niger</option>
									<option value="NGA">Nigeria</option>
									<option value="NIU">Niue</option>
									<option value="NFK">Norfolk Island</option>
									<option value="MNP">Northern Mariana Islands</option>
									<option value="NOR">Norway</option>
									<option value="OMN">Oman</option>
									<option value="PAK">Pakistan</option>
									<option value="PLW">Palau</option>
									<option value="PSE">Palestinian Territory, Occupied</option>
									<option value="PAN">Panama</option>
									<option value="PNG">Papua New Guinea</option>
									<option value="PRY">Paraguay</option>
									<option value="PER">Peru</option>
									<option value="PHL">Philippines</option>
									<option value="PCN">Pitcairn</option>
									<option value="POL">Poland</option>
									<option value="PRT">Portugal</option>
									<option value="PRI">Puerto Rico</option>
									<option value="QAT">Qatar</option>
									<option value="REU">Réunion</option>
									<option value="ROU">Romania</option>
									<option value="RUS">Russian Federation</option>
									<option value="RWA">Rwanda</option>
									<option value="BLM">Saint Barthélemy</option>
									<option value="SHN">Saint Helena, Ascension and Tristan da Cunha</option>
									<option value="KNA">Saint Kitts and Nevis</option>
									<option value="LCA">Saint Lucia</option>
									<option value="MAF">Saint Martin (French part)</option>
									<option value="SPM">Saint Pierre and Miquelon</option>
									<option value="VCT">Saint Vincent and the Grenadines</option>
									<option value="WSM">Samoa</option>
									<option value="SMR">San Marino</option>
									<option value="STP">Sao Tome and Principe</option>
									<option value="SAU">Saudi Arabia</option>
									<option value="SEN">Senegal</option>
									<option value="SRB">Serbia</option>
									<option value="SYC">Seychelles</option>
									<option value="SLE">Sierra Leone</option>
									<option value="SGP">Singapore</option>
									<option value="SXM">Sint Maarten (Dutch part)</option>
									<option value="SVK">Slovakia</option>
									<option value="SVN">Slovenia</option>
									<option value="SLB">Solomon Islands</option>
									<option value="SOM">Somalia</option>
									<option value="ZAF">South Africa</option>
									<option value="SGS">South Georgia and the South Sandwich Islands</option>
									<option value="SSD">South Sudan</option>
									<option value="ESP">Spain</option>
									<option value="LKA">Sri Lanka</option>
									<option value="SDN">Sudan</option>
									<option value="SUR">Suriname</option>
									<option value="SJM">Svalbard and Jan Mayen</option>
									<option value="SWZ">Swaziland</option>
									<option value="SWE">Sweden</option>
									<option value="CHE">Switzerland</option>
									<option value="SYR">Syrian Arab Republic</option>
									<option value="TWN">Taiwan, Province of China</option>
									<option value="TJK">Tajikistan</option>
									<option value="TZA">Tanzania, United Republic of</option>
									<option value="THA">Thailand</option>
									<option value="TLS">Timor-Leste</option>
									<option value="TGO">Togo</option>
									<option value="TKL">Tokelau</option>
									<option value="TON">Tonga</option>
									<option value="TTO">Trinidad and Tobago</option>
									<option value="TUN">Tunisia</option>
									<option value="TUR">Turkey</option>
									<option value="TKM">Turkmenistan</option>
									<option value="TCA">Turks and Caicos Islands</option>
									<option value="TUV">Tuvalu</option>
									<option value="UGA">Uganda</option>
									<option value="UKR">Ukraine</option>
									<option value="ARE">United Arab Emirates</option>
									<option value="GBR">United Kingdom</option>
									<option value="USA" selected="selected">United States</option>
									<option value="UMI">United States Minor Outlying Islands</option>
									<option value="URY">Uruguay</option>
									<option value="UZB">Uzbekistan</option>
									<option value="VUT">Vanuatu</option>
									<option value="VEN">Venezuela, Bolivarian Republic of</option>
									<option value="VNM">Viet Nam</option>
									<option value="VGB">Virgin Islands, British</option>
									<option value="VIR">Virgin Islands, U.S.</option>
									<option value="WLF">Wallis and Futuna</option>
									<option value="ESH">Western Sahara</option>
									<option value="YEM">Yemen</option>
									<option value="ZMB">Zambia</option>
									<option value="ZWE">Zimbabwe</option>
								</select>
								<label htmlFor='fav_artist' id='artistSignUpText'>Favorite Artist</label>
								<input type='text' name='fav_artist' id='artistSignup' onChange={this.handleChange.bind(this, "fav")} value={this.state.fields["fav"]}/><span className='greenCheck' id='artistCheck' style={{color:"green"}}>&#x2713;</span>
								<button id='signupButton' onClick= {this.contactSubmit.bind(this)}>REGISTER</button>
							</div> 
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}

	isNumberKeyMonth(e){
	    const re = /^[0-9\b]+$/;
	    if (e.target.value == '' || re.test(e.target.value)){
	        this.setState({month: e.target.value});
	    }
	    else{
			return false;
	    }
	}

	isNumberKeyYear(e){
	    const re = /^[0-9\b]+$/;
	    if (e.target.value == '' || re.test(e.target.value)){
	        this.setState({year: e.target.value});
	    }
	    else{
			return false;
	    }
	}

	isNumberKeyDay(e){
	    const re = /^[0-9\b]+$/;
	    if (e.target.value == '' || re.test(e.target.value)){
	        this.setState({day: e.target.value});
	    }
	    else{
			return false;
	    }
	}

	isNumberKeyPhone(e){
	    const re = /^[0-9\b]+$/;
	    if (e.target.value == '' || re.test(e.target.value)){
	        this.setState({phone: e.target.value});
	    }
	    else{
			return false;
	    }
	}

	checkMale(field, e){
		console.log('the lion');
		var maleColor = document.getElementById('maleCheck').style.backgroundColor;
		var femaleColor = document.getElementById('femaleCheck').style.backgroundColor;
		if(femaleColor === 'white'){	
		}
		else{
			document.getElementById('checkboxTextMale').style.color = 'white';
			document.getElementById('maleCheck').style.backgroundColor = 'black';
			document.getElementById('checkboxTextFemale').style.color = 'black';
			document.getElementById('femaleCheck').style.backgroundColor = 'white';
	        let fields = this.state.fields;
	        fields[field] = 'male'        
	        this.setState({fields});
		}
 	}

	checkFemale(field, e){
  		console.log('the lioness');
		var femaleColor = document.getElementById('femaleCheck').style.backgroundColor;
		var maleColor = document.getElementById('maleCheck').style.backgroundColor;
		if(maleColor ==='white'){
		}
		else{
			document.getElementById('checkboxTextFemale').style.color = 'white';
			document.getElementById('femaleCheck').style.backgroundColor = 'black';		
			document.getElementById('checkboxTextMale').style.color = 'black';
			document.getElementById('maleCheck').style.backgroundColor = 'white';  
	        let fields = this.state.fields;
	        fields[field] = 'female'        
	        this.setState({fields});
		}
	}


	handleValidation(){
		console.log('vietnam');
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["first_name"]){
        	console.log('vietnamNoName');
           formIsValid = false;
           errors["first_name"] = "You can't leave this blank";
        }

        if(typeof fields["first_name"] !== "undefined"){
        	console.log('vietnamName');
           if(!fields["first_name"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["first_name"] = "Only letters";
           }        
        }

         //Name
        if(!fields["last_name"]){
        	console.log('vietnamNoLastName');
           formIsValid = false;
           errors["last_name"] = "You can't leave this blank";
        }

        if(typeof fields["last_name"] !== "undefined"){
        	console.log('vietnamLastName');
           if(!fields["last_name"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["last_name"] = "Only letters";
           }        
        }

        //Email
        if(!fields["email"]){
        	console.log('vietnamNoEmail');
           formIsValid = false;
           errors["email"] = "You can't leave this blank";
        }

        if(typeof fields["email"] !== "undefined"){
        	console.log('vietnamEmail');
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
		} 

		// Phone
        if(!fields["phone"]){
        	console.log('vietnamNoPhone');
           formIsValid = false;
           errors["phone"] = "Cannot be empty";
        }

		if(typeof fields["phone"] !== "undefined"){
		}

        console.log(this.state);
       	this.setState({errors: errors});
       	return formIsValid;
   	}

   	contactSubmit(e){
        e.preventDefault();
        if(this.handleValidation()){
        	console.log('7');
           alert("Thank you! You'll be receiving a confirmation email shortly.");
           console.log(this.state);
           location.reload();
        }
        else{

        }

    }

    handleChange(field, e){   
	    let fields = this.state.fields;
	    fields[field] = e.target.value; 
	    var firstCheck = document.getElementById("firstNameCheck");
	    var lastCheck = document.getElementById("lastNameCheck");
	    var emCheck = document.getElementById("emailCheck");
	    var phCheck = document.getElementById("phoneCheck");
	    var favCheck = document.getElementById("artistCheck");
	    var birthCheck = document.getElementById("birthCheck");

	    if(fields['first_name']){
	    	if(fields["first_name"].length>1){
	    		firstCheck.style.display = "block";
	    	}
	    	else{
	    		firstCheck.style.display = "none";
	    	}
    	}

    	if(fields['last_name']){
	    	if(fields["last_name"].length>1){
	    		lastCheck.style.display = "block";
	    	}
	    	else{
	    		lastCheck.style.display = "none";
	    	}
    	}

    	if(fields['email']){
	    	if(this.email(fields['email'])===true){
	    		emCheck.style.display = "block";
	    	}
	    	else{
	    		emCheck.style.display = "none";
	    	}
    	}

    	if(fields['phone']){
	    	if(this.phone(fields['phone'])===true){
	    		phCheck.style.display = "block";
	    	}
	    	else{
	    		phCheck.style.display = "none";
	    	}
    	}


    	if(fields['fav']){
	    	if(fields["fav"].length>1){
	    		artistCheck.style.display = "block";
	    	}
	    	else{
	    		artistCheck.style.display = "none";
	    	}
    	}
	    
	    this.setState({fields});

    }

    email(value){
        return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value);
  	}

  	phone(value){
  		console.log(value);
  		return /^(\()?[2-9]{1}\d{2}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/i.test(value);
  	}

  	// dob(value){
  	// 	var d = /\d{4}\/\d{1,2}\/\d{1,2}/;		
  	// 	return d.test(value);
  	// }

    componentDidMount(){
    	var selector = document.getElementById("phoneSignUp");
    	var im = new Inputmask({"mask": "(999) 999-9999"});
		im.mask(selector);
    }


}

					
	    


export default SignUp;