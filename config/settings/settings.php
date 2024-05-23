<?php

use app\lib\cms\Setting;

$setting = new Setting();

$general = $setting->category("general")->label("General");
$general->field("logo")->type("image")->label("Logo")->defaultValue("")->attribute("accept", "images/*");
$general->field("year")->type("string")->label("Year")->defaultValue("1987")->attribute("type", "number")->attribute("min", 0)->attribute("max", 9999);

$social = $setting->category("social")->label("Social Media");
$social->field("facebook")->label("Facebook")->icon("mdiFacebook")->defaultValue("#");
$social->field("instagram")->label("Instagram")->icon("mdiInstagram")->defaultValue("#");
$social->field("linkedin")->label("Linkedin")->icon("mdiLinkedin")->defaultValue("#");


$location = $setting->category("location")->label("Location");
$location->field("latitude")->label("Latitude");
$location->field("longitude")->label("Longitude");



return $setting();
