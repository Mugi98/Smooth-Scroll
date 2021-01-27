import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
import {FooterContainer, FooterWrap, FooterLinksConatiner, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksConatiner>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink>How it works</FooterLink>
                                <FooterLink>Testimonials</FooterLink>
                                <FooterLink>Carrers</FooterLink>
                                <FooterLink>Investors</FooterLink>
                                <FooterLink>Terms of Services</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Video</FooterLinkTitle>
                                <FooterLink>Submit Video</FooterLink>
                                <FooterLink>Ambassadors</FooterLink>
                                <FooterLink>Agency</FooterLink>
                                <FooterLink>Influncer</FooterLink>                                
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink>Contact</FooterLink>
                                <FooterLink>Support</FooterLink>
                                <FooterLink>Destination</FooterLink>
                                <FooterLink>Sponsorships</FooterLink>                           
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink>Instagram</FooterLink>
                                <FooterLink>Facebook</FooterLink>
                                <FooterLink>Youtube</FooterLink>
                                <FooterLink>Twitter</FooterLink>                                
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksConatiner>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            Jackie
                        </SocialLogo>
                        <WebsiteRights>
                            Jackie &copy; {new Date().getFullYear()}
                            All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Github">
                                <FaGithub/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
