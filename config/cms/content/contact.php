<?php

use app\lib\cms\ContentType;

use function PHPSTORM_META\type;

$setting = new ContentType();

$setting->col2()->field("image")->label("Image")->type("image")->prop("accept", "images/jpg");
$setting->local()->field("description")->label("Description")->type('text');


return $setting();
