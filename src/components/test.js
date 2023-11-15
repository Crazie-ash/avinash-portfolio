// // HomeSocial.js
// import React from 'react';
// import PropTypes from 'prop-types';
// import { VscCode } from 'react-icons/vsc';

// // Externalized Icon Components
// const FacebookIcon = <VscCode />;
// const InstagramIcon = () => <i className="bx bxl-instagram"></i>;
// const TwitterIcon = () => <i className="bx bxl-twitter"></i>;
// const GithubIcon = () => <i className="bx bxl-github"></i>;
// const GmailIcon = () => <i className="bx bxl-gmail"></i>;

// const socialIcons = {
//   facebook: FacebookIcon,
//   instagram: InstagramIcon,
//   twitter: TwitterIcon,
//   github: GithubIcon,
//   gmail: GmailIcon,
// };

// const SocialIcon = ({ href, iconType, aos = 'fade-down', aosDelay = '250' }) => (
//   <a href={href} className="home_social-icon" data-aos={aos} data-aos-delay={aosDelay}>
//     {typeof socialIcons[iconType] === 'string' ? (
//       <i className={socialIcons[iconType]}></i>
//     ) : (
//       socialIcons[iconType]
//     )}
//   </a>
// );

// SocialIcon.propTypes = {
//   href: PropTypes.string,
//   iconType: PropTypes.oneOf(['facebook', 'instagram', 'twitter', 'github', 'gmail']).isRequired,
//   aos: PropTypes.string,
//   aosDelay: PropTypes.string,
// };

// const HomeSocial = () => (
//   <div className="home_social">
//     <SocialIcon href="#" iconType="facebook" />
//     <SocialIcon href="https://www.instagram.com/swag_vichu/" iconType="instagram" />
//     <SocialIcon href="#" iconType="twitter" />
//     <SocialIcon href="https://github.com/Vishwa000" iconType="github" />
//     <SocialIcon href="mailto:vichuvishwa004@gmail.com" iconType="gmail" />
//   </div>
// );

// export default HomeSocial;
