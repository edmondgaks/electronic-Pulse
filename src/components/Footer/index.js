import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrapper,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from './FooterElements'



function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Founding Team</FooterLinkTitle>
                                <FooterLink to='/'>Eric Gakuba</FooterLink>
                                <FooterLink to='/'>Founder & Ceo</FooterLink>
                        </FooterLinkItems>
                        
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            ev-Pulsar
                        </SocialLogo>
                        <WebsiteRights>
                            Eric Gakuba &copy; {new Date().getFullYear} All Rights Reserved
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.instagram.com/eric_gakuba_/"
                                            target='_blank' 
                                            aria-label='Facebook'
                                            >
                                            <FaFacebook />    
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/eric_gakuba_/"
                                            target='_blank' 
                                            aria-label='Twitter'
                                            >
                                            <FaTwitter />    
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/eric_gakuba_/"
                                            target='_blank' 
                                            aria-label='Instagram'
                                            >
                                            <FaInstagram />    
                            </SocialIconLink>
                            
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrapper>
            
        </FooterContainer>
    )
}

export default Footer
