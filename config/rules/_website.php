<?php

return [
    [
        "route" => "/default/about",
        "pattern" => "About",
    ],
    [
        "route" => "/default/content",
        "pattern" => "Offshore",
        "defaults" => [
            "id" => "cms.contents.default.offshore",
        ],
    ],
    [
        "route" => "/default/contents",
        "pattern" => "Services",
        "defaults" => [
            "type" => "services",
        ],
    ],
    [
        "route" => "/default/contents/",
        "pattern" => "Projects",
        "defaults" => [
            "type" => "projects",
        ],
    ],
    [
        "route" => "/default/contents",
        "pattern" => "Divisions",
        "defaults" => [
            "type" => "divisions",
        ],
    ],
    [
        "route" => "/default/contents/",
        "pattern" => "Contact",
        "defaults" => [
            "type" => "contact",
        ],
    ],
    [
        "route" => "/default/contents/",
        "pattern" => "Recruitment",
        "defaults" => [
            "type" => "recruitment",
        ],
    ],
    'Contents/<id:.+>' => '/default/content',

];
