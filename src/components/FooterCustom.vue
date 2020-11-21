<template>
  <footer class="footer">
    <div class="container mx-auto">
        <div class="flex flex-col xl:flex-row items-center">
            <section class="xl:w-4/12">
                <div class="sitelogo">
                    <div class="sitelogo">
                      <g-link to="/">
                        <img src="http://melagridsome.local/wp-content/uploads/2020/11/the-malena-law-firm-logo-black.png">
                      </g-link>
                    </div>
                </div>
                <!--/copyright-->
                <div class="copyright">
                   © 2020 Malena Law Firm. All rights reserved
                </div>
                <!--/copyright-->
            </section>
            <section class="xl:w-5/12 xl:ml-auto">
                <!--Footer Menu-->
                <div class="footer__menu">
                    <div class="menu-main-menu-container">
                      <ul id="menu-main-menu-1" class="menu">
                        <li class="menu-item">
                          <g-link class="nav__link" to="/services">Services</g-link>
                        </li>
                        <li class="menu-item">
                           <g-link class="nav__link" to="/services">About</g-link>
                        </li>
                        <li class="btn--contact menu-item">
                             <g-link class="nav__link" to="/contact">Contact</g-link>
                        </li>
                      </ul>
                    </div>
                </div>
                <!--/Footer Menu-->
                <!--Footer Menu-->
                <div class="footer__copyright">
                    <div class="menu-menu-copyright-container">
                        <ul id="menu-menu-copyright" class="menu">
                            <li class="menu-item">
                                <g-link class="nav__link" to="/privacy-policy">Privacy policy</g-link>
                            </li>
                            <li class="menu-item">
                                <g-link class="nav__link" to="/term-of-use">Terms of use</g-link>
                            </li>
                            <li id="menu-item-134" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-134">
                              <g-link class="nav__link" to="/accesibility-statement">Accesibility statement</g-link>
                            </li>
                        </ul>
                      </div>
                  </div>
                <!--/Footer Menu-->
            </section>
        </div>
    </div>
</footer><!-- Footer -->
</template>

<script>
export default {
  name: 'FooterCustom',
  
}
</script>

<style>
</style>