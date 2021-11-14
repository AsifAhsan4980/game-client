import React from 'react'
import "./index.css"
import {animateScroll as scroll} from 'react-scroll';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (<>
            {/*<FooterContainer>*/}
            {/*    <FooterWrap>*/}
            {/*        <FooterLinkContainer>*/}
            {/*            <FooterLinkWrapper>*/}
            {/*                <FooterLinkItems>*/}
            {/*                    <FooterLinkTitle>About us</FooterLinkTitle>*/}
            {/*                    <FooterLink to='/'>How it works</FooterLink>*/}
            {/*                    <FooterLink to='/'>Testimonials</FooterLink>*/}
            {/*                    <FooterLink to='/'>Carrers</FooterLink>*/}
            {/*                    <FooterLink to='/'>Investor</FooterLink>*/}
            {/*                    <FooterLink to='/'>Terms of Service</FooterLink>*/}
            {/*                </FooterLinkItems>*/}
            {/*                <FooterLinkItems>*/}
            {/*                    <FooterLinkTitle>Contact Us</FooterLinkTitle>*/}
            {/*                    <FooterLink to='/'>Contact</FooterLink>*/}
            {/*                    <FooterLink to='/'>Support</FooterLink>*/}
            {/*                    <FooterLink to='/'>Destinations</FooterLink>*/}
            {/*                    <FooterLink to='/'>Sponsorships</FooterLink>*/}
            {/*                </FooterLinkItems>*/}
            {/*            </FooterLinkWrapper>*/}

            {/*            <FooterLinkWrapper>*/}
            {/*                <FooterLinkItems>*/}
            {/*                    <FooterLinkTitle>Videos</FooterLinkTitle>*/}
            {/*                    <FooterLink to='/'>Submit Video</FooterLink>*/}
            {/*                    <FooterLink to='/'>Ambassadors</FooterLink>*/}
            {/*                    <FooterLink to='/'>Agency</FooterLink>*/}
            {/*                    <FooterLink to='/'>Influencer</FooterLink>*/}
            {/*                </FooterLinkItems>*/}
            {/*                <FooterLinkItems>*/}
            {/*                    <FooterLinkTitle>Social Media</FooterLinkTitle>*/}
            {/*                    <FooterLink to='/'>Instagram</FooterLink>*/}
            {/*                    <FooterLink to='/'>Facebook</FooterLink>*/}
            {/*                    <FooterLink to='/'>Youtube</FooterLink>*/}
            {/*                    <FooterLink to='/'>Twitter</FooterLink>*/}
            {/*                </FooterLinkItems>*/}
            {/*            </FooterLinkWrapper>*/}
            {/*        </FooterLinkContainer>*/}
            {/*        <SocialMedia>*/}
            {/*            <SocialMediaWrap>*/}
            {/*                <SocialLogo to='/' onClick={toggleHome}>*/}
            {/*                    Restro*/}
            {/*                </SocialLogo>*/}
            {/*                <WebsiteRights>bengalsoftwares © {new Date().getFullYear()} All rights*/}
            {/*                    reserved.</WebsiteRights>*/}
            {/*                <SocialIcons>*/}
            {/*                    <SocialIconLink href='/' target='_blank' arial-label='Facebook'>*/}
            {/*                        <FaFacebook/>*/}
            {/*                    </SocialIconLink>*/}
            {/*                    <SocialIconLink href='//www.instagram.com/leonardtcomdt/' target='_blank'*/}
            {/*                                    arial-label='Instagram'>*/}
            {/*                        <FaInstagram/>*/}
            {/*                    </SocialIconLink>*/}
            {/*                    <SocialIconLink*/}
            {/*                        href='//www.youtube.com/channel/UCF6Cz50AqAJcg6JC5LDRElg/videos?view_as=subscriber'*/}
            {/*                        target='_blank' arial-label='Youtube'>*/}
            {/*                        <FaYoutube/>*/}
            {/*                    </SocialIconLink>*/}
            {/*                    <SocialIconLink href='/' target='_blank' arial-label='Twitter'>*/}
            {/*                        <FaTwitter/>*/}
            {/*                    </SocialIconLink>*/}
            {/*                    <SocialIconLink href='//www.linkedin.com/in/leonardtlauenstein/' target='_blank'*/}
            {/*                                    arial-label='Linkedin'>*/}
            {/*                        <FaLinkedin/>*/}
            {/*                    </SocialIconLink>*/}
            {/*                </SocialIcons>*/}
            {/*            </SocialMediaWrap>*/}
            {/*        </SocialMedia>*/}
            {/*    </FooterWrap>*/}
            {/*</FooterContainer>*/}

            <footer className="bg-primary-600 pt-10" data-v-5b0427c1 data-v-791b20d9>
                <div className="container md:!px-0" data-v-5b0427c1>
                    <div className="grid grid-cols-1 md:justify-start md:grid-cols-[22%,auto,25%] gap-12"
                         data-v-5b0427c1>
                        <div data-v-5b0427c1>
                            <h3 className="title" data-v-5b0427c1>Support</h3> <a href="#" target="_blank"
                                                                                  data-v-5b0427c1>
                            <div className="contact_box mb-4" data-v-5b0427c1>
                                <div
                                    className="flex items-center justify-center flex-shrink-0 px-5 py-3 border-r border-white border-opacity-25"
                                    data-v-5b0427c1>
                                    <v-icon name="phone" className="text-white w-5 h-5" data-v-5b0427c1/>
                                </div>
                                <div className="px-5 py-2.5" data-v-5b0427c1>
                                    <p className="text-white text-opacity-70 text-xs" data-v-5b0427c1>9AM - 10PM</p>
                                    <p className="text-xl font-medium text-white mt-1" data-v-5b0427c1>01712345678
                                    </p>
                                </div>
                            </div>
                        </a> <a href="#" target="_blank" data-v-5b0427c1>
                            <div className="contact_box mb-4" data-v-5b0427c1>
                                <div
                                    className="flex items-center justify-center flex-shrink-0 px-5 py-3 border-r border-white border-opacity-25"
                                    data-v-5b0427c1>
                                    <v-icon name="phone" className="text-white w-5 h-5" data-v-5b0427c1/>
                                </div>
                                <div className="px-5 py-2.5" data-v-5b0427c1>
                                    <p className="text-white text-opacity-70 text-xs" data-v-5b0427c1>9AM - 10PM</p>
                                    <p className="text-xl font-medium text-white mt-1" data-v-5b0427c1>01712345678
                                    </p>
                                </div>
                            </div>
                        </a>
                        </div>
                        <div data-v-5b0427c1>
                            <h3 className="title" data-v-5b0427c1>About</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-v-5b0427c1>
                                <div data-v-5b0427c1><a href="index.html" className="link nuxt-link-active"
                                                        data-v-5b0427c1>
                                    sit amet consectetur
                                </a> <a href="index.html" className="link nuxt-link-active" data-v-5b0427c1>
                                    Lorem, ipsum.
                                </a> <a href="index.html" className="link nuxt-link-active" data-v-5b0427c1>
                                    Lorem ipsum dol
                                </a> <a href="index.html" className="link nuxt-link-active" data-v-5b0427c1>
                                    amet consectetur
                                </a></div>
                                <div data-v-5b0427c1><a href="index.html" className="link nuxt-link-active"
                                                        data-v-5b0427c1>
                                    dolor sit
                                </a> <a href="index.html" className="link nuxt-link-active" data-v-5b0427c1>
                                    adipisicing
                                </a> <a href="index.html" className="link nuxt-link-active" data-v-5b0427c1>
                                    About
                                </a> <a href="index.html" className="link nuxt-link-active" data-v-5b0427c1>
                                    amet
                                </a></div>
                                <div data-v-5b0427c1><a href="index.html" className="link nuxt-link-active"
                                                        data-v-5b0427c1>
                                    dolor sit
                                </a> <a href="index.html" className="link nuxt-link-active" data-v-5b0427c1>
                                    adipisicing
                                </a> <a href="index.html" className="link nuxt-link-active" data-v-5b0427c1>
                                    About
                                </a> <a href="index.html" className="link nuxt-link-active" data-v-5b0427c1>
                                    amet
                                </a></div>
                            </div>
                        </div>
                        <div className="text-left" data-v-5b0427c1>
                            <h3 className="title" data-v-5b0427c1>Stay connected</h3>
                            <p className="text-white font-semibold mb-1.5 text-sm" data-v-5b0427c1>
                                Bengal Software
                            </p> <span className="text-white text-opacity-70 text-sm" data-v-5b0427c1>
                                    2th floor, Adept K.R. Complex, Beside Jamuna Future Park, Bashundhara R/A, Main Gate, Dhaka
                                </span>
                            <p className="text-white text-opacity-70 text-sm mt-2 mb-1.5" data-v-5b0427c1>Email:</p>
                            <p className="text-white font-semibold mb-1.5 text-sm" data-v-5b0427c1><a
                                href="mailto:email@gmail.com" data-v-5b0427c1>email@gmail.com</a></p>
                            <div className="flex items-center justify-center md:justify-start mt-5 space-x-4"
                                 data-v-5b0427c1><a href="#" data-v-5b0427c1>
                                <div
                                    className="w-9 h-9 flex-shrink-0 rounded-full overflow-hidden flex items-center justify-center p-2 bg-white bg-opacity-30 hover:bg-opacity-60"
                                    data-v-5b0427c1>
                                    <v-icon name="facebook" className="text-white abc"
                                             data-v-5b0427c1>
                                    </v-icon>
                                </div>
                            </a> <a href="#" data-v-5b0427c1>
                                <div
                                    className="w-9 h-9 flex-shrink-0 rounded-full overflow-hidden flex items-center justify-center p-2 bg-white bg-opacity-30 hover:bg-opacity-60"
                                    data-v-5b0427c1>
                                    <v-icon name="facebook" className="text-white abc"
                                            data-v-5b0427c1>
                                    </v-icon>
                                </div>
                            </a> <a href="#" data-v-5b0427c1>
                                <div
                                    className="w-9 h-9 flex-shrink-0 rounded-full overflow-hidden flex items-center justify-center p-2 bg-white bg-opacity-30 hover:bg-opacity-60"
                                    data-v-5b0427c1>
                                    <v-icon name="facebook" className="text-white"
                                            data-v-5b0427c1>
                                    </v-icon>
                                </div>
                            </a></div>
                        </div>
                    </div>
                    <div
                        className="border-white border-opacity-25 border-t py-6 flex justify-center flex-wrap md:flex-nowrap md:justify-between mt-8"
                        data-v-5b0427c1>
                        <p className="text-white text-opacity-70 text-xs mb-1.5 md:mb-0" data-v-5b0427c1>
                            © 2021 Bengal Software | All rights reserved
                        </p> <a href="index.html" className="text-sm text-white nuxt-link-active" data-v-5b0427c1>Sizishop</a>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
