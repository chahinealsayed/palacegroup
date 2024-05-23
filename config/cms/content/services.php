<?php

use app\lib\cms\ContentType;

use function PHPSTORM_META\type;

$setting = new ContentType();


$setting->col2()->field("image")->label("Image")->type("image")->prop("accept", "images/jpg");
$setting->local()->field("description")->label("Description")->type('text');
$setting->local()->field("description1")->label("Description1")->type('text');
$setting->local()->field("description2")->label("Description2")->type('text');


return $setting();
