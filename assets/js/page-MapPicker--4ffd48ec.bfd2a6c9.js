(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{541:function(t,e,s){"use strict";s.r(e);var a=s(1),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"map-picker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#map-picker"}},[t._v("#")]),t._v(" Map Picker")]),t._v(" "),s("h2",{attrs:{id:"visual-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#visual-example"}},[t._v("#")]),t._v(" Visual Example")]),t._v(" "),s("p",[s("img",{attrs:{src:"/.attachments/applications/Controls/mappickercontrol.png",alt:"Displayed Map Picker On Form"}})]),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("Map Picker is a Power Apps component.")]),t._v(" "),s("p",[t._v("It can function in two modes - "),s("strong",[t._v("default")]),t._v(" or "),s("strong",[t._v("show records from fetch xml")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"default-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#default-mode"}},[t._v("#")]),t._v(" Default Mode")]),t._v(" "),s("p",[t._v("It is used to show one marker on map. You can bind the control to various fields representing address parts. Changing the marker or clicking on map will result into outputting address into the fields. It also works the other way where changing latitute or longitude field will update the marker position.")]),t._v(" "),s("h2",{attrs:{id:"show-records-from-fetch-xml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-records-from-fetch-xml"}},[t._v("#")]),t._v(" Show records from fetch xml")]),t._v(" "),s("p",[t._v("This mode is just for showing markers. You will not be able to output address to any of those fields. The pcf retrieves records using fetch xml and entity name and it renders them on the map. You can add custom pin icons and open pin details by clicking on the markers. Pin detail is represented by an adaptive card.")]),t._v(" "),s("p",[t._v("The pcf first tries to show marker location using latitude and longitude attributes. When it is null, it will look on address attribute value and tries to retrieve results from map api. If there is any, it will show the first one.")]),t._v(" "),s("h2",{attrs:{id:"binding-field"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-field"}},[t._v("#")]),t._v(" Binding Field")]),t._v(" "),s("p",[t._v("Control can be binded to any field of type SingleLine.Text.")]),t._v(" "),s("h2",{attrs:{id:"inputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),s("p",[t._v("General")]),t._v(" "),s("ul",[s("li",[t._v("Contry Code\n"),s("ul",[s("li",[t._v("Contry code ISO 31")])])]),t._v(" "),s("li",[t._v("Language")]),t._v(" "),s("li",[t._v("Is Set Mark By Click Disabled\n"),s("ul",[s("li",[t._v("True")]),t._v(" "),s("li",[t._v("False")])])]),t._v(" "),s("li",[t._v("Api Key - Parameter is here because of Portal. Authorization will not work there so the api key is taken from this parameter if filled.")])]),t._v(" "),s("p",[t._v("Default Map Picker")]),t._v(" "),s("ul",[s("li",[t._v("Address Components JSON - hold all the address components in one JSON.")]),t._v(" "),s("li",[t._v("Full Address")]),t._v(" "),s("li",[t._v("Country")]),t._v(" "),s("li",[t._v("Administrative Area")]),t._v(" "),s("li",[t._v("Locality")]),t._v(" "),s("li",[t._v("Sublocality")]),t._v(" "),s("li",[t._v("Street")]),t._v(" "),s("li",[t._v("Street Name")]),t._v(" "),s("li",[t._v("Street Number")]),t._v(" "),s("li",[t._v("Postal Code")]),t._v(" "),s("li",[t._v("Latitude")]),t._v(" "),s("li",[t._v("Longitude")])]),t._v(" "),s("p",[t._v("Retrieve markers from fetch xml")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Fetch XML - Singe line of fetch xml that is used to retrieve records. You can also link entities to get related data.")])]),t._v(" "),s("li",[s("p",[t._v("Entity Name - Name of entity to be retrieved.")])]),t._v(" "),s("li",[s("p",[t._v("Latitude Attribute - Name of attribute where the latitude will be stored. Use dot notation for linked entities: "),s("strong",[t._v("talxis_address.talxis_lat")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("Longitude Attribute - Name of attribute where the longitude will be stored. Use dot notation for linked entities: "),s("strong",[t._v("talxis_address.talxis_long")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("Address Attribute - Name of attribute where the address will be stored. Use dot notation for linked entities: "),s("strong",[t._v("talxis_address.talxis_fulladdress")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("Card Payload - JSON definition of an "),s("a",{attrs:{href:"https://adaptivecards.io/designer/",target:"_blank",rel:"noopener noreferrer"}},[t._v("adaptive card"),s("OutboundLink")],1),t._v(" template.")]),t._v(" "),s("blockquote",[s("p",[s("strong",[s("em",[t._v("NOTE:")])]),t._v(' There is a limitation in showing numbers in TextBlock components by the time of writing this. Example: You want to populate the template with data - "text": "{number}", number value is of type number. It will not be shown in the TextBox. You can get around this limitation by passing a space into the string - "text": "{number} ". '),s("a",{attrs:{href:"https://stackoverflow.com/questions/59662677/display-number-in-adaptive-card",target:"_blank",rel:"noopener noreferrer"}},[t._v("Stackoverflow: Display number in adaptive card"),s("OutboundLink")],1)])])]),t._v(" "),s("li",[s("p",[t._v("Pin Icons - JArray of pin icon definition. If you want to use just one custom icon, create a JArray with one object where you will specify the url. You can also specify a field name and a value so there would be different icons on one map. Look below on the examples.")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("One custom icon")])]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://somewebsite.com/record"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[s("strong",[t._v("Different custom icons")])]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://somewebsite.com/activerecord"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"attributeName"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"statecode"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://somewebsite.com/inactiverecord"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"attributeName"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"statecode"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])])])])]),t._v(" "),s("h2",{attrs:{id:"adaptive-card-localization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adaptive-card-localization"}},[t._v("#")]),t._v(" Adaptive Card Localization")]),t._v(" "),s("p",[t._v("You can localize the adaptive card using .resx files. Thanks to them you can fully localize the text that is not comming from record attributes. Those .resx files needs to be loaded by using dependencies on the form where you will have this pcf.\nExample: I have an account form in TALXIS Sales, so I crete those .resx files as webresources in TALXIS Sales App solution. I need to make sure to add a script on load of the form and it has to have dependencies on those .resx files to load them.\nPlaceholder for a localized string looks like this: "),s("strong",[t._v("{ $Resources(<webresources_logicalname>):"),s("key",[t._v(" }")])],1),t._v(". You can read more about it here: "),s("a",{attrs:{href:"https://docs.talxis.com/en/developer-guide/applications/utilities/uci-extensions/#getlocalizedstring",target:"_blank",rel:"noopener noreferrer"}},[t._v("GetLocalizedString"),s("OutboundLink")],1),t._v(".\nA text block in a template to display name of account will look like this:")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TextBlock"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"wrap"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"text"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{$Resources(localization/talxis_salesappsdefault):pinDetail.name }: ${$root.name}"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);