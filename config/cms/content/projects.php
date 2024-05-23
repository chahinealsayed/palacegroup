<?php

use app\lib\cms\ContentType;

$setting = new ContentType();

$setting->col2()->field("image")->label("Image")->type("image")->defaultValue(null);
$setting->col3()->field("homeimage")->label("Home Image")->type("image")->defaultValue(null);
$setting->col2()->field("gallery")->label("Gallery")->type("gallery")->prop("accept", "images/jpg")->defaultValue(null);
$setting->col1()->field("name")->label("Project name")->type("text")->defaultValue('');
$setting->col1()->field("owner")->label("Owner")->type("text")->defaultValue('');
$setting->col1()->field("location")->label("Location")->type("text")->defaultValue('');
$setting->col1()->field("area")->label("Area")->type("text")->defaultValue('');
$setting->col1()->field("period")->label("Period")->type("text")->defaultValue('');
$setting->col1()->field("year")->label("Year")->type("text")->defaultValue('');
$setting->col1()->field("status")->label("Status")->type("text")->defaultValue('');
$setting->col1()->field("type")->label("Project type")->type("text")->defaultValue('');
$setting->col1()->field("design")->label("Design by")->type("text")->defaultValue('');

$setting->col1()->field("show")->label("Show in Home")->type("toggle")->prop("trueValue", "1")->prop("falseValue", "0");;
$setting->col1()->field("homeposition")->label("Home Position")->defaultValue('0');
return $setting();
