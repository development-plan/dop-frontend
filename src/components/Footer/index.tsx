import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faBell, faCompass, faUser } from '@fortawesome/free-regular-svg-icons';

const Footer = (navigation: any, focused: boolean, tintColor: any) => {
    const { routeName } = navigation.state;
    let icon = faQuestion;
    if (routeName === 'Home') {
        icon = faHome;
    } else if (routeName === 'Search') {
        icon = faCompass;
    } else if (routeName === 'Notice') {
        icon = faBell;
    } else if (routeName === 'Account') {
        icon = faUser;
    }

    return <FontAwesomeIcon icon={icon} color={tintColor} size={26} />;
};

export default Footer;
