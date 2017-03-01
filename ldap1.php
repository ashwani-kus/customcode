<?php

$domain = 'EFHC-DC-12.efhc-2000.eriefamilyhealth.org';
$username = 'LDAP_User';
$password = 'c0nn3ct-ldap';
$ldapconfig['host'] = '10.6.0.71';
$ldapconfig['port'] = 389;
$ldapconfig['basedn'] = 'dc=domain,dc=com';

$ds=ldap_connect($ldapconfig['host'], $ldapconfig['port']);
ldap_set_option($ds, LDAP_OPT_PROTOCOL_VERSION, 3);
ldap_set_option($ds, LDAP_OPT_REFERRALS, 0);
$bind=ldap_bind($ds, $username, $password);

if($bind){
	echo "Authenticated";
}else{
	echo "Incorrect information";
}


?>