<?php


namespace App\Enum;


class AclResourceEnum {

    //To have same uuid everytime
    const PROP_UUIDS = [
        self::USER_LOGGED => '173a348e-12f6-4da4-ab8e-b984cee25eaa',
        self::CREATE_ROLE => 'cbfd4f00-35fb-4a6e-8c96-35ad7b9aefbe',
        self::EDIT_ROLE => '8a146009-deca-4625-b590-e44c2283c8d3',
        self::LIST_ALL_USERS => '717f72f6-6b6c-4033-aba3-130976fa3620'
    ];

    const PROP_DEPENDENT_ON = [
        self::USER_LOGGED => [],
        self::CREATE_ROLE => [
            self::USER_LOGGED
        ],
        self::EDIT_ROLE => [
            self::USER_LOGGED
        ],
        self::LIST_ALL_USERS => [
            self::USER_LOGGED
        ]
    ];


    const PROP_DEFAULT_ROLES = [
        'ROLE_USER' => [
            self::USER_LOGGED,
        ],

        'ROLE_ADMIN' => [
            self::USER_LOGGED,
            self::CREATE_ROLE,
            self::EDIT_ROLE,
            self::LIST_ALL_USERS
        ]
    ];

    //Resources
    const USER_LOGGED = 'USER_LOGGED';
    const LIST_ALL_USERS = 'LIST_ALL_USERS';
    const CREATE_ROLE = 'CREATE_ROLE';
    const EDIT_ROLE = 'EDIT_ROLE';

}